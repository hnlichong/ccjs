class Grid {
    /**
     *
     * @param container
     * @param {Array}size, <= [10, 10]
     */
    constructor(container=null, size=[4,4]){
        this.container = container
        this.size = size
    }
    init() {
        const tab = document.createElement('table')
        const tbd = tab.createTBody()
        for (let ri=0, rowLen=this.size[0]; ri < rowLen; ri++) {
            let row = tbd.insertRow(ri)
            for (let ci=0, colLen=this.size[1]; ci < colLen; ci++) {
                let cell = row.insertCell(ci)
                cell.innerText = ri + ', ' + ci
            }
        }
        this.container.appendChild(tab)

    }
}


const grid = new Grid(
    document.querySelector('.game-wrapper'),
    [4,4]
)
grid.init()