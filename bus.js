function getMeal() {
    let date = new Date()
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
  
    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
  
    var param = "https://open.neis.go.kr/hub/SchoolSchedule?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530069&AA_FROM_YMD="+year+month+day;
    
    
    console.log(param)
    console.log('hi')
    
    const config = {
      method: "get"
    };
    fetch(param, config)
      .then(response => response.json())
      .then(data => {
        const event0_n = document.createElement("div");
        const event0_e = document.createElement("div");
        event0_n.textContent = data.SchoolSchedule[1].row[0].EVENT_NM;
        event0_e.textContent = (data.SchoolSchedule[1].row[0].AA_YMD).slice(4, 6)+"월 "+(data.SchoolSchedule[1].row[0].AA_YMD).slice(6, 9)+"일";
        
        const event1_n = document.createElement("div");
        const event1_e = document.createElement("div");
        event1_n.textContent = data.SchoolSchedule[1].row[1].EVENT_NM;
        event1_e.textContent = (data.SchoolSchedule[1].row[1].AA_YMD).slice(4, 6)+"월 "+(data.SchoolSchedule[1].row[1].AA_YMD).slice(6, 9)+"일";
        
        const event2_n = document.createElement("div");
        const event2_e = document.createElement("div");
        event2_n.textContent = data.SchoolSchedule[1].row[2].EVENT_NM;
        event2_e.textContent = (data.SchoolSchedule[1].row[2].AA_YMD).slice(4, 6)+"월 "+(data.SchoolSchedule[1].row[2].AA_YMD).slice(6, 9)+"일";
        
        const event3_n = document.createElement("div");
        const event3_e = document.createElement("div");
        event3_n.textContent = data.SchoolSchedule[1].row[3].EVENT_NM;
        event3_e.textContent = (data.SchoolSchedule[1].row[3].AA_YMD).slice(4, 6)+"월 "+(data.SchoolSchedule[1].row[3].AA_YMD).slice(6, 9)+"일";
        
  
        
        var result0 = event0_e.textContent+": "+event0_n.textContent;
        var result1 = event1_e.textContent+": "+event1_n.textContent;
        var result2 = event2_e.textContent+": "+event2_n.textContent;
        var result3 = event3_e.textContent+": "+event3_n.textContent;
        
        document.getElementById('eventdata1').innerHTML = result0;
        document.getElementById('eventdata2').innerHTML = result1;
        document.getElementById('eventdata3').innerHTML = result2;
        document.getElementById('eventdata4').innerHTML = result3;
      })
      .catch(error => console.log("fetch 에러!"));
  }