class UI{

constructor(){
    this.location = document.getElementById('w_location');
    this.description = document.getElementById('w_description');
    this.temperature = document.getElementById('w_temperature');
    this.humidity = document.getElementById('w_humidity');
    this.pressure = document.getElementById('w_pressure');
    this.feelsLike = document.getElementById('w_feelsLike');
    this.wind = document.getElementById('w_wind');
    this.icon = document.getElementById('w_icon');
  

}

create(weather){

const temp = weather.main.temp;
const flsLike = weather.main.feels_like;
const desc = weather.weather[0].description;
const icon = weather.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;


this.location.innerHTML = `<i class="fas fa-map-marked-alt"></i> ${weather.name}, ${weather.sys.country}`;
this.description.textContent = desc.toUpperCase();
this.temperature.textContent = `${temp.toFixed(0)} °C`;
this.humidity.innerHTML = `<i class="fas fa-ad"></i> ${weather.main.humidity}%`;
this.feelsLike.textContent = `Feels like: ${flsLike.toFixed(0)} °C`;
this.pressure.textContent =`Pressure: ${weather.main.pressure} hPa`;
this.wind.textContent = `Wind speed: ${weather.wind.speed} m/s`;
this.icon.setAttribute('src', iconUrl);

let mymap = L.map('map').setView([weather.coord.lat, weather.coord.lon], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
L.marker([weather.coord.lat, weather.coord.lon]).addTo(mymap);
}

}