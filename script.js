document.addEventListener('DOMContentLoaded', () => {
	const cityName = document.getElementById('cityName');
	const feels_like = document.getElementById('feels_like');
	const humidity = document.getElementById('humidity');
	const max_temp = document.getElementById('max_temp');
	const min_temp = document.getElementById('min_temp');
	const sunrise = document.getElementById('sunrise');
	const sunset = document.getElementById('sunset');
	const temp = document.getElementById('temp');
	const wind_speed = document.getElementById('wind_speed');
	const wind_degrees = document.getElementById('wind_degrees');
	const submit = document.getElementById('submit');
	const city = document.getElementById('city');
  
	const options = {
	  method: "GET",
	  headers: {
		"x-rapidapi-key": "801635de8fmsh607dd46972434adp1d2799jsn45d63dd10cac",
		"x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
	
  
	const getWeather = (city) => {
	  if (!city) {
		alert("Please enter a city name");
		return;
	  }
  
	  cityName.innerHTML = city;
	  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
		.then((response) => {
		  if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		  }
		  return response.json();
		})
		.then((response) => {
		  console.log(response);
		  feels_like.innerHTML = response.feels_like || "N/A";
		  humidity.innerHTML = response.humidity || "N/A"
		  humidity2.innerHTML = response.humidity || "N/A";
		  max_temp.innerHTML = response.max_temp || "N/A";
		  min_temp.innerHTML = response.min_temp || "N/A";
		  temp.innerHTML = response.temp || "N/A";
		  temp2.innerHTML = response.temp || "N/A";
		  wind_speed.innerHTML = response.wind_speed || "N/A";
		  wind_speed2.innerHTML = response.wind_speed || "N/A";
		  wind_degrees.innerHTML = response.wind_degrees || "N/A";
  
		  // Convert Unix timestamp to human-readable time
		  const convertUnixToTime = (timestamp) => {
			const date = new Date(timestamp * 1000);
			return date.toLocaleTimeString();
		  };
  
		  sunrise.innerHTML = convertUnixToTime(response.sunrise) || "N/A";
		  sunset.innerHTML = convertUnixToTime(response.sunset) || "N/A";
		})
		.catch((err) => {
		  console.error('Fetch error: ', err);
		  alert("Failed to fetch weather data. Please try again later.");
		});
	};
  
	submit.addEventListener("click", (e) => {
	  e.preventDefault();
	  getWeather(city.value);
	});
  
	getWeather("Bangalore");
  });

  const getWeatherdelhi = () => {
	const options = {
		method: "GET",
		headers: {
		  "x-rapidapi-key": "801635de8fmsh607dd46972434adp1d2799jsn45d63dd10cac",
		  "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	  }
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi", options)
	  .then((response) => {
		if (!response.ok) {
		  throw new Error('Network response was not ok ' + response.statusText);
		}
		return response.json();
	  })
	  .then((response) => {
		console.log(response);
		document.getElementById('feels_like_delhi').innerHTML = response.feels_like || "N/A";
		document.getElementById('humidity_delhi').innerHTML = response.humidity || "N/A";
		document.getElementById('max_temp_delhi').innerHTML = response.max_temp || "N/A";
		document.getElementById('min_temp_delhi').innerHTML = response.min_temp || "N/A";
		document.getElementById('temp_delhi').innerHTML = response.temp || "N/A";
		document.getElementById('wind_speed_delhi').innerHTML = response.wind_speed || "N/A";
		document.getElementById('wind_degrees_delhi').innerHTML = response.wind_degrees || "N/A";
  
		// Convert Unix timestamp to human-readable time
		const convertUnixToTime = (timestamp) => {
		  const date = new Date(timestamp * 1000);
		  return date.toLocaleTimeString();
		};
  
		document.getElementById('sunrise_delhi').innerHTML = convertUnixToTime(response.sunrise) || "N/A";
		document.getElementById('sunset_delhi').innerHTML = convertUnixToTime(response.sunset) || "N/A";
	  })
	  .catch((err) => {
		console.error('Fetch error: ', err);
		alert("Failed to fetch weather data. Please try again later.");
	  });
  };
  
  // Call the function to fetch and display the weather data for Delhi
  getWeatherdelhi();
    const getWeatherlasvegas = () => {
	const options = {
		method: "GET",
		headers: {
		  "x-rapidapi-key": "801635de8fmsh607dd46972434adp1d2799jsn45d63dd10cac",
		  "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	  }
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lasvegas", options)
	  .then((response) => {
		if (!response.ok) {
		  throw new Error('Network response was not ok ' + response.statusText);
		}
		return response.json();
	  })
	  .then((response) => {
		console.log(response);
		document.getElementById('feels_like_lasvegas').innerHTML = response.feels_like || "N/A";
		document.getElementById('humidity_lasvegas').innerHTML = response.humidity || "N/A";
		document.getElementById('max_temp_lasvegas').innerHTML = response.max_temp || "N/A";
		document.getElementById('min_temp_lasvegas').innerHTML = response.min_temp || "N/A";
		document.getElementById('temp_lasvegas').innerHTML = response.temp || "N/A";
		document.getElementById('wind_speed_lasvegas').innerHTML = response.wind_speed || "N/A";
		document.getElementById('wind_degrees_lasvegas').innerHTML = response.wind_degrees || "N/A";
  
		// Convert Unix timestamp to human-readable time
		const convertUnixToTime = (timestamp) => {
		  const date = new Date(timestamp * 1000);
		  return date.toLocaleTimeString();
		};
  
		document.getElementById('sunrise_lasvegas').innerHTML = convertUnixToTime(response.sunrise) || "N/A";
		document.getElementById('sunset_lasvegas').innerHTML = convertUnixToTime(response.sunset) || "N/A";
	  })
	  .catch((err) => {
		console.error('Fetch error: ', err);
		alert("Failed to fetch weather data. Please try again later.");
	  });
  };
  
  // Call the function to fetch and display the weather data for lasvegas
  getWeatherlasvegas();
  const getWeatherpune = () => {
	const options = {
		method: "GET",
		headers: {
		  "x-rapidapi-key": "801635de8fmsh607dd46972434adp1d2799jsn45d63dd10cac",
		  "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	  }
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune", options)
	  .then((response) => {
		if (!response.ok) {
		  throw new Error('Network response was not ok ' + response.statusText);
		}
		return response.json();
	  })
	  .then((response) => {
		console.log(response);
		document.getElementById('feels_like_pune').innerHTML = response.feels_like || "N/A";
		document.getElementById('humidity_pune').innerHTML = response.humidity || "N/A";
		document.getElementById('max_temp_pune').innerHTML = response.max_temp || "N/A";
		document.getElementById('min_temp_pune').innerHTML = response.min_temp || "N/A";
		document.getElementById('temp_pune').innerHTML = response.temp || "N/A";
		document.getElementById('wind_speed_pune').innerHTML = response.wind_speed || "N/A";
		document.getElementById('wind_degrees_pune').innerHTML = response.wind_degrees || "N/A";
  
		// Convert Unix timestamp to human-readable time
		const convertUnixToTime = (timestamp) => {
		  const date = new Date(timestamp * 1000);
		  return date.toLocaleTimeString();
		};
  
		document.getElementById('sunrise_pune').innerHTML = convertUnixToTime(response.sunrise) || "N/A";
		document.getElementById('sunset_pune').innerHTML = convertUnixToTime(response.sunset) || "N/A";
	  })
	  .catch((err) => {
		console.error('Fetch error: ', err);
		alert("Failed to fetch weather data. Please try again later.");
	  });
  };
  
  // Call the function to fetch and display the weather data for pune
  getWeatherpune();
  const getWeatherlondon = () => {
	const options = {
		method: "GET",
		headers: {
		  "x-rapidapi-key": "801635de8fmsh607dd46972434adp1d2799jsn45d63dd10cac",
		  "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
		},
	  }
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london", options)
	  .then((response) => {
		if (!response.ok) {
		  throw new Error('Network response was not ok ' + response.statusText);
		}
		return response.json();
	  })
	  .then((response) => {
		console.log(response);
		document.getElementById('feels_like_london').innerHTML = response.feels_like || "N/A";
		document.getElementById('humidity_london').innerHTML = response.humidity || "N/A";
		document.getElementById('max_temp_london').innerHTML = response.max_temp || "N/A";
		document.getElementById('min_temp_london').innerHTML = response.min_temp || "N/A";
		document.getElementById('temp_london').innerHTML = response.temp || "N/A";
		document.getElementById('wind_speed_london').innerHTML = response.wind_speed || "N/A";
		document.getElementById('wind_degrees_london').innerHTML = response.wind_degrees || "N/A";
  
		// Convert Unix timestamp to human-readable time
		const convertUnixToTime = (timestamp) => {
		  const date = new Date(timestamp * 1000);
		  return date.toLocaleTimeString();
		};
  
		document.getElementById('sunrise_london').innerHTML = convertUnixToTime(response.sunrise) || "N/A";
		document.getElementById('sunset_london').innerHTML = convertUnixToTime(response.sunset) || "N/A";
	  })
	  .catch((err) => {
		console.error('Fetch error: ', err);
		alert("Failed to fetch weather data. Please try again later.");
	  });
  };
  
  // Call the function to fetch and display the weather data for london
  getWeatherlondon();
