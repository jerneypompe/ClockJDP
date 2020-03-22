// Tijd
function showClock(){
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
h = leadingZero(h);
m = leadingZero(m);
document.getElementById('clock').innerHTML = h + " " + ":" + " " + m;

setInterval(showClock, 1000);

function leadingZero(i){
	if(i < 10){
		return i = "0" + i;
	}else{
		return i;
	}
}
}
showClock();

// Datum 
var today = new Date();
var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];
var formatDate = months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
document.getElementById('displayDate').innerHTML = formatDate;

//Gradient verandering d.m.v. tijd
var time = new Date().getHours();
// 00.00 - 06.00 nacht
if (0 >= time && time < 6) {
	document.documentElement.style.backgroundImage = "linear-gradient(to bottom, #000000, #08007B)";
	document.getElementById("sun-moon").style.backgroundImage ="url('images/moon.png')";
// 06.00 - 12 ochtend
} else if (6 >= time && time < 12){
	document.documentElement.style.backgroundImage = "linear-gradient(to bottom, #FAF185, #FFBB00, #FB753D, #CD7AD3)";
// 12.00 - 18.00 middag
} else if(12 >= time && time < 18){
	document.documentElement.style.backgroundImage = "linear-gradient(to bottom, #2ADBFF, #768AFF, #CD7AD3)";
	document.getElementById("sun-moon").style.backgroundImage ="url('images/sun.png')";
// 18.00 - 00.00 avond
} else {
	document.documentElement.style.backgroundImage = "linear-gradient(to bottom, #2D2693, #BA28A6, #DB913C)";
}

//Dag / nacht verandering zon -> maan & maan -> zon
// if (time >= 12 && time < 18){
// 	document.getElementById("sun-moon").style.backgroundImage ="url('images/sun.png')";
// } else {
// 	document.getElementById("sun-moon").style.backgroundImage ="url('images/moon.png')";
//}
