//.data(d3.entries(orientations))

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    g = svg.append("g").attr("transform", "translate(60,0)"),
    orientations = {
        "top-to-bottom": {
            size: [width, height],
            x: function(d) { return d.x; },
            y: function(d) { return d.y; }
        },
        "right-to-left": {
            size: [height, width],
            x: function(d) { return width - d.y; },
            y: function(d) { return d.x; }
        },
        "bottom-to-top": {
            size: [width, height],
            x: function(d) { return d.x; },
            y: function(d) { return height - d.y; }
        },
        "left-to-right": {
            size: [height, width],
            x: function(d) { return d.y; },
            y: function(d) { return d.x; }
        }
    },
    newData = {
        id: '17',
        sex: 1,
        node: 'Kendisi',
        name: 'SONAT',
        lastname: 'ALPAGUT',
        placeofbirth: 'KADIKÖY08/03/1984',
        live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
        image: '',
        children: [
            {
                id: '16',
                sex: 2,
                node: 'Annesi',
                name: 'NERİMAN',
                lastname: 'ALPAGUT',
                placeofbirth: 'KURUDERE07/04/1953',
                live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                image: '',
                children: [
                    {
                        id: '14',
                        sex: 2,
                        node: 'Annesinin Annesi',
                        name: 'ZEHRA',
                        lastname: 'YAVUZELÇİN',
                        placeofbirth: 'KURUDERE15/02/1932',
                        live: 'İstanbul/Kadıköy/HASANPAŞA MAHALLESİ',
                        image: '',
                        children: [
                            {
                                id: '10',
                                sex: 2,
                                node: 'Annesinin Annesinin Annesi',
                                name: 'ŞAKİRE',
                                lastname: 'ÖZTAN',
                                placeofbirth: 'ORTAKÖY01/07/1910',
                                live: 'Kırklareli/Pınarhisar/KURUDERE KÖYÜ',
                                image: '',
                                children: []
                            },
                            {
                                id: '9',
                                sex: 1,
                                node: 'Annesinin Annesinin Babası',
                                name: 'MEHMET ALİ',
                                lastname: 'ÖZTAN',
                                placeofbirth: 'ORTAKÖY01/07/1905',
                                live: 'Kırklareli/Pınarhisar/KURUDERE KÖYÜ',
                                image: '',
                                children: []
                            }
                        ]
                    },
                    {
                        id: '13',
                        sex: 1,
                        node: 'Annesinin Babası',
                        name: 'OSMAN',
                        lastname: 'YAVUZELÇİN',
                        placeofbirth: 'KURUDERE23/09/1929',
                        live: 'İstanbul/Kadıköy/HASANPAŞA MAHALLESİ',
                        image: '',
                        children: [
                            {
                                id: '6',
                                sex: 2,
                                node: 'Annesinin Babasının Annesi',
                                name: 'ZELİHA',
                                lastname: 'YAVUZELÇİN',
                                placeofbirth: 'DİMETOKA01/07/1893',
                                live: 'Kırklareli/Pınarhisar/KURUDERE KÖYÜ',
                                image: '',
                                children: []
                            },
                            {
                                id: '4',
                                sex: 1,
                                node: 'Annesinin Babasının Babası',
                                name: 'İBRAHİM',
                                lastname: 'YAVUZELÇİN',
                                placeofbirth: 'DİMETOKA01/07/1882',
                                live: 'Kırklareli/Pınarhisar/KURUDERE KÖYÜ',
                                image: '',
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: '15',
                sex: 1,
                node: 'Babası',
                name: 'AYHUN',
                lastname: 'ALPAGUT',
                placeofbirth: 'ADAPAZARI05/08/1950',
                live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                image: '',
                children: [
                    {
                        id: '12',
                        sex: 2,
                        node: 'Babasının Annesi',
                        name: 'VİLDAN',
                        lastname: 'ALPAGUT',
                        placeofbirth: 'İSTANBUL17/03/1929',
                        live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                        image: '',
                        children: [
                            {
                                id: '8',
                                sex: 2,
                                node: 'Babasının Annesinin Annesi',
                                name: 'HAMİDE',
                                lastname: 'KINAY',
                                placeofbirth: 'MALATYA01/07/1903',
                                live: 'İstanbul/Fatih/BALABANAĞA MAHALLESİ',
                                image: '',
                                children: [
                                    {
                                        id: '2',
                                        sex: 1,
                                        node: 'Babasının Annesinin Annesinin Babası',
                                        name: 'HASAN',
                                        lastname: '-',
                                        placeofbirth: 'BATUM01/07/1854',
                                        live: 'İstanbul/Maltepe/YALI MAHALLESİ',
                                        image: '',
                                        children: []
                                    }
                                ]
                            },
                            {
                                id: '5',
                                sex: 1,
                                node: 'Babasının Annesinin Babası',
                                name: 'GALİP',
                                lastname: 'KINAY',
                                placeofbirth: 'İSTANBUL01/07/1886',
                                live: 'İstanbul/Fatih/BALABANAĞA MAHALLESİ',
                                image: '',
                                children: []
                            }
                        ]
                    },
                    {
                        id: '11',
                        sex: 1,
                        node: 'Babasının Babası',
                        name: 'SELİM',
                        lastname: 'ALPAGUT',
                        placeofbirth: 'ADAPAZARI01/04/1919',
                        live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                        image: '',
                        children: [
                            {
                                id: '7',
                                sex: 2,
                                node: 'Babasının Babasının Annesi',
                                name: 'ESMA SARE',
                                lastname: 'ALPAGUT',
                                placeofbirth: 'AKYAZI01/07/1897',
                                live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                                image: '',
                                children: []
                            },
                            {
                                id: '3',
                                sex: 1,
                                node: 'Babasının Babasının Babası',
                                name: 'YUNUS',
                                lastname: 'ALPAGUT',
                                placeofbirth: 'ADAPAZARI01/07/1865',
                                live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                                image: '',
                                children: [
                                    {
                                        id: '1',
                                        sex: 2,
                                        node: 'Babasının Babasının Babasının Annesi',
                                        name: 'EMİNE ŞERİFE',
                                        lastname: '-',
                                        placeofbirth: 'ADAPAZARI01/07/1839',
                                        live: 'Sakarya/Adapazarı/ORTA MAHALLESİ',
                                        image: '',
                                        children: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    treeData =  {
        "name": "Top Level",
        "parent": "null",
        "children": [
            {
                "name": "Level 2: A",
                "parent": "Top Level",
                "children": [
                    {
                        "name": "Son of A",
                        "parent": "Level 2: A"
                    },
                    {
                        "name": "Daughter of A",
                        "parent": "Level 2: A"
                    }
                ]
            },
            {
                "name": "Level 2: B",
                "parent": "Top Level"
            }
        ]
    }
;

var tree = d3.cluster()
    .size([height, width - 160]);

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var root = d3.hierarchy(newData);
tree(root);

var link = g.selectAll(".link")
    .data(root.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .attr("d", function(d) {
        return "M" + d.y + "," + d.x
            + "C" + (d.parent.y + 100) + "," + d.x
            + " " + (d.parent.y + 100) + "," + d.parent.x
            + " " + d.parent.y + "," + d.parent.x;
    });

var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
    .attr("transform", function(d) {
        return "translate(" + d.y + "," + d.x + ")";
    })

node.append("circle")
    .attr("r", 10)

node.append("text")
    .attr("dy", 3)
    .attr("x", function(d) { return d.children ? -12 : 12; })
    .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
    .text(function(d) {
        return d.data.name;
    });