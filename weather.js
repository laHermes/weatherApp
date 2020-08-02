class Weather {
  constructor(city) {
    this.apiKey = "2db0365e434f4e9d976e5e5e8932957d";
    this.city = city;
  }

  //Fetch Weather from API

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
    );
    const responseData = await response.json();
    return responseData;
  }

changeLocation(city){
this.city = city;

}


}
