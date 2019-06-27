
// Dataset we will be using to set the height of our rectangles
var kcThisYear2017 = [462.6, 122.3, 206.4];

// Setting variable for height and width for ease of calculations
var svgHeight = 800;
var svgWeight = 400;

// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area2017")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(kcThisYear2017)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "blue")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  
  
// 2016
// Data which we will be using to build our chart
var kcThisYear2016 = [449.8, 123.2, 216.6];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area2016")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(kcThisYear2016)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "green")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  

 // 2015
 // Data which we will be using to build our chart
var kcThisYear2015 = [458.9, 160.3, 221.5];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area2015")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(kcThisYear2015)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "pink")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });


 // 2014
// Data which we will be using to build our chart
var kcThisYear2014 = [507.3, 142.6, 230.8];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area2014")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(kcThisYear2014)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "yellow")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  
  
// Violent 2014
// Data which we will be using to build our chart
var vkcThisYear2014 = [692.3, 128.9, 200.7];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-areav2014")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(vkcThisYear2014)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "yellow")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  
// Violent 2015
// Data which we will be using to build our chart
var vkcThisYear2015 = [781.8, 154.9, 200.7];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-areav2015")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(vkcThisYear2015)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "pink")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  
// Violent 2016
// Data which we will be using to build our chart
var vkcThisYear2016 = [910.4, 131.1, 216.3];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-areav2016")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(vkcThisYear2016)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "green")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  
// Violent 2017
// Data which we will be using to build our chart
var vkcThisYear2017 = [954.4, 135.7, 214.8];
// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-areav2017")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(vkcThisYear2017)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  .attr("fill", "blue")
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 3;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  
  


