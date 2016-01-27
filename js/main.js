var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World";
console.log(1);
function cities() {
	var cityPop= [
	{
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594888
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
	];

	console.log(cityPop);

	for (var i =0; i < cityPop.length; i++) {
		var tr=document.createElement("tr");

		var city=document.createElement("td");
		city.innerHTML=cityPop[i].city;
		tr.appendChild(city);

		var pop=document.createElement("td");
		pop.innerHTML=cityPop[i].population;
		tr.appendChild(pop);
		

		//create table
		var table=document.createElement("table");
		//create row
		var headerRow=document.createElement("tr");
		//add City column
		var cityHeader=document.createElement("th");
		cityHeader.innerHTML="Population";
		headerRow.appendChild(cityHeader);
		//add pop column
		var popHeader=document.createElement("th")
		popHeader.innerHTML="Population";
		headerRow.appendChild(popHeader);

		//add row to table
		table.appendChild(headerRow);



		table.appendChild(tr);
	}
};

cities();