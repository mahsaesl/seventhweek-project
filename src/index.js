function refreshWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElememt = document.querySelector("#city");
  cityElememt.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#Humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
  }
}

function searchcity(city) {
  let apiKey = "c2526553620odab6dft0efe428b8b025";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

function handlesearchsubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchcity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handlesearchsubmit);

searchcity("tehran");
