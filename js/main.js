//var mydiv = document.getElementById("mydiv");
//mydiv.innerHTML = "Hello, world!";
//two ways, it seems: above and below
//function myFunc() {
	//var mydiv=document.getElementById("mydiv");
	//mydiv.innerHTML= "Hello World.";

jQuery('#mydiv').html('Hello World!');



$('ul').on("click", function(){
    alert("This is actually a poem by Dr. Suess.");
});
$('ul').off("click", function() {
	alert("good bye, world");
});

var divId=$('#yourdiv').attr('id');
$('#yourdiv').append("the id:"+"  "+divId);
console.log(divId);

$('#yourdiv').css({"backgroundColor": "skyblue", "color": "blue"});
$('p').css('color','red');
$('p').css({
	'font-size': '5em',
	'text-align': 'center'
});


//$(document).ready(alert("Boo!"));

function initialize() {
	largeCities();
};

function largeCities() {
	var cityPop=[
	{
		city: 'New York',
		population: 8490000
	},
	{
		city: 'Juneau',
		population: 32600

	},
	{
		city: 'Chicago',
		population: 2700000
	},
	{
		city: 'Houson',
		population: 2200000
	}
		];
	
	$("#yourdiv").append("<table>");
	$("table").append("<tr>");
	$("tr").append("<th>City</th><th>Population</th>");

for (var i=0; i<cityPop.length; i++) {
	var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
	//add the row's html string to the table
	$("table").append(rowHtml);
};



/* debug code */

function addColumns(cityPop){

/*function will add column to cityPop table */

    $('tr').each(function(i) {
//the first value, 0, will be the header for the column
    	if (i == 0){


    		$(this).append('<th>City Size</th>');
    	} else {
//depending on city size, each value will be filled respective
//to population value
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		/* each value determined by index-1, because first
    		value,0, is the header*/

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

  			$(this).append('<td>' + citySize + '</td>');

    	};
    });
};
   

function addEvents(){
	/* adding mouse-over event to table element*/

	$("table").mouseover(function(){
		//color will take on an rgb value
		
		var color = "rgb(";
		//loop will iterate 0 through 2 at one step increments 
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			//random will be a number between 0 and 254, 
			//rounded to the nearest whole number
			
			color += "random";

			if (i<2){
				color += ",";
			//if i less than 2, add comma after 'color'
			} else {
				color += ")";
			//else, add parenthesis after 'color'
			}
		};
		//css color property is randomly generated

		$(this).css('color', color);
	});

	function clickme(){
		//function will activate alert when table is clicked
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};
//call function with cityPop param
addColumns(cityPop);
addEvents();

};
//initialize .js in HTML document
$(document).ready(initialize);










