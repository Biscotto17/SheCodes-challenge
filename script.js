function displayTemp(response) {
  let tempElement = document.querySelector("#current-temperature");
  let temp = Math.round(response.data.temperature.current);
  tempElement.innerHTML = temp;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;

  let humidity = document.querySelector("#current-humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;

  let wind = document.querySelector("#current-wind");
  wind.innerHTML = `${response.data.wind.speed}km/h`;

  let condition = document.querySelector("#condition-description");
  condition.innerHTML = response.data.condition.description;

  let newImage = document.createElement("img");
  newImage.src = response.data.condition.icon_url;

  let container = document.querySelector("#icon-container");
  container.innerHTML = " ";
  container.appendChild(newImage);
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "5faafc024067ef134bo5d8bb310tf7dd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
