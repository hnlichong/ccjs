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
        this.renderGrid()
    }
    renderGrid() {
        let gridHTML = `
            <table>
                <tbody>
                ${(function () {
                    let s = ''
                    for (let ri = 0; ri < this.rowLen; ri++) {
                        s += `<tr>`
                        // init 2d array stants for position [ri][ci] occupy
                        this.status[ri] = []
                        for (let ci = 0; ci < this.colLen; ci++) {
                            s += `<td>${ri}, ${ci}</td>`
                            // init occupied status
                            this.status[ri][ci] = 0
                        }
                        s += `</tr>`
                    }
                    return s

                }).bind(this)()}
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
        this.container = SETTINGS.container.querySelector('.game-wrapper')
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
            colIndex
        }
        this.tiles.push(tile)
        this.status[rowIndex][colIndex] = 1
        this.renderTile(rowIndex, colIndex, val)
        return tile
    }
    renderTile(rowIndex, colIndex, value) {
        let div = document.createElement('div')
        div.className = `tile tile-${rowIndex}-${colIndex}`
        div.innerText = value
        this.container.appendChild(div)
    }

}

class Game {
    constructor() {
        this.tile = new Tile()
        this.init()
    }

    init() {
        this.tile.genNewTile()
    }

}


/*
main
 */

const game = new Game()
console.log(game.tile.tiles)