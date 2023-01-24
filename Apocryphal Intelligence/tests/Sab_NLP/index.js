// window.onload = function () {

//     $.get(
//         "/getWC",
//         (res) => {
//             // console.log(res);
//             // console.log(res[0])
//             makeBarChart(`svg1`, res[1], [0, 1000000], res[0]);
//             makeBarChart(`svg2`, res[2], [0, 20000], res[0]);
//         }
//     );


//     $.get(
//         "/getTF",
//         (res) => {
//             // console.log(res.length);
//             // console.log(res[0]);
//             // WordCloud.minFontSize = "15px";
//             for (let i = 0; i < res.length; i++) {
//                 WordCloud(document.getElementById(`TFcanvas${i}`), { list: res[i] });
//             }
//         }
//     );

//     $.get(
//         "/getTFIDF",
//         (res) => {
//             // console.log(res.length);
//             // console.log(res[0]);
//             for (let i = 0; i < res.length; i++) {
//                 WordCloud(document.getElementById(`TFIDFcanvas${i}`), { list: res[i] });
//             }
//         }
//     );

//     $.get(
//         "/getSentiment",
//         (res) => {
//             // console.log(res);
//             makeBarChart(`svg3`, res, [-1, 1]);
//         }
//     );

//     $.get(
//         "/getSingles",
//         (res) => {
//             // // console.log(res);
//             // console.log(res.texts);
//             // // makeBarChart(`svg4`, res.pain, [0, 1]);
//             // for (let i in res) {
//             //     makeBarChart(`svgSingles${i}`, res[i], [0, 1]);
//             // }
//             makeGroupedBarChart(`svg4`, res);
//         }
//     );


//     //     groupedData = {
//     //         `titles`: [`Bible`, `Qur'an`, `Bhagavad Gita`, `Vedas`],
//     //         love : { bible: 0.1, quran: 0.2, bgita: 0.3, vedas: 0.4},
//     //             `joy`: [0.5, 0.2, 0.6, 0.4],
//     //                 `peace`: [0.9, 0.1, 0.5, 0.7]
//     // }
//     // makeGroupedBarChart(`svg4`, groupedData, [-.5, .5]);
//     // makeGroupedBarChart();

//     function makeBarChart(id, data, domain, titles) {
//         var id = d3.select(`#${id}`),
//             // set margin
//             margin = 100,
//             width = id.attr("width") - margin,
//             height = id.attr("height") - margin
//         // set scale
//         var xScale = d3.scaleBand().range([0, width]).padding(0.25),
//             yScale = d3.scaleLinear().range([height, 0]);
//         // set domain
//         xScale.domain(data);
//         yScale.domain(domain);
//         // format axis
//         id.append("g")
//             .attr("transform", "translate(0," + height + ")")
//             .call(d3.axisBottom(xScale).tickFormat(function (d) {
//                 return d;
//             })
//             );
//         id.append("g")
//             .call(d3.axisLeft(yScale).tickFormat(function (d) {
//                 return d;
//             }).ticks(4));
//         // create bars
//         id.selectAll(".bar")
//             .data(data)
//             .enter().append("rect")
//             .attr("class", "bar")
//             .attr("x", function (d) { return xScale(d); })
//             .attr("y", function (d) { return yScale(d); })
//             .attr("width", xScale.bandwidth())
//             .attr("height", function (d) {
//                 return height - yScale(d);
//             });
//     }

