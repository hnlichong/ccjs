export default {
    /**
     * min <= randomInt < max
     * @param min
     * @param max
     * @returns {*}
     */
    getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
    },
    getRandomItem(arr) {
        return arr[this.getRandomInt(0, arr.length)]
    },
    mandatoryArg() {
        throw new Error('mandatory argument missing!')
    }
}