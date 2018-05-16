class ProgressBar {
    constructor(root, progress, config) {
        this.root = root
        this.progress = progress
        this.config = {
            bgColor: '#808080',
            activeColor: '#3B7C28',
            ...config
        }
    }
    render() {
        this.root.innerHTML = this.TEMPLATE
    }
}

class HourGlass extends ProgressBar {
    constructor(...args) {
        super(...args)
        this.render()
        this.bind()
    }
    bind() {
        this.progressEl = null
    }
}
HourGlass.TEMPLATE = `
    <div class="triangle-up"></div>
    <div class="triangle-down"></div>
`


export default function factory(el, type, ...rest) {
    switch (type.toLowerCase()) {
        case 'circle': {
            return new Circle(el, ...rest)
        }
        case 'strip': {
            return new Strip()
        }
        case 'hourglass': {
            return new HourGlass()
        }
    }
    return null
}

