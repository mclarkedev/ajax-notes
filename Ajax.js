"use strict";

// jQuery Request
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "b0facbc23d68827453d1c8aaefde9db9"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	$.get(url + '&appid=' + apiKey) // this parses data to json 
	.done(function(response) { // .done = .then
		// console.log(response);
		updateUISuccess(response);
	}).fail(function(error) { //error = catch

	});

	// Handle XHR Success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;			var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		// var weatherBox = document.getElementById('weather');
		// weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"; 
		var $weatherBox = $('#weather');
		$weatherBox.append("<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
	}

	// Handle XHR Error
	function updateUIError() {
		//	var weatherBox = document.getElementById('weather');
		//	weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$.weatherBox.addClass('hidden');
	}

})();


// Fetch Request
// Be sure to use Fetch and Promise polyfill for non-supporting browsers
/*
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "b0facbc23d68827453d1c8aaefde9db9"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work

	fetch(url + '&appid=' + apiKey)
		.then(function(response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			return response.json();
		})
		.then(function(response) {
			updateUISuccess(response)
		})
		.catch(function(error) {
			updateUIError();
		});

	// Handle XHR Success
	function updateUISuccess(response) {
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById('weather');
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"; 
	}

	// Handle XHR Error
	function updateUIError() {
		var weatherBox = document.getElementById('weather');
		weatherBox.className = "hidden";	
	}
})();
*/

// XHR REQUEST
/* 
(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
	var apiKey = "b0facbc23d68827453d1c8aaefde9db9"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
	var httpRequest;
	makeRequest()
	
	// Create and send an XHR request
	function makeRequest() {
		httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = responseMethod;
		httpRequest.open('GET', url + '&appid=' + apiKey)
		httpRequest.send();
	}

	// Handle XHR response
	function responseMethod() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				updateUISuccess(httpRequest.responseText);
			} else {
				updateUIError();
			}
			console.log(httpRequest.responseText);
		}
	}

	// Handle XHR Success
	function updateUISuccess(responseText) {
		var response = JSON.parse(responseText);
		var condition = response.weather[0].main;
		var degC = response.main.temp - 273.15;
		var degCInt = Math.floor(degC);
		var degF = degC * 1.8 + 32;
		var degFInt = Math.floor(degF);
		var weatherBox = document.getElementById('weather');
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"; 
	}

	// Handle XHR Error
	function updateUIError() {
		var weatherBox = document.getElementById('weather');
		weatherBox.className = "hidden";
	}
})(); */