//Current Weather


const myAPI = "4fd1f0583ce4f801e0020260c5375277"

const myWeather = `//api.openweathermap.org/data/2.5/weather?lat=-14.336020&lon=-170.731445&appid=4fd1f0583ce4f801e0020260c5375277&units=imperial`
// ========== Grab the weather data
fetch(myWeather)
.then((response) => response.json())
.then((allData) => {
    currentWeather(allData)
}) // end waiting

function currentWeather(weatherResults) {
  console.log(weatherResults)
  const myTemperature = document.querySelector('#temp')
  myTemperature.textContent = weatherResults.main.temp
  const myDescription = document.querySelector('#desc')
  myDescription.textContent = weatherResults.weather[0].description
  const myIcon = document.querySelector('#icon')
  myIcon.src=`https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`
  myIcon.alt=weatherResults.weather[0].description
}