var genLongHTML = function () {
    var ss = ''
    for (let i = 0; i < 1000; i++) {
        ss += '<div>' + i + '</div>'
    }
    // document.body.insertAdjacentHTML('afterbegin', ss)
    var wrapper = document.createElement('div')
    wrapper.id = 'wrapper'
    wrapper.innerHTML = ss
    document.body.insertBefore(wrapper, document.body.firstChild)

}

function getRandomInt(min, max) {
    // return a random integer of min <= x < max
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
