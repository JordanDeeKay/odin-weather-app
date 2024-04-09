const weatherInfo = document.querySelector('.weather-info');
const formConfirmBtn = document.querySelector('.form-confirm-btn');

formConfirmBtn.addEventListener('click', (e) => {
    getWeather();

    e.preventDefault();
});

async function getWeather() {
    const city = document.querySelector('.city-div');
    const img = document.querySelector('img');
    const userInput = document.querySelector('#city').value;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=85dff70febe84e7fbae205836240304&q=${userInput}&aqi=no`, {mode: 'cors'});
    const weatherData = await response.json();
    const imgString = weatherData.current.condition.icon;

    city.innerHTML = weatherData.location.name;
    console.log(weatherData);
    img.src = 'https:' + imgString;
    weatherInfo.innerHTML = weatherData.current.condition.text;
}

async function getDefaultWeather() {

}

console.log(navigator.geolocation);
