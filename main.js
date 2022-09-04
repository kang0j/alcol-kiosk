
setInterval(function() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var weekday = date.getDay();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    

    var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var today_time = ""+month+"월 "+day+"일 "+week[weekday]+'요일 | '+""+hour+'시 '+min+"분"; 
    document.getElementById('top_time').innerHTML = today_time;

  
    }, 5)
 

var date = new Date();
var month = date.getMonth() + 1;
var weekday = date.getDay();
var day = date.getDate();

var year = date.getFullYear();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

var week = new Array('일', '월', '화', '수', '목', '금', '토');
var bottom_var = "Last update: "+month+"월 "+day+"일 "+hour+"시 "+min+"분 "+sec+"초 | API: OpenWeather, NEIS | <b>페이지 새로고침을 원하시면 이곳을 눌러주세요.</b>";


document.getElementById('bottomv').innerHTML = bottom_var;

