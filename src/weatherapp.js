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
    let minutes = date.getMinutes();
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
 
}


let apiKey = "f6ee4e21ef3e79eaac68ef17a64ce0d6";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);