//     // function makeGroupedBarChart(id, data, domain, titles) {
//     //     var id = d3.select(`#${id}`),
//     //         // set margin
//     //         margin = 100,
//     //         width = id.attr("width") - margin,
//     //         height = id.attr("height") - margin
//     //     // set scale
//     //     var xScale = d3.scaleBand().range([0, width]).padding(0.25),
//     //     var xScale2 = d3.scaleBand().range([0, width]).padding(0.25),
//     //         yScale = d3.scaleLinear().range([height, 0]);
//     //     // set domain
//     //     xScale.domain(data);
//     //     yScale.domain(domain);
//     //     // format axis
//     //     id.append("g")
//     //         .attr("transform", "translate(0," + height + ")")
//     //         .call(d3.axisBottom(xScale).tickFormat(function (d) {
//     //             return d;
//     //         })
//     //         );
//     //     id.append("g")
//     //         .call(d3.axisLeft(yScale).tickFormat(function (d) {
//     //             return d;
//     //         }).ticks(4));
//     //     // create bars
//     //     id.selectAll(".bar")
//     //         .data(data)
//     //         .enter().append("rect")
//     //         .attr("class", "bar")
//     //         .attr("x", function (d) { return xScale(d); })
//     //         .attr("x", function (d) { return xScale(d); })
//     //         .attr("y", function (d) { return yScale(d); })
//     //         .attr("width", xScale.bandwidth())
//     //         .attr("height", function (d) {
//     //             return height - yScale(d);
//     //         });

//     //     // List of subgroups = header of the csv files = soil condition here
//     //     var subgroups = data[0]

//     //     // List of groups = species here = value of the first column called group -> I show them on the X axis
//     //     var groups = d3.map(data.texts)

//     //     // Add X axis
//     //     var x = d3.scaleBand()
//     //         .domain(groups)
//     //         .range([0, width])
//     //         .padding([0.2])
//     //     id.append("g")
//     //         .attr("transform", "translate(0," + height + ")")
//     //         .call(d3.axisBottom(x).tickSize(0));

//     //     // Add Y axis
//     //     var y = d3.scaleLinear()
//     //         .domain([0, 40])
//     //         .range([height, 0]);
//     //     id.append("g")
//     //         .call(d3.axisLeft(y));

//     //     // // Another scale for subgroup position?
//     //     // var xSubgroup = d3.scaleBand()
//     //     //     .domain(subgroups)
//     //     //     .range([0, x.bandwidth()])
//     //     //     .padding([0.05])

//     //     // // color palette = one color per subgroup
//     //     // var color = d3.scaleOrdinal()
//     //     //     .domain(subgroups)
//     //     //     .range(['#e41a1c', '#377eb8', '#4daf4a'])

//     //     // Show the bars
//     //     id.append("g")
//     //         .selectAll("g")
//     //         // Enter in data = loop group per group
//     //         .data(data)
//     //         .enter()
//     //         .append("g")
//     //         // .attr("transform", function (d) { return "translate(" + x(d.group) + ",0)"; })
//     //         .selectAll("rect")
//     //         .data(function (d) { return subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
//     //         .enter().append("rect")
//     //         .attr("x", function (d) { return xSubgroup(d.key); })
//     //         .attr("y", function (d) { return y(d.value); })
//     //         .attr("width", xSubgroup.bandwidth())
//     //         .attr("height", function (d) { return height - y(d.value); })
//     //         .attr("fill", function (d) { return color(d.key); });
//     // }
//     // from https://d3-graph-gallery.com/graph/barplot_basic.html & https://d3-graph-gallery.com/graph/barplot_grouped_basicWide.html

//     // from https://vaibhavkumar-19430.medium.com/how-to-create-a-grouped-bar-chart-in-d3-js-232c54f85894
//     function makeGroupedBarChart(id, termFreqs) {
//         termFreqs = termFreqs.map(i => {
//             i.searchTerm = i.searchTerm;
//             return i;
//         });

//         var container = d3.select(`#${id}`),
//             width = 1000,
//             height = 600,
//             margin = { top: 30, right: 20, bottom: 30, left: 50 },
//             barPadding = .2,
//             axisTicks = { qty: 5, outerSize: 0, dateFormat: '%m-%d' };

//         var svg = container
//             .append("svg")
//             .attr("width", width)
//             .attr("height", height)
//             .append("g")
//             .attr("transform", `translate(${margin.left},${margin.top})`);

//         var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
//         var xScale1 = d3.scaleBand();
//         var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

