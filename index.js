setInterval(() => {
    var d= new Date();
    var h= d.getHours();
    var m= d.getMinutes();
    var s= d.getSeconds();

    var hrotation= (30*h+m/2+s/120);
    var mrotation= (6*m+s/10);
    var srotation= (6*s);

    document.getElementById("hour").style.transform= `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform= `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform= `rotate(${srotation}deg)`;
}, 1000);

var time = new Date();
var h=time.getHours();
if(h<12)
   document.querySelector("#title h3").innerHTML="Good morning!";
else if(h<18)
   document.querySelector("#title h3").innerHTML="Good Afternoon!";
else
   document.querySelector("#title h3").innerHTML="Good Evening!";
