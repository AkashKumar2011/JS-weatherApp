# 🌦️ Weather Application

A fully responsive and professionally styled weather application built with **HTML**, **CSS**, and **JavaScript**, using real-time data from the **OpenWeatherMap API**.

## 🚀 Features

- 🔍 Search by city name
- 📍 Displays:
  - City and Country
  - Current Temperature in °C
  - Weather Condition Icon
  - Humidity (%)
  - Wind Speed (km/h)
- 💅 Clean, modern, and professional UI
- ✅ Responsive layout for all screen sizes
- ⚠️ Error handling for invalid city input


## 📦 File Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
└── README.md
```


---
## 🧠 How It Works

- Users enter a city name in the input box.
- On clicking the search button, a request is sent to OpenWeatherMap API.
- JavaScript parses the returned JSON and updates:
  - City name
  - Temperature
  - Humidity
  - Wind speed
  - Corresponding weather icon
- If the city is invalid, an error message is shown.
---


## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox, gradients)
- JavaScript (ES6+, Fetch API)
- OpenWeatherMap API
  
---
## 🔗 Live Demo

🚀 Deployed App: 

```
  [https://akashkumar2011.github.io/JS-weatherApp/](https://akashkumar2011.github.io/JS-weatherApp/)
```

📂 GitHub Repository: 

```
[https://github.com/AkashKumar2011/JS-weatherApp](https://github.com/AkashKumar2011/JS-weatherApp)
```

---


## 🔑 API Setup

1. Get your API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Replace the key in `script.js`:
   ```js
   const apiKey = "YOUR_API_KEY";
   ```


## 📧 Created By

  Akash Kumar
