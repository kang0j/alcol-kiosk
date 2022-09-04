function getWeather() {
    var param = "https://api.openweathermap.org/data/2.5/weather?q=Uiwang&lang=kr&appid=b515d7c2fb6eb4225e63d3fc2c0e4b48";
  
    const config = {
      method: "get"
    };
    fetch(param, config)
      .then(response => response.json())
      .then(data => {
        const meal = document.createElement("div");
        meal.textContent = data.main.temp;
        var result = meal.textContent - 273;
        const temp = Math.round(result);

        const meal1 = document.createElement("div");
        meal1.textContent = data.weather[0].description;
        var result1 = meal1.textContent;

        const meal2 = document.createElement("div");
        meal2.textContent = data.main.temp_max -273;
        var result2 = meal2.textContent;
        const resultt2 = Math.round(result2);


        const meal3 = document.createElement("div");
        meal3.textContent = data.main.temp_min -273;
        var result3 = meal3.textContent;
        const resultt3 = Math.round(result3);



        document.getElementById('weather').innerHTML = "[날씨] "+result1+ " "+temp+"℃ (↑"+resultt2+"°  ↓"+resultt3+"°)";
      })
      .catch(error => console.log("fetch 에러!"));
}