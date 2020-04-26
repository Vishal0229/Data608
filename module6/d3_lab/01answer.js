d3.csv("https://raw.githubusercontent.com/Vishal0229/Data608/master/module6/d3_lab/ue_industry.csv", data => {
	
	// Define your scales and generator here.
	let xScale = d3.scaleLinear().domain(d3.extent(data,d => +d.index)).range([10, 1165]);
            
    let yScale = d3.scaleLinear().domain(d3.extent(data,d => +d.Agriculture)).range([580,10]);
     //alert(xScale)  
	   
	   
    let line3 = d3.line()
	            .x(d => xScale(d.index))
				.y(d => yScale(d.Agriculture));
			
        
     //alert(line3)  
      
    d3.select('#answer1')
        .append('path')
        .attr('d', line3(data))
        .attr('stroke', '#2e2928');

});
