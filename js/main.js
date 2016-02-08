//var mydiv = document.getElementById("mydiv");
//mydiv.innerHTML = "Hello, world!";
//two ways, it seems: above and below
//function myFunc() {
	//var mydiv=document.getElementById("mydiv");
	//mydiv.innerHTML= "Hello World.";

jQuery('#mydiv').html('Hello World!');



// $('ul').on("click", function(){
//     alert("This is actually a poem by Dr. Suess.");
// });
// $('ul').off("click", function() {
// 	alert("good bye, world");
// });

var divId=$('#yourdiv').attr('id');
$('#yourdiv').append("the id:"+"  "+divId);
console.log(divId);

$('#yourdiv').css({"backgroundColor": "skyblue", "color": "blue"});
$('p').css('color','red');
$('p').css({
	'font-size': '3em',
	'text-align': 'center'
});


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

	$("#yourdiv").mouseover(function(){
		//color will take on an rgb value
		
		var color = "rgb(";
		//loop will iterate 0 through 2 at one step increments 
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			//random will be a number between 0 and 254, 
			//rounded to the nearest whole number
			
			color += random;

			if (i<2){
				color += ",";
			//if i less than 2, add comma after 'color'
			} else {
				color += ")";
			//else, add parenthesis after 'color'
			}
		};
		//css color property is randomly generated

		$(this).css("color", color);
	});

	function clickme(){
		//function will activate alert when table is clicked
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};
//call functions with cityPop and correct id params
addColumns(cityPop);
addEvents("#yourdiv");
};

//MODULE THREE

//basic ajax method, defined with a function
function jQueryAjax() {
	//variable mydata to hold data
	var mydata;
	//access ajax
	$.ajax("data/map.geojson",{
		dataType: "json",
		/*success will be fucntion with response parameter,
		which will console.log the response.*/
		success: function(response) {
			mydata=response;
			console.log(mydata);
			//mydata is logged as an object, an array with 15 elements
		}
});
/*Console log outside
function: mydata will log as undefined */
console.log(mydata);

};
//connect the ajax function with the document
$(document).ready(jQueryAjax);


//Debug ajax.js


function debugAjax(){
	//jquery ajax, taking the source as an argument
	$.ajax("data/map.geojson", {
		dataType: "json",
		/*success will occur after data has arrived
		from debugCallback function*/
		success: debugCallback 
		});	
};

function debugCallback(response){
		console.log(response);
		//map.geojson is appended,stringified
		$('#mydiv').append('<br>GeoJSON data:</br>' + JSON.stringify(response));
};

//when document ready, run debugAjax function
$(document).ready(debugAjax);

//initialize .js in HTML document

$(document).ready(initialize);








