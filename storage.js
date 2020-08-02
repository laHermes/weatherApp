class Storage {
  constructor() {
    this.city = "";
    this.cityDefault = "niš";
  }
//GET CITY FROM LOCAL STORAGE
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
//SET CITY IN LOCAL STORAGE
  setCity(cityName) {
    localStorage.setItem("city", cityName);
  }
}
