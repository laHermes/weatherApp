const storage = new Storage();
const storedCity = storage.getCity();

const weather = new Weather(storedCity.city);
const ui = new UI();

document
  .querySelector("#form_submit")
  .addEventListener("click", changeLocation);

function changeLocation(e) {
  const newLocation = document.querySelector("#form_city").value;
  weather.changeLocation(newLocation);
  getWeather();
  storage.setCity(newLocation);
  document.querySelector("#form_city").value = '';
  location.reload();
  e.preventDefault();
}

document.addEventListener("DOMContentLoaded", getWeather());

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      ui.create(res);
    })
    .catch((err) => console.log(err));
}
