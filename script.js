alert("hello");
function see(event) {
  event.preventDefault();

  let anotherCity = document.querySelector("#another-city");

  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${anotherCity.value}`;
}
let form = document.querySelector("#city-form");

form.addEventListener("submit", see);

let now = new Date();

let currentDate = document.querySelector("#dateTime");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];

const str = new Date(2022, 1, 1).toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true
});
console.log(str);
let hours = now.getHours();
let minutes = now.getMinutes();
minutes = minutes.toString().padStart(2, "0");

currentDate.innerHTML = `${day} ${hours}:${minutes}`;


function fahrenheit(event) {
  event.preventDefault();

  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = "87";
}
let fDegree = document.querySelector("#f-degree");
fDegree.addEventListener("click", fahrenheit);

function celsius(event) {
  event.preventDefault();

  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = "30";
}
let cDegree = document.querySelector("#c-degree");
cDegree.addEventListener("click", celsius);


function search(event) {
  event.preventDefault();
  let cityForm = document.querySelector("#city-form");
  let formInput = document.querySelector("#form-input");
  cityForm.innerHTML = formInput.value;

  let apiKey = "4b6d095dbd0105fb69f991eb71831375";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${formInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
}