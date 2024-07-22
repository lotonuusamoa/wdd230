//Current Forecast
const API = "4fd1f0583ce4f801e0020260c5375277"
const Lat = "-14.336020"
const Long = "-170.731445"

const currentWeather = `//api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${API}&units=imperial`

// ========== Grab the weather data and W A I T
fetch(currentWeather)
  .then((response) => response.json())
  .then((allData) => {
    showCurrent(allData)
  }) // end waiting

  function showCurrent(allData) {
    const tempNow = document.querySelector('#temp')
    tempNow.textContent = Math.floor(allData.main.temp)+'°'
    const conditionsNow = document.querySelector('#desc')
    conditionsNow.textContent = allData.weather[0].description
    const townName = document.querySelector('#town')
    townName.textContent = allData.name
    console.log(allData)
  }