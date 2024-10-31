

 Weather App 🌦️

A simple weather application built with HTML, CSS, and JavaScript that fetches current weather data for a specified city using the OpenWeather API. This project displays temperature, humidity, a weather description, and an emoji representation based on weather conditions.

 Features

- City-based Search: Enter any city name to get real-time weather information.
- Weather Display: Shows temperature, humidity, and a description of the current weather conditions.
- Weather Emojis: Provides an emoji for a quick, visual representation of the weather.
- Error Handling: Alerts the user if the city name is missing or if data cannot be fetched.

 Technologies Used

- JavaScript (ES6+): Async/await for API requests, error handling, and DOM manipulation.
- HTML/CSS: Basic layout and styling for user input and weather card display.

 How to Use

1. Clone the repository:
   bash
   git clone https://github.com/your-username/weather-app.git
   
2. Open the project folder and add your OpenWeather API key.
3. Open `index.html` in a browser.

4. Enter a city name in the input field and submit to view weather data.

 Code Overview

- JavaScript:
  - `getWeatherData(city)`: Fetches weather data from the OpenWeather API.
  - `displayWeatherInfo(data)`: Displays city name, temperature, humidity, and description in a weather card.
  - `displayEmoji(weatherId)`: Selects an emoji based on weather ID for a quick visual of weather conditions.
  - `displayError(message)`: Displays an error message if city data is unavailable or input is invalid.

 Example Code

javascript
async function getWeatherData(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Data not found");
    }
    return response.json();
}


 API

This app uses the [OpenWeather API](https://openweathermap.org/api) to fetch current weather data.

 Note

To use this app, you need to sign up on OpenWeather to get your own API key and replace the placeholder API key in the JavaScript code.

---
  `https://github.com/midestic/weather-app.git` .
