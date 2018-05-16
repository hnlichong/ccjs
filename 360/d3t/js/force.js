var width = 960,
    height = 600

var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)

var force = d3.layout.force()
    .gravity(0.05)
    .distance(100)
    .charge(-100)
    .size([width, height])


force
    .nodes(window.dataJSON)
    // .links(json.links)
    .start()

// var link = svg.selectAll('.link')
//     .data(json.links)
//     .enter().append('line')
//     .attr('class', 'link')

var node = svg.selectAll('.node')
    .data(window.dataJSON)
    .enter().append('g')
    .attr('class', 'node')
    .call(force.drag)

// node.append('image')
//     .attr('xlink:href', 'https://github.com/favicon.ico')
//     .attr('x', -8)
//     .attr('y', -8)
//     .attr('width', 16)
//     .attr('height', 16)

node.append('text')
    .attr('x', 12)
    .attr('dy', 3)
    .text(function (d) {
        return d.sip
    })
node.append("circle")
    .attr("r", 10)
    .attr("stroke", "grey")
    .attr("stroke-width", 2)
    .attr("fill", "transparent")

force.on('tick', function () {
    // link.attr('x1', function (d) {
    //     return d.source.x
    // })
    //     .attr('y1', function (d) {
    //         return d.source.y
    //     })
    //     .attr('x2', function (d) {
    //         return d.target.x
    //     })
    //     .attr('y2', function (d) {
    //         return d.target.y
    //     })

    node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
    })
})
