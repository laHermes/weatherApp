//INIT & FETCH from local storage
const storage = new Storage();
const storedCity = storage.getCity();

//GET WEATHER
const weather = new Weather(storedCity.city);
//CREATE UI
const ui = new UI();

//CHANGE LOCATION BUTTON SELECTOR
document
  .querySelector("#form_submit")
  .addEventListener("click", changeLocation);

//CHANGE LOCATION FUNCTION
function changeLocation(e) {
  const newLocation = document.querySelector("#form_city").value;
  weather.changeLocation(newLocation);
  getWeather();
  storage.setCity(newLocation);
  document.querySelector("#form_city").value = "";
  location.reload();
  e.preventDefault();
}
//ON DOM LOAD GETS WEATHER
document.addEventListener("DOMContentLoaded", getWeather());

function getWeather() {
  weather
    .getWeather()
    .then((res) => {
      ui.create(res);
    })
    .catch((err) => console.log(err));
}
