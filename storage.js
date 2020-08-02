class Storage {
  constructor() {
    this.city = "";
    this.cityDefault = "niš";
  }

  getCity() {
    if (localStorage.getItem("city") === "") {
      this.city = this.cityDefault;
    } else {
      this.city = localStorage.getItem("city");
    }
    return {
      city: this.city,
    };
  }

  setCity(cityName) {
    localStorage.setItem("city", cityName);
  }
}