//         var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
//         var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

//         xScale0.domain(termFreqs.map(d => d.searchTerm));
//         xScale1.domain(['bible', 'quran', 'bgita', 'vedas']).range([0, xScale0.bandwidth()]);
//         yScale.domain([0, d3.max(termFreqs, d => d.bible > d.quran ? d.bible : d.quran)]);

//         var searchTerm = svg.selectAll(".searchTerm")
//             .data(termFreqs)
//             .enter().append("g")
//             .attr("class", "searchTerm")
//             .attr("transform", d => `translate(${xScale0(d.searchTerm)},0)`);

//         /* Add bible bars */
//         searchTerm.selectAll(".bar.bible")
//             .data(d => [d])
//             .enter()
//             .append("rect")
//             .attr("class", "bar bible")
//             .style("fill", "blue")
//             .attr("x", d => xScale1('bible'))
//             .attr("y", d => yScale(d.bible))
//             .attr("width", xScale1.bandwidth())
//             .attr("height", d => {
//                 return height - margin.top - margin.bottom - yScale(d.bible)
//             });

//         /* Add quran bars */
//         searchTerm.selectAll(".bar.quran")
//             .data(d => [d])
//             .enter()
//             .append("rect")
//             .attr("class", "bar quran")
//             .style("fill", "red")
//             .attr("x", d => xScale1('quran'))
//             .attr("y", d => yScale(d.quran))
//             .attr("width", xScale1.bandwidth())
//             .attr("height", d => {
//                 return height - margin.top - margin.bottom - yScale(d.quran)
//             });

//         /* Add bgita bars */
//         searchTerm.selectAll(".bar.bgita")
//             .data(d => [d])
//             .enter()
//             .append("rect")
//             .attr("class", "bar bgita")
//             .style("fill", "green")
//             .attr("x", d => xScale1('bgita'))
//             .attr("y", d => yScale(d.bgita))
//             .attr("width", xScale1.bandwidth())
//             .attr("height", d => {
//                 return height - margin.top - margin.bottom - yScale(d.bgita)
//             });

//         /* Add vedas bars */
//         searchTerm.selectAll(".bar.vedas")
//             .data(d => [d])
//             .enter()
//             .append("rect")
//             .attr("class", "bar vedas")
//             .style("fill", "purple")
//             .attr("x", d => xScale1('vedas'))
//             .attr("y", d => yScale(d.vedas))
//             .attr("width", xScale1.bandwidth())
//             .attr("height", d => {
//                 return height - margin.top - margin.bottom - yScale(d.vedas)
//             });

//         // Add the X Axis
//         svg.append("g")
//             .attr("class", "x axis")
//             .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
//             .call(xAxis);

//         // Add the Y Axis
//         svg.append("g")
//             .attr("class", "y axis")
//             .call(yAxis);
//     }
// }

