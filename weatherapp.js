let weather ={
    apiKey: "ba7dca54ce7c41bb00088978d153230a",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
        .then((response) => {
            if(!response.ok) {
                alert("City not found!!");
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, feels_like, temp_min, temp_max, pressure, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".tempfeels").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".min").innerText = "Minimum Temperature: " + temp_min + "°C";
        document.querySelector(".max").innerText = "Maximum Temperature: " + temp_max + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + " Pa";
        document.querySelector(".humid").innerText ="Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search").value);
    },
};

document.querySelector(".searchbox button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Chennai");














