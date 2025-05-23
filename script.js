const apiKey = "5742fd53a4cc56829380be126c3f60a3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const condition = data.weather[0].main;
    switch (condition) {
      case "Clouds":
        weatherIcon.src = "img/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "img/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "img/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "img/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "img/mist.png";
        break;
      default:
        weatherIcon.src = "img/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
