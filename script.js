const apiKey = "4ab66717c22e46efa647649c4c165c17";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherDay = document.querySelector(".rainy-day");
const searchValue = document.querySelector(".search input");
const searchIcon = document.querySelector(".search button");
async function chekWeather(city){
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await reponse.json();
    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML = parseInt(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML = parseInt(data.main.humidity)+"%";
    document.querySelector(".wind").innerHTML = parseInt(data.wind.speed)+"Km/h";
    if(data.weather[0].main=="Clouds")
        weatherDay.src="images/cloudy.png";
    else if(data.weather[0].main=="Clear")
        weatherDay.src="images/forecast.png";
    else if(data.weather[0].main=="Rain")
        weatherDay.src="images/rainy-day.png";
    else if(data.weather[0].main=="Drizzle")
        weatherDay.src="images/rain.png";
    else if(data.weather[0].main=="Mist")
        weatherDay.src="images/fog.png";
    else if(data.weather[0].main=="Snow")
        weatherDay.src="images/snowy.png";
}


searchIcon.addEventListener("click",()=>{
    chekWeather(searchValue.value);
})