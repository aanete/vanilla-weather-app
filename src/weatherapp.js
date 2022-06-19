function formatDate(timestamp) {
    let date = new Date(timestamp);
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
    date.getDay();
    let hours = date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
return `${day}, ${hours}:${minutes}`;
}



function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = (response.data.name);
    let skyElement = document.querySelector("#sky");
    skyElement.innerHTML = (response.data.weather[0].description);
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = (response.data.main.humidity);
   let dateElement = document.querySelector("#date");
   dateElement.innerHTML = formatDate(response.data.dt * 1000);

   let iconElement = document.querySelector("#icon");
   iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
 iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
let apiKey = "f6ee4e21ef3e79eaac68ef17a64ce0d6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}

search("Paris");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);