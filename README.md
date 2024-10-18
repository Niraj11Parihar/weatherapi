    <h1>Weather App - README</h1>

  <h2>Introduction</h2>
    <p>The Weather App allows users to check the current weather conditions of any selected city. Users can select a country, state, and city from dropdown menus, and upon submission, the app displays the current temperature, humidity, wind speed, and a corresponding weather icon.</p>

  <h2>Key Features</h2>
    <ul>
      <li>Select a country, state, and city using dynamically populated dropdowns.</li>
      <li>Fetch real-time weather data using the <strong>OpenWeatherMap API</strong>.</li>
      <li>Displays temperature, humidity, and wind speed for the selected city.</li>
      <li>Shows an appropriate weather icon based on weather conditions such as clear, cloudy, rainy, etc.</li>
    </ul>

  <h2>Technologies Used</h2>
    <ul>
      <li>HTML5 & CSS3</li>
      <li>JavaScript & jQuery</li>
      <li>OpenWeatherMap API for weather data</li>
      <li>CountryStateCity API for dynamic location selection</li>
    </ul>

  <h2>Screenshots and Video of the Weather App</h2>

  <h3>Screenshots</h3>
  <p>Here are screenshots of different stages of the weather app in action:</p>

  <img src="https://github.com/Niraj11Parihar/weatherapi/blob/205201d7825a733029b93ed33ee0d926064f4a8e/assets/images/ss/Screenshot%202024-10-17%20151251.png" alt="Weather App  Screenshot 1">
    
  <img src="https://github.com/Niraj11Parihar/weatherapi/blob/205201d7825a733029b93ed33ee0d926064f4a8e/assets/images/ss/Screenshot%202024-10-17%20151310.png" alt="Weather App Screenshot 2">
    
  <img src="https://github.com/Niraj11Parihar/weatherapi/blob/205201d7825a733029b93ed33ee0d926064f4a8e/assets/images/ss/Screenshot%202024-10-17%20151334.png" alt="Weather App Screenshot 3">

  <h3>Working Video</h3>
    <p>You can view the app in action in the following video:</p>
    
https://github.com/user-attachments/assets/82d49775-960e-4df9-8f25-28e7f06ca5cd



  <h2>How It Works</h2>
    <p>The app provides a user-friendly interface where the user selects the country, state, and city. After submission, the app fetches and displays the real-time weather data for the selected location using the OpenWeatherMap API.</p>

  <h3>Dynamic Location Selection</h3>
    <p>Country, state, and city selections are dynamically populated using the CountryStateCity API. The user must choose each option sequentially, starting with the country, then the state, and finally the city.</p>

  <h3>Fetching Weather Data</h3>
    <p>Once a city is selected, the app uses the OpenWeatherMap API to retrieve the current weather data, including:</p>
    <ul>
      <li>Temperature (in Celsius)</li>
      <li>Humidity (in percentage)</li>
      <li>Wind speed (in km/h)</li>
      <li>Weather icon (displaying clear, cloudy, rain, etc.)</li>
    </ul>

  <h2>How to Set Up the Project</h2>
    <p>To run this project locally, follow these steps:</p>
    <ol>
      <li>Clone or download the repository containing this project to your local machine.</li>
      <li>Ensure that the CSS and JS files located at <code>assets/css/style.css</code> and <code>assets/js/main.js</code> are properly linked to the HTML file.</li>
      <li>Obtain an API key from <a href="https://openweathermap.org" target="_blank">OpenWeatherMap</a> and replace the placeholder API key in the <code>main.js</code> file.</li>
      <li>Similarly, get an API key from <a href="https://countrystatecity.in" target="_blank">CountryStateCity API</a> and replace the placeholder API key in the code.</li>
      <li>Run the application by opening the <code>index.html</code> file in your web browser.</li>
    </ol>

  <h2>APIs Used</h2>
    <p>The application uses the following APIs:</p>
    <ul>
      <li><strong>OpenWeatherMap API:</strong> Provides real-time weather information based on the selected city.</li>
      <li><strong>CountryStateCity API:</strong> Used to dynamically populate the country, state, and city dropdowns.</li>
    </ul>

  <h2>How to Customize</h2>
    <p>You can customize the weather app by modifying the following:</p>
    <ul>
      <li>Change the CSS styles in <code>assets/css/style.css</code> to adjust the look and feel.</li>
      <li>Replace weather icons located in the <code>assets/images</code> folder with your own icons.</li>
      <li>Adjust the API key or add more features such as displaying extended weather forecasts, etc.</li>
    </ul>

  <h2>Known Issues</h2>
    <p>Currently, the app only supports cities available via the CountryStateCity API. Some cities may not be available or listed.</p>

  <h2>Future Enhancements</h2>
    <ul>
      <li>Add a 5-day weather forecast feature for the selected city.</li>
      <li>Enhance the UI with animations and transitions for weather changes.</li>
      <li>Support for additional languages based on the user's location.</li>
    </ul>

  <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="https://github.com/Niraj11Parihar/weatherapi/blob/main/LICENSE">LICENSE</a> file for details.</p>

