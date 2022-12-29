

var request = new XMLHttpRequest();

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Calgary&appid=7b00ead376fe3fae0d5f38cba0ebb08f');





request.onload = function() {
	var response = request.response;
	var parsedData = JSON.parse(response);
	console.log(parsedData);
  
	
  var city = parsedData.name;
  let temp = parsedData.main.temp;
  var description = parsedData.weather[0].description;
  temp = temp - 273.15;

	
  document.getElementById("ciudad").innerHTML = city;
  document.getElementById("descripcion").innerHTML = description;
  document.getElementById("temperatura").innerHTML = temp.toFixed(0) + ' <span>&degC</span>';

};

request.send();


/*References



https://www.tutorialspoint.com/How-do-we-use-multi-line-comments-in-JavaScript
https://www.w3schools.com/csSref/sel_id.asp 

Description of properties MetaWeather
https://www.metaweather.com/api/

Wheater for city of Calgary with location code
https://www.metaweather.com/8775/

JSON object
https://www.metaweather.com/api/location/8775/

HTML Output
https://www.w3schools.com/js/js_output.asp

Open Weather
https://openweathermap.org/current

API Open Weather
https://openweathermap.org/city/5913490

*/