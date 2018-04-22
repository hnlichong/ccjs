import '../css/main.styl'
import Util from './util.js'

'use strict'

const TEMPLATES = {
    game: `<div class="game-container">
    <header class="game-header clearfix">
        <h2 class="game-title">2048</h2>
        <button class="new-game">NEW GAME</button>
        <ul class="game-best-score-box">
            <li>BEST</li>
            <li class="game-best-score">0</li>
        </ul>
        <ul class="game-score-box">
            <li>SCORE</li>
            <li class="game-score">0</li>
        </ul>
    </header>
    <div class="game-wrapper">
        <table>
            <tbody class="grids-container">
            </tbody>
        </table>
        <div class="tiles-container"></div>
    </div>
</div>`,

}

const SETTINGS = {
    rowLen: 4,
    colLen: 4,
    target: 2048,
    // todo: You win!
}


class Grids {
    constructor(el) {
        this.container = el
        this.rowLen = SETTINGS.rowLen
        this.colLen = SETTINGS.colLen
        // grid content
        this.contents = []

        this.init()
    }

    init() {
        // render HTML, iterate to generate tbody content
        let s = ''
        for (let ri = 0; ri < this.rowLen; ri++) {
            s += `<tr>`
            // init 2d array grids contents
            this.contents[ri] = []
            for (let ci = 0; ci < this.colLen; ci++) {
                s += `<td>${ri}, ${ci}</td>`
                this.contents[ri][ci] = null
            }
            s += `</tr>`
        }
        this.container.innerHTML = s

    }

    getEmptyGridsPos() {
        const arr = []
        for (let ri = 0; ri < this.rowLen; ri++) {
            for (let ci = 0; ci < this.colLen; ci++) {
                if (this.contents[ri][ci] === null) {
                    arr.push([ri, ci])
                }
            }
        }
        return arr
    }
}

class Tile {
    constructor(value = 2, rowIndex = 0, colIndex = 0) {
        if (Tile.tilesContainer === undefined) {
            throw new Error('Tile must be assigned a container in Tils.tilesContainer')
        }
        this.container = Tile.tilesContainer
        this.element = this.render(rowIndex, colIndex, value)
        this.value = value
        this.rowIndex = rowIndex
        this.colIndex = colIndex
    }

    set value(value) {
        this._value = value
        this.element.innerText = value
        this.element.className = this.element.className.replace(
            /tile-value-(\d+)/, `tile-value-${value}`)
    }

    get value() {
        return this._value
    }

    set rowIndex(rowIndex) {
        this.element.className = this.element.className.replace(
            /tile-(\d+)-(\d+)/, `tile-${rowIndex}-$2`)
        this._rowIndex = rowIndex
    }

    get rowIndex() {
        return this._rowIndex
    }

    set colIndex(colIndex) {
        this.element.className = this.element.className.replace(/tile-(\d+)-(\d+)/,
            `tile-$1-${colIndex}`)
        this._colIndex = colIndex
    }

    get colIndex() {
        return this._colIndex
    }

    render(rowIndex, colIndex, value) {
        let div = document.createElement('div')
        div.className = `tile tile-${rowIndex}-${colIndex} tile-value-${value}`
        div.innerText = value
        this.container.appendChild(div)
        return div
    }
}

class Game {
    get score() {
        return this._score
    }

    set score(value) {
        this._score = value
        this.scoreEl.innerText = value
    }

    constructor(el) {
        // render template
        el.innerHTML = TEMPLATES.game
        this.container = el.querySelector('.game-container')
        this.grids = new Grids(el.querySelector('.grids-container'))
        Tile.tilesContainer = el.querySelector('.tiles-container')
        this.scoreEl = el.querySelector('.game-score')
        this._score = 0

        document.addEventListener('keydown', this.gameEvents.bind(this))
        // init 2 tiles
        this.newRandomTiles(2)
    }

    gameEvents(ev) {
        ev = ev || event
        switch (ev.type) {
            case 'keydown': {
                const keyMap = {
                    '37': 'left',
                    '38': 'up',
                    '39': 'right',
                    '40': 'down'
                }
                let direction = keyMap[ev.keyCode + '']
                if (direction !== undefined) {
                    ev.preventDefault()
                    let someMoved = this.moveTiles(direction)
                    // todo: 移动不了不能newTile
                    // if (someMoved) {
                        let newTiles = this.newRandomTiles(1)
                        if (newTiles.length === 0) {
                            //todo
                            alert('Game over!')
                        }
                    // }
                }
                break
            }
        }
    }

