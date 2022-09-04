function getMeal() {
  let date = new Date()
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  var param = "https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530069&MMEAL_SC_CODE=2&MLSV_YMD="+year+month+day;

  console.log('hi')
  const config = {
    method: "get"
  };
  fetch(param, config)
    .then(response => response.json())
    .then(data => {
      const meal = document.createElement("div");
      meal.textContent = data.mealServiceDietInfo[1].row[0].DDISH_NM;
      var result = meal.textContent
      document.getElementById('mealdata').innerHTML = result;
    })
    .catch(error => console.log("fetch 에러!"));
}