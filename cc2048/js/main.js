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
    size: [4, 4]
}


class Grid {
    constructor() {
        this.gridsContainer = SETTINGS.gameContainer.querySelector('.grids-container')
        this.size = SETTINGS.size
        this.rowLen = this.size[0]
        this.colLen = this.size[1]

        // occupied status
        this.status = []
        // grid content
        this.contents = []

        this.init()
    }

    init() {
        // iterate to generate tbody content
        let s = ''
        for (let ri = 0; ri < this.rowLen; ri++) {
            s += `<tr>`
            // init 2d array stants for position [ri][ci] occupy
            this.status[ri] = []
            // init 2d array grid content
            this.contents[ri] = []
            for (let ci = 0; ci < this.colLen; ci++) {
                s += `<td>${ri}, ${ci}</td>`
                // init occupied status
                this.status[ri][ci] = 0
                this.contents[ri][ci] = null
            }
            s += `</tr>`
        }
        this.gridsContainer.innerHTML = s

    }

    getEmptyGridsPosArr() {
        const arr = []
        this.status.forEach((row, ri) => {
            row.forEach((col, ci) => {
                if (col === 0) arr.push([ri, ci])
            })
        })
        return arr
    }
}

class Tile extends Grid {
    constructor() {
        super()
        this.tiles = []
        this.initVals = [2, 4]
        this.tilesContainer = SETTINGS.gameContainer.querySelector('.tiles-container')
    }

    // renderInitTiles()
    genNewTile(val = -1) {
        if (val === -1) {
            val = Util.getRandomItem(this.initVals)
        }
        const emptyGridsPosArr = this.getEmptyGridsPosArr()
        let emptyGrid = Util.getRandomItem(emptyGridsPosArr)
        let rowIndex = emptyGrid[0]
        let colIndex = emptyGrid[1]
        const tile = {
            value: val,
            rowIndex,
            colIndex,
            element: this.renderTile(rowIndex, colIndex, val)
        }
        this.tiles.push(tile)
        this.status[rowIndex][colIndex] = 1
        this.contents[rowIndex][colIndex] = tile
        return tile
    }

    renderTile(rowIndex, colIndex, value) {
        let div = document.createElement('div')
        div.className = `tile tile-${rowIndex}-${colIndex}`
        div.innerText = value
        this.tilesContainer.appendChild(div)
        return div
    }
    updateTile(tile, rowIndex, colIndex) {

        element.className = element.className.replace(/tile-\d+-\d+/, `tile-${rowIndex}-${colIndex}`)
    }
    moveTiles(direction) {
        // left, right -> ri-, ri+
        // up, down -> ci-, ci+

        // update tiles
        switch (direction) {
            case 'left': {
                // colIndex--
                for (let ri = 1, len = this.rowLen; ri < len; ri++) {
                    for (let ci = 1, len = this.colLen; ci < len; ci++) {
                        let tile = this.contents[ri][ci]
                        if (tile !== null) {
                            tile.colIndex--
                            this.updateClassName(tile)
                            this.contents[ri][ci-1] = tile

                        }
                    }
                }
                break
            }
            case 'right': {
                tile.colIndex++
                break
            }
            case 'up': {
                tile.rowIndex--
                break
            }
            case 'down': {
                tile.rowIndex++
                break
            }
            default:
                break
        }
        // update tile className
        tile.element.className = tile.element.className.replace(/tile-\d+-\d+/, `tile-${tile.rowIndex}-${tile.colIndex}`)
        // update grid status todo


    }
}

class Game {
    constructor() {
        // render template
        SETTINGS.gameContainer.innerHTML = TEMPLATES.game
        this.tile = new Tile()
        this.init()
    }

    init() {
        this.tile.genNewTile()
        document.addEventListener('keydown', this.gameEvents.bind(this))
    }

    gameEvents(ev) {
        ev = ev || event
        ev.preventDefault()
        switch (ev.type) {
            case 'keydown': {
                const keyMap = {
                    '37': 'left',
                    '38': 'up',
                    '39': 'right',
                    '40': 'down'
                }
                let direction = keyMap[ev.keyCode + '']
                if (direction === undefined) break
                this.tile.moveTiles(direction)
                break
            }
        }
    }

    f1() {

    }


}


/*
main
 */

const game = new Game()