    moveTiles(direction) {
        let someMoved = false
        switch (direction) {
            case 'left': {
                // colIndex--
                for (let ri = 0, len = this.grids.contents.length; ri < len; ri++) {
                    let rowContents = this.grids.contents[ri]
                    let updatedRow = []
                    for (let ci = 0, len = rowContents.length; ci < len; ci++) {
                        let tile = rowContents[ci]
                        if (tile === null) continue
                        // get the lastTile in the updatedRow to compare with the coming tile
                        let lastTile = updatedRow[updatedRow.length - 1]
                        if (lastTile === undefined || lastTile.value !== tile.value) {
                            let len = updatedRow.push(tile)
                            // update tile position
                            tile.colIndex = len - 1
                        } else {
                            // value equals, then merge the tile into lastTile
                            // update value
                            lastTile.value += tile.value
                            this.score += lastTile.value
                            // remove the merged tile
                            tile.element.parentNode.removeChild(tile.element)
                        }
                    }
                    // fiil the rest positions of updatedRow with null
                    while (updatedRow.length < rowContents.length) {
                        updatedRow.push(null)
                    }
                    // update the grid contents
                    this.grids.contents[ri] = updatedRow
                }

                break
            }
            case 'right': {
                // colIndex++
                for (let ri = 0, len = this.grids.contents.length; ri < len; ri++) {
                    let rowContents = this.grids.contents[ri]
                    let updatedRow = []
                    for (let ci = rowContents.length - 1; ci >= 0; ci--) {
                        let tile = rowContents[ci]
                        if (tile === null) continue
                        // get the lastTile in the updatedRow to compare with the coming tile
                        let lastTile = updatedRow[0]
                        if (lastTile === undefined || lastTile.value !== tile.value) {
                            let len = updatedRow.unshift(tile)
                            // update tile position
                            tile.colIndex = rowContents.length - len
                        } else {
                            // value equals, then merge the tile into lastTile
                            lastTile.value += tile.value
                            this.score += lastTile.value
                            tile.element.parentNode.removeChild(tile.element)
                        }
                    }
                    // fiil the rest positions of updatedRow with null
                    while (updatedRow.length < rowContents.length) {
                        updatedRow.unshift(null)
                    }
                    // update the grid contents
                    this.grids.contents[ri] = updatedRow
                }

                break
            }
            case 'up': {
                // rowIndex--
                for (let ri = 1, len = this.grids.contents.length; ri < len; ri++) {
                    for (let ci = 0, len = this.grids.contents[ri].length; ci < len; ci++) {
                        let tile = this.grids.contents[ri][ci]
                        if (tile === null) continue
                        let tri = tile.rowIndex
                        while (tri > 0) {
                            tri--
                            let preTile = this.grids.contents[tri][ci]
                            if (preTile !== null) {
                                if (preTile.value === tile.value) {
                                    // merged tile into the preTile with the same value
                                    // update preTile value
                                    preTile.value += tile.value
                                    this.score += preTile.value
                                    // remove this tile
                                    tile.element.parentNode.removeChild(tile.element)
                                    this.grids.contents[ri][ci] = null
                                    break
                                } else {
                                    tile.rowIndex = tri + 1
                                    this.grids.contents[ri][ci] = null
                                    this.grids.contents[tile.rowIndex][ci] = tile
                                    break
                                }
                            } else if (tri === 0) {
                                tile.rowIndex = tri
                                this.grids.contents[ri][ci] = null
                                this.grids.contents[tri][ci] = tile
                            }
                        }
                    }
                }
                break
            }
            case 'down': {
                // rowIndex++
                for (let ri = this.grids.contents.length - 2; ri >= 0; ri--) {
                    for (let ci = 0, len = this.grids.contents[ri].length; ci < len; ci++) {
                        let tile = this.grids.contents[ri][ci]
                        if (tile === null) continue
                        let tri = tile.rowIndex
                        while (tri < this.grids.contents.length - 1) {
                            tri++
                            let preTile = this.grids.contents[tri][ci]
                            if (preTile !== null) {
                                if (preTile.value === tile.value) {
                                    // merged tile into the preTile with the same value
                                    // update preTile value
                                    preTile.value += tile.value
                                    this.score += preTile.value
                                    // remove this tile
                                    tile.element.parentNode.removeChild(tile.element)
                                    this.grids.contents[ri][ci] = null
                                    break
                                } else {
                                    tile.rowIndex = tri - 1
                                    this.grids.contents[ri][ci] = null
                                    this.grids.contents[tile.rowIndex][ci] = tile
                                    break
                                }
                            } else if (tri === this.grids.contents.length - 1) {
                                tile.rowIndex = tri
                                this.grids.contents[ri][ci] = null
                                this.grids.contents[tile.rowIndex][ci] = tile
                            }
                        }
                    }
                }
                break
            }
            default:
                break
        }
    }

    newRandomTiles(n = 1, randomValues = [2, 4]) {
        let newTiles = []
        for (let i = 0; i < n; i++) {
            let emptyGridsPos = this.grids.getEmptyGridsPos()
            if (emptyGridsPos.length === 0) {
                break
            }
            let [rowIndex, colIndex] = Util.getRandomItem(emptyGridsPos)
            let value = Util.getRandomItem(randomValues)
            let tile = new Tile(value, rowIndex, colIndex)
            this.grids.contents[rowIndex][colIndex] = tile
            newTiles.push(tile)
        }
        return newTiles
    }


}


/*
main
 */

const game = new Game(document.querySelector('#gameApp'))

