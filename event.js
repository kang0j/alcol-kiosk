function noEvent(){
  document.getElementById('eventdata').innerHTML = "학사 일정이 없습니다.";
}

function getEvent() {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;

  var param = "https://open.neis.go.kr/hub/SchoolSchedule?type=json&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530069&DGHT_CRSE_SC_NM=%EC%A3%BC%EA%B0%84&AA_YMD="+year+month+day;
  const config = {
    method: "get"
  };
  fetch(param, config)
    .then(response => response.json())
    .then(data => {
      const event = document.createElement("div");
      event.textContent = data.SchoolSchedule[1].row[0].EVENT_NM;
      var result = event.textContent
      document.getElementById('eventdata').innerHTML = result;
    })
    .catch(error => noEvent());
}