# Basic Weather Website

This is a simple weather website that allows users to search for the current weather of any city using the OpenWeatherMap API. The website fetches and displays the city name, temperature, and weather description.

## Features

- Search for weather information by city name
- Displays the current temperature in Celsius
- Shows the weather description (e.g., clear sky, rain, etc.)

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **OpenWeatherMap API**

## How to Use

1. Clone this repository or download the files.
2. Open the `index.html` file in your browser.
3. Enter the name of a city in the input field.
4. Click the **Search** button to display the weather information.

## API Setup

To make this project work, you'll need an API key from OpenWeatherMap:

1. Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up.
2. Generate an API key.
3. Replace the `apiKey` in the `script.js` file with your API key:

   ```javascript
   const apiKey = 'your_api_key_here';
