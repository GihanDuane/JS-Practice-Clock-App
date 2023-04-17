const displayTime = () => {
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const sessions = document.getElementById("sessions");

    if(hrs >= 12) {
        sessions.innerHTML = "PM";
    } else {
        sessions.innerHTML = "AM";
    }

    if(hrs > 12) {
        hrs = hrs -12;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayTime, 10);
