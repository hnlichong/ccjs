import '../css/main.styl'
import Util from './util.js'

'use strict'

const TEMPLATES = {
    game(gridHTML='', tileHTML='') {
        return `
    <div class="game-container">
        <div class="game-wrapper">
        ${gridHTML}
        ${tileHTML}
        </div>
    </div>
    `
    },
    tile(rowIndex, colIndex, value) {
        return `
        <div class="tile tile-${rowIndex}-${colIndex}">${value}</div>
        `
    }
}

const SETTINGS = {
    container: document.querySelector('.game'),
    size: [4, 4]
}


class Grid {
    constructor() {
        this.container = SETTINGS.container
        this.size = SETTINGS.size
        this.rowLen = this.size[0]
        this.colLen = this.size[1]

        // occupied status
        this.status = []
        // grid content
        this.content = []

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
            this.content[ri] = []
            for (let ci = 0; ci < this.colLen; ci++) {
                s += `<td>${ri}, ${ci}</td>`
                // init occupied status
                this.status[ri][ci] = 0
                this.content[ri][ci] = null
            }
            s += `</tr>`
        }
        this.renderGrids(s)

    }
    renderGrids(tbodyHTML) {
        let gridHTML = `
            <table>
                <tbody>
                ${tbodyHTML}
                </tbody>
            </table>
        `
        this.container.innerHTML = TEMPLATES.game(gridHTML)
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
        this.tilesContainer = SETTINGS.container.querySelector('.game-wrapper')
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
        super.status =''
        return tile
    }
    renderTiles(rowIndex, colIndex, value) {
        let div = document.createElement('div')
        div.className = `tile tile-${rowIndex}-${colIndex}`
        div.innerText = value
        this.tilesContainer.appendChild(div)
        return div
    }
    moveTiles(direction) {
        // left, right -> ri-, ri+
        // up, down -> ci-, ci+
        this.tiles.forEach((tile)=>{
            // update tile position
            switch (direction) {
                case 'left': {
                    tile.colIndex--
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
                default: break
            }
            // update tile className
            tile.element.className = tile.element.className.replace(/tile-\d+-\d+/, `tile-${tile.rowIndex}-${tile.colIndex}`)
            // update grid status todo
        })

    }

}

class Game {
    constructor() {
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
                let direction = keyMap[ev.keyCode+'']
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

