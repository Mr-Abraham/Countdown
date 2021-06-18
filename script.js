let  deadline = new Date("1 July, 2021, 12:00:00").getTime();
var x = setInterval(function(){
    const   now = new Date().getTime();
    const t = deadline - now;
    const days = Math.floor( t / (1000*60*60*24));
    const hours = Math.floor((t % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor(t % (1000*60*60) / (1000*60));
    const seconds = Math.floor(t%(1000*60) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds;
    if(t <=0){
        clearInterval(x);
        alert('We are launching')
    }
},1000);