window.onload = function () {
    makeBarChart(`svg1`, [791684, 155543, 145743, 616774], [0, 1000000], ['bible', 'quran', 'bgita', 'vedas']);
    makeBarChart(`svg2`, [12592, 6006, 7415, 17183], [0, 20000], ['bible', 'quran', 'bgita', 'vedas']);

    $.get(
        "/getTF",
        (res) => {
            // console.log(res.length);
            // console.log(res[0]);
            // WordCloud.minFontSize = "15px";
            for (let i = 0; i < res.length; i++) {
                WordCloud(document.getElementById(`TFcanvas${i}`), { list: res[i] });
            }
        }
    );

    $.get(
        "/getTFIDF",
        (res) => {
            // console.log(res.length);
            // console.log(res[0]);
            for (let i = 0; i < res.length; i++) {
                WordCloud(document.getElementById(`TFIDFcanvas${i}`), { list: res[i] });
            }
        }
    );

    $.get(
        "/getSentiment",
        (res) => {
            // console.log(res);
            makeBarChart(`svg3`, res, [-1, 1]);
        }
    );

    $.get(
        "/getSingles",
        (res) => {
            // // console.log(res);
            // console.log(res.texts);
            // // makeBarChart(`svg4`, res.pain, [0, 1]);
            // for (let i in res) {
            //     makeBarChart(`svgSingles${i}`, res[i], [0, 1]);
            // }
            makeGroupedBarChart(`svg4`, res);
        }
    );


    //     groupedData = {
    //         `titles`: [`Bible`, `Qur'an`, `Bhagavad Gita`, `Vedas`],
    //         love : { bible: 0.1, quran: 0.2, bgita: 0.3, vedas: 0.4},
    //             `joy`: [0.5, 0.2, 0.6, 0.4],
    //                 `peace`: [0.9, 0.1, 0.5, 0.7]
    // }
    // makeGroupedBarChart(`svg4`, groupedData, [-.5, .5]);
    // makeGroupedBarChart();

    function makeBarChart(id, data, domain, titles) {
        var id = d3.select(`#${id}`),
            // set margin
            margin = 100,
            width = id.attr("width") - margin,
            height = id.attr("height") - margin
        // set scale
        var xScale = d3.scaleBand().range([0, width]).padding(0.25),
            yScale = d3.scaleLinear().range([height, 0]);
        // set domain
        xScale.domain(data);
        yScale.domain(domain);
        // format axis
        id.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale).tickFormat(function (d) {
                return d;
            })
            );
        id.append("g")
            .call(d3.axisLeft(yScale).tickFormat(function (d) {
                return d;
            }).ticks(4));
        // create bars
        id.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return xScale(d); })
            .attr("y", function (d) { return yScale(d); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) {
                return height - yScale(d);
            });
    }

    // function makeGroupedBarChart(id, data, domain, titles) {
    //     var id = d3.select(`#${id}`),
    //         // set margin
    //         margin = 100,
    //         width = id.attr("width") - margin,
    //         height = id.attr("height") - margin
    //     // set scale
    //     var xScale = d3.scaleBand().range([0, width]).padding(0.25),
    //     var xScale2 = d3.scaleBand().range([0, width]).padding(0.25),
    //         yScale = d3.scaleLinear().range([height, 0]);
    //     // set domain
    //     xScale.domain(data);
    //     yScale.domain(domain);
    //     // format axis
    //     id.append("g")
    //         .attr("transform", "translate(0," + height + ")")
    //         .call(d3.axisBottom(xScale).tickFormat(function (d) {
    //             return d;
    //         })
    //         );
    //     id.append("g")
    //         .call(d3.axisLeft(yScale).tickFormat(function (d) {
    //             return d;
    //         }).ticks(4));
    //     // create bars
    //     id.selectAll(".bar")
    //         .data(data)
    //         .enter().append("rect")
    //         .attr("class", "bar")
    //         .attr("x", function (d) { return xScale(d); })
    //         .attr("x", function (d) { return xScale(d); })
    //         .attr("y", function (d) { return yScale(d); })
    //         .attr("width", xScale.bandwidth())
    //         .attr("height", function (d) {
    //             return height - yScale(d);
    //         });

    //     // List of subgroups = header of the csv files = soil condition here
    //     var subgroups = data[0]

    //     // List of groups = species here = value of the first column called group -> I show them on the X axis
    //     var groups = d3.map(data.texts)

    //     // Add X axis
    //     var x = d3.scaleBand()
    //         .domain(groups)
    //         .range([0, width])
    //         .padding([0.2])
    //     id.append("g")
    //         .attr("transform", "translate(0," + height + ")")
    //         .call(d3.axisBottom(x).tickSize(0));

    //     // Add Y axis
    //     var y = d3.scaleLinear()
    //         .domain([0, 40])
    //         .range([height, 0]);
    //     id.append("g")
    //         .call(d3.axisLeft(y));

    //     // // Another scale for subgroup position?
    //     // var xSubgroup = d3.scaleBand()
    //     //     .domain(subgroups)
    //     //     .range([0, x.bandwidth()])
    //     //     .padding([0.05])

    //     // // color palette = one color per subgroup
    //     // var color = d3.scaleOrdinal()
    //     //     .domain(subgroups)
    //     //     .range(['#e41a1c', '#377eb8', '#4daf4a'])

    //     // Show the bars
    //     id.append("g")
    //         .selectAll("g")
    //         // Enter in data = loop group per group
    //         .data(data)
    //         .enter()
    //         .append("g")
    //         // .attr("transform", function (d) { return "translate(" + x(d.group) + ",0)"; })
    //         .selectAll("rect")
    //         .data(function (d) { return subgroups.map(function (key) { return { key: key, value: d[key] }; }); })
    //         .enter().append("rect")
    //         .attr("x", function (d) { return xSubgroup(d.key); })
    //         .attr("y", function (d) { return y(d.value); })
    //         .attr("width", xSubgroup.bandwidth())
    //         .attr("height", function (d) { return height - y(d.value); })
    //         .attr("fill", function (d) { return color(d.key); });
    // }
    // from https://d3-graph-gallery.com/graph/barplot_basic.html & https://d3-graph-gallery.com/graph/barplot_grouped_basicWide.html

    // from https://vaibhavkumar-19430.medium.com/how-to-create-a-grouped-bar-chart-in-d3-js-232c54f85894
    function makeGroupedBarChart(id, termFreqs) {
        termFreqs = termFreqs.map(i => {
            i.searchTerm = i.searchTerm;
            return i;
        });

        var container = d3.select(`#${id}`),
            width = 1000,
            height = 600,
            margin = { top: 30, right: 20, bottom: 30, left: 50 },
            barPadding = .2,
            axisTicks = { qty: 5, outerSize: 0, dateFormat: '%m-%d' };

        var svg = container
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
        var xScale1 = d3.scaleBand();
        var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

        var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
        var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

        xScale0.domain(termFreqs.map(d => d.searchTerm));
        xScale1.domain(['bible', 'quran', 'bgita', 'vedas']).range([0, xScale0.bandwidth()]);
        yScale.domain([0, d3.max(termFreqs, d => d.bible > d.quran ? d.bible : d.quran)]);

        var searchTerm = svg.selectAll(".searchTerm")
            .data(termFreqs)
            .enter().append("g")
            .attr("class", "searchTerm")
            .attr("transform", d => `translate(${xScale0(d.searchTerm)},0)`);

        /* Add bible bars */
        searchTerm.selectAll(".bar.bible")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar bible")
            .style("fill", "blue")
            .attr("x", d => xScale1('bible'))
            .attr("y", d => yScale(d.bible))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
                return height - margin.top - margin.bottom - yScale(d.bible)
            });

        /* Add quran bars */
        searchTerm.selectAll(".bar.quran")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar quran")
            .style("fill", "red")
            .attr("x", d => xScale1('quran'))
            .attr("y", d => yScale(d.quran))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
                return height - margin.top - margin.bottom - yScale(d.quran)
            });

        /* Add bgita bars */
        searchTerm.selectAll(".bar.bgita")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar bgita")
            .style("fill", "green")
            .attr("x", d => xScale1('bgita'))
            .attr("y", d => yScale(d.bgita))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
                return height - margin.top - margin.bottom - yScale(d.bgita)
            });

        /* Add vedas bars */
        searchTerm.selectAll(".bar.vedas")
            .data(d => [d])
            .enter()
            .append("rect")
            .attr("class", "bar vedas")
            .style("fill", "purple")
            .attr("x", d => xScale1('vedas'))
            .attr("y", d => yScale(d.vedas))
            .attr("width", xScale1.bandwidth())
            .attr("height", d => {
                return height - margin.top - margin.bottom - yScale(d.vedas)
            });

        // Add the X Axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(xAxis);

        // Add the Y Axis
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
    }
}
