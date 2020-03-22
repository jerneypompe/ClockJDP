function showClock(){
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
h = leadingZero(h);
m = leadingZero(m);
//s = leadingZero(s); // + ":" + s
document.getElementById('clock').innerHTML = h + ":" + m;

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

function showDate(){

}

