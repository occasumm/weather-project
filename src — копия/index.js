let now = new Date();

let time = document.querySelector(".time");

let day = document.querySelector(".day");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
day.innerHTML = `${currentDay}`;
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
time.innerHTML = `${hours}:${minutes}`;

function showTemperature(response) {
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let max = Math.round(response.data.main.temp_max);
  let min = Math.round(response.data.main.temp_min);

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}ºC`;

  let h4 = document.querySelector("h4");
  h4.innerHTML = `H: ${max}°C <br />
  L: ${min}°C`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");

  let city = document.querySelector(".city");
  city.innerHTML = `${searchInput.value}`;

  let apiKey = `eee56a860b2d355ba7c4a7b6e42a868c`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
let search = document.querySelector("#search-form");
search.addEventListener("submit", searchCity);
