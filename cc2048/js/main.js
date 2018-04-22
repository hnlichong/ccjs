import '../css/main.styl'
import Util from './util.js'

'use strict'

const TEMPLATES = {
    game: `
    <div class="game-container">
        <div class="game-wrapper">
        <table>
            <tbody class="grids-container">
            </tbody>
        </table>
        <div class="tiles-container"></div>
        </div>
    </div>
    `,
}

const SETTINGS = {
    gameContainer: document.querySelector('#gameApp'),
    rowLen: 4,
    colLen: 4
}


class Grids {
    constructor() {
        this.gridsContainer = SETTINGS.gameContainer.querySelector('.grids-container')
        this.rowLen = SETTINGS.rowLen
        this.colLen = SETTINGS.colLen
        // grid content
        this.contents = []

        this.init()
    }

    init() {
        // iterate to generate tbody content
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
        this.gridsContainer.innerHTML = s

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
        // todo
        this.tilesContainer = SETTINGS.gameContainer.querySelector('.tiles-container')
        this.element = this.render(rowIndex, colIndex, value)
        this.value = value
        this.rowIndex = rowIndex
        this.colIndex = colIndex
    }

    set value(value) {
        this.element.innerText = value
        this._value = value
    }

    get value() {
        return this._value
    }

    set rowIndex(rowIndex) {
        this.element.className = this.element.className.replace(/tile-(\d+)-(\d+)/,
            `tile-${rowIndex}-$2`)
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
        div.className = `tile tile-${rowIndex}-${colIndex}`
        div.innerText = value
        this.tilesContainer.appendChild(div)
        return div
    }

}

class Game {
    constructor() {
        // render template
        SETTINGS.gameContainer.innerHTML = TEMPLATES.game
        this.grids = new Grids()
        this.score = 0
        this.randomTileValues = [2,4]

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
                    this.moveTiles(direction)
                    this.newRandomTiles(1)
                }
                break
            }
        }
    }
    moveTiles(direction) {
        // update tiles
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
                        while (tri < this.grids.contents.length - 1){
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
    newRandomTiles(n=1){
        for (let i = 0; i < n; i++) {
            let [rowIndex, colIndex] = Util.getRandomItem(this.grids.getEmptyGridsPos())
            let value = Util.getRandomItem(this.randomTileValues)
            this.grids.contents[rowIndex][colIndex] = new Tile(value, rowIndex, colIndex)
        }
    }


}


/*
main
 */

const game = new Game()

