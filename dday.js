
setInterval(function() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var weekday = date.getDay();
    var day = date.getDate();
    var today = date.getTime();
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    

    var gap1 = dday1 - today;
    var day1 = Math.ceil(gap1 / (1000 * 60 * 60 * 24));
    
    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    // var today_date = ""+month+"월 "+day+"일 "+week[weekday]+'요일 '+hour+'시 '+min+'분입니다.'; 
  //  var today_date = "STAY SAFE!, "+month+"월 "+day+"일 "+week[weekday]+'요일 '+hour+'시 '+min+'분입니다.';
    document.getElementById('top_date').innerHTML = today_date;
  }, 30000)
  
  
 