// Store your OpenWeatherMap API key in a constant
const apiKey = 'YOUR_API_KEY';

// Base URL for the OpenWeatherMap API with units set to metric for temperature in Celsius
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Get references to HTML elements for the input field and button
const locationInput = document.getElementById('locationInput');  // Input field for the user to enter the location
const searchButton = document.getElementById('searchButton');    // Button to trigger the search

// Get references to HTML elements that will display the weather information
const locationElement = document.getElementById('location');     // Element to display the city/location name
const temperatureElement = document.getElementById('temperature'); // Element to display the temperature
const descriptionElement = document.getElementById('description'); // Element to display weather description

// Add an event listener to the search button that listens for 'click' events
searchButton.addEventListener('click', () => {
    const location = locationInput.value; // Get the user's input from the input field
    if (location) {  // If the input is not empty
        fetchWeather(location); // Call the fetchWeather function with the user's location
    }
});

// This function sends a request to the OpenWeatherMap API to get the weather data for the specified location
function fetchWeather(location) {
    // Construct the full URL for the API request, including the user's location, API key, and units
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    // Use the Fetch API to send a GET request to the OpenWeatherMap API
    fetch(url)
        .then(response => response.json())  // Parse the response from JSON format
        .then(data => {
            // Update the HTML elements with the data from the API response
            locationElement.textContent = data.name; // Set the location name (e.g., city name)
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`; // Set the temperature, rounded to the nearest degree
            descriptionElement.textContent = data.weather[0].description; // Set the weather description (e.g., clear sky, rain)
        })
        .catch(error => {
            // Log an error to the console if the API request fails
            console.error('Error fetching weather data:', error);
        });
}
