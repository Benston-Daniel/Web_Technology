setInterval(showTime, 1000);
function showTime(){
let time = new Date();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();


hour = hour < 10 ? "0" + hour : hour;
min = min < 10? "0"+min:min;
sec = sec < 10 ? "0" +sec : sec;

let currentTime = hour + ":" + min +":" + sec;

document.getElementById("clock").innerHTML = currentTime;
}
showTime();

//background color

var div = document.getElementById("full");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//change color every 30 sec
function change(lnk,evt)
            {
                if(evt.type == "mouseover")
                {
                    lnk.style.color = "red";
                    lnk.style.fontSize = "28px";
                }
                else if(evt.type == "mouseout")
                {
                    lnk.style.color = "blue";
                    lnk.style.fontSize = "20px";
                }
            }
 function changeImg(img,evt)
            {
                if(evt.type == "mouseover")
                {
                    img.style.height = "40px";
                    img.style.width = "30px";
                }
                else if(evt.type == "mouseout")
                {
                    img.style.height = "30px";
                    img.style.width = "20px";
                }
            }
  
  



