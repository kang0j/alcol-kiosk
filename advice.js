function getAd() {
    var param = "https://api.adviceslip.com/advice";
  
    const config = {
      method: "get"
    };
    fetch(param, config)
      .then(response => response.json())
      .then(data => {
        const meal1 = document.createElement("div");
        meal1.textContent = data.slip.advice;
        var result1 = meal1.textContent;
        document.getElementById('ad').innerHTML = result1;
      })
      .catch(error => console.log("fetch 에러!"));
}