$(document).ready(function() {
	// console.log("Ready");


	// variables =================================================================
	var getIP = "https://ipapi.co/json/";
	var openWeatherMap = "https://fcc-weather-api.glitch.me/api/current?";
	var srcUnsplash = "https://source.unsplash.com/category/nature/1600x900/daily?";

	var main = document.getElementById("main");
	var description = document.getElementById("description");
	var icon = document.getElementById("icon");
	var mainTemp = document.getElementById("main-temp");
	var windSpeed = document.getElementById("wind-speed");
	var country = document.getElementById("country");
	var town = document.getElementById("town");

	// ajax call ==================================================================
	// get users ip address
	// $.getJSON(getIP).done(function(location) {
	//     console.log(location);
	// });
	//cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2
	// We make two calls. First for the ip api. Second, for the weather api
	$.getJSON(getIP).done(function(location) {
	    $.getJSON(
	    		openWeatherMap,	{
	       		lat: location.latitude,
	        	lon: location.longitude,
	        	units: 'imperial',
	        	appid: "f8cfcf6b79ee35429704a9ef0efad0c7"
	    }).done(function(response) {
				console.log(response);

				console.log(response.weather[0].main);
				// main.innerHTML = response.weather[0].main;

				// console.log(response.weather[0].description);
				description.innerHTML = "Forecast: " + response.weather[0].description;

				// console.log(response.weather[0].icon);
				// console.log(
				// 	icon.innerHTML = '<img src="https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2' + response.weather[0].icon + '.png?1499366020983">'
				// )
				// console.log(response.main.temp);
				// &#8457; HTML symbol for °F
				// &#8451; HTML symbol for °C
				// Fahrenheit: (°C × 9/5) + 32 = °F
				// Celsius: (°F − 32) x 5/9 = °C
				mainTemp.innerHTML = "Temperature: " + ((response.main.temp * 9/5) + 32).toFixed(2) + "&#8457; / " + response.main.temp + "&#8451;";

				// console.log(response.wind.speed);
				windSpeed.innerHTML = "Wind speed: " + response.wind.speed;

				// console.log(response.sys.country);
				country.innerHTML = "Country: " + response.sys.country;

				// console.log(response.name);
				town.innerHTML = "Town: " + response.name;

				// Background-image
				console.log(
					document.body.style.backgroundImage = 'url("' + srcUnsplash + response.weather[0].main + '")'
				);

	    });
	});


}); // document.ready
