function present_time(){
    const time = document.querySelector("#time");
    let time_now = new Date();

    let hours = time_now.getHours();
    let minutes = time_now.getMinutes();
    let seconds = time_now.getSeconds();
    let am_pm = "AM" 

    if(hours>12){
        am_pm = "PM"
    }else{
        am_pm = "AM"
    }
    if(hours<10){
        minutes = "0"+minutes;
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(seconds<10){
        seconds = "0"+seconds;
    }

    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + am_pm;
}

setInterval(present_time,1000);
