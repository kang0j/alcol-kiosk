function getWeather1() {
    var param = "https://api.openweathermap.org/data/2.5/weather?q=Uiwang&appid=b515d7c2fb6eb4225e63d3fc2c0e4b48";
  
    const config = {
      method: "get"
    };
    fetch(param, config)
      .then(response => response.json())
      .then(data => {
        const meal1 = document.createElement("div");
        meal1.textContent = data.weather[0].main;
        var result1 = meal1.textContent;
        document.getElementById('weather').innerHTML = result1;
      })
      .catch(error => console.log("fetch 에러!"));
}