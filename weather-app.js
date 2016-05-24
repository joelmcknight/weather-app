//   0848c7f851dac8a1


var weatherWidget = {
};

//the below are putting objects into var weatherWidget

weatherWidget.apiUrl = 'http://api.wunderground.com/api/0848c7f851dac8a1/conditions/q/CA/San_Francisco.json'



weatherWidget.init = function() {
	//the code in here is used to initialize our application
	weatherWidget.getData();

}

//when the page loads get some data
//make an ajax call to the wundergrounds API
//when the data returns we want to display specific things (found on the html page)
weatherWidget.getData = function() {
	$.ajax({
		url: 	weatherWidget.apiUrl,
		method: 'GET',
		dataType: 'jsonp',

	}).then(function(weatherData) {
		// console.log('It worked!');
		console.log(weatherData);

		//could also store weatherdata.current_observation in a variable (observation)
		//then use another function (weatherWidget.displayWeather) to display the data
		//by doing weatherWidget.displayWeather(observation) within the then() method.
		//


		var icon = weatherData.current_observation.icon_url
		var currentWeather = weatherData.current_observation.weather 
		var currentTemp = weatherData.current_observation.temp_c
		var currentCity = weatherData.current_observation.display_location.city
		var dateAndTime = weatherData.current_observation.observation_time_rfc822
		$('.weather_image').attr('src', icon);
		// console.log(currentWeather);
		$('.weather_string').html(currentWeather);
		// console.log(currentTemp);
		$('.temp_c').html(currentTemp);
		$('.date_time').html(dateAndTime);
		$('.city_name').html(currentCity);

	});
};


$(document).ready(function(){
  weatherWidget.init();
});












