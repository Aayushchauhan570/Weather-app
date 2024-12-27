const API_KEY = "6028ab732f3673b39133b363eed27fcc";

const btn = document.querySelector("button");
const tempt = document.querySelector(".temp p");
const feelsLike = document.querySelector(".feels-like p");
const humidVal = document.querySelector(".humidity p");
const wnd = document.querySelector(".wind p");
const visible_Val = document.querySelector(".visibility p");
const min_temp = document.querySelector(".min-temp p");
const max_temp = document.querySelector(".max-temp p");
const Pressure = document.querySelector(".Pressure p");
const Weather = document.querySelector(".weather p");

const degreeSymbol = '\u00B0';

btn.addEventListener("click", () => {
    updateWeather();
})


const updateWeather = async() =>{
    let city = document.querySelector("input");
    if(city.value ===""){
        alert("Please enter a city name");
    }
    let cityname = city.value;

    const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_KEY}&unit=metric`;

    // getting data;
    let response = await fetch(BASE_URL);
    let data = await response.json();

    // mapping data for temperature;
    let temperature = data.list[0].main.temp;
    let tempVal = ((temperature - 273.15).toFixed(2));
    tempt.innerText = `${tempVal}${degreeSymbol}C`;

    // mapping data for min temp;
    let minTemp = data.list[0].main.temp_min;
    let minTempVal = ((minTemp - 273.15).toFixed(2));
    min_temp.innerText = `${minTempVal}${degreeSymbol}C`;

    // mapping data for max temp;
    let maxTemp = data.list[0].main.temp_max;
    let maxTempVal = ((maxTemp - 273.15).toFixed(2));
    max_temp.innerText = `${maxTempVal}${degreeSymbol}C`;

    // mapping data for pressure;
    let pressureVal = data.list[0].main.pressure;
    Pressure.innerText = `${pressureVal} hPa`;

    // mapping data for weather;
    let weather = data.list[0].weather[0].description;
    Weather.innerText = weather;

    // mapping data for wind;
    let air = data.list[0].wind.speed;
    wnd.innerText = `${air} km/h`;

    // mapping data for humidity;
    let humid = data.list[0].main.humidity;
    humidVal.innerText = humid;

    // mapping data for feels like;
    let feels = data.list[0].main.feels_like;
    let feelsVal = ((feels - 273.15).toFixed(2));
    feelsLike.innerText = `${feelsVal}${degreeSymbol}C`;

    // mapping data for visibility;
    let visible = data.list[0].visibility;
    visible_Val.innerText = `${visible} m`;

}


