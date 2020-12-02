
 setInterval(setClock,1000);
var digitalClock=document.getElementById('digitalClock');


function setClock(){
	var current = new Date();
	var secondsRatio=current.getSeconds()/60;
	var minutesRatio=(secondsRatio + current.getMinutes())/60;
	var hoursRatio=(minutesRatio + current.getHours())/12;
	var s=secondsRatio*360;
	var m=minutesRatio*360;
	var h=hoursRatio*360;

	var hh= current.getHours();
	var mm =  current.getMinutes();
	
	document.querySelector('.second').style.transform=`rotate(${s}deg)`;
	document.querySelector('.minute').style.transform=`rotate(${m}deg)`;
	document.querySelector('.hour').style.transform=`rotate(${h}deg)`;
 
	digitalClock.innerText= `${hh%12 < 10?'0':''}${hh%12} :${mm} ${hh>12?'pm':'am'}`;
	}


	setClock();