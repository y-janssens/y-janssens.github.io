let clockOn = true;
let timerOff = true;
let seconds = 0;

window.onload = date();
window.onload = off();
setInterval(timeroll, 1000);
setInterval(timer, 1000);

function incrementSeconds() {
    seconds += 1;
}

function timeroll() {

    let today = new Date();

    let hour = today.getHours();
    let hours = "0" + hour;
    let Chours;

    let minute = today.getMinutes();
    let minutes = "0" + minute;
    let Cminutes;

    let second = today.getSeconds();
    let seconds = "0" + second;
    let Cseconds;

    if (hour < 10) {
        Chours = hours;
    } else {
        Chours = hour;
    }

    if (minute < 10) {
        Cminutes = minutes
    } else {
        Cminutes = minute;
    }

    if (second < 10) {
        Cseconds = seconds
    } else {
        Cseconds = second;
    }

    let time = Chours + ":" + Cminutes + ":" + Cseconds;

    document.getElementById("time1").innerHTML = time;
    document.getElementById("time1b").innerHTML = time;
}

function date() {

    

    let today = new Date();

    let days = today.getDate();
    let day = "0" + days;
    let dayC;

    let months = today.getMonth() + 1;
    let month = "0" + months;
    let monthC;
    let year = today.getFullYear();

    if (days < 10) {
        dayC = day;
    } else {
        dayC = days;
    }

    if (month < 10) {
        monthC = month;
    } else {
        monthC = months;
    }

    let time = dayC + ":" + monthC + ":" + year;

    document.getElementById("time3").innerHTML = time;
    document.getElementById("time3b").innerHTML = time;
}

function timer() {

    let today = new Date();

    let t1 = "0" + seconds;
    let t2 = "00" + seconds;
    let t3 = "000" + seconds;
    let t4 = "0000" + seconds;
    let t5 = "00000" + seconds;
    let t6 = "000000" + seconds;

    let time;

    if (seconds < 10) {
        time = t1;
    } else {
        time = t1;
    }

    if (seconds < 100) {
        time = t2;
    } else {
        time = t2;
    }

    if (seconds < 1000) {
        time = t3;
    } else {
        time = t4;
    }

    if (seconds < 10000) {
        time = t3;
    } else {
        time = t4;
    }

    if (seconds < 10000) {
        time = t5;
    } else {
        time = t5;
    }

    if (seconds < 100000) {
        time = t6;
    } else {
        time = t6;
    }

    document.getElementById("time2").innerHTML = time;
    document.getElementById("time2b").innerHTML = time;

}

function start() {

    if (timerOff) {
        timerOff = false;
        document.getElementById("time2").innerHTML = "";
        document.getElementById("time2b").innerHTML = "";
        $('#time2').css('visibility', 'visible');
        $('#time2b').css('visibility', 'visible');
        $('#time2s').css('visibility', 'visible');
        $('.b2').css('color', '#fb8409');
        $('.b2b').css('color', '#fb8409');
        $('.b2').css('background-color', '#fb8409');
        $('.b2b').css('background-color', '#fb8409');
        startT = setInterval(incrementSeconds, 1000);
        console.log("start");
    } else {
        timerOff = true;
        $('.b2').css('color', '#101010');
        $('.b2b').css('color', '#101010');
        $('.b2').css('background-color', '#101010');
        $('.b2b').css('background-color', '#101010');
        clearInterval(startT);
        console.log("stop");
    }
}

function reset() {
    seconds = 0;
    document.getElementById("time2").innerHTML = "";
    document.getElementById("time2b").innerHTML = "";
    $('#time2').css('visibility', 'hidden');
    $('#time2b').css('visibility', 'hidden');
    $('#time2s').css('visibility', 'hidden');
}

function off() {
    if (clockOn) {
        clockOn = false;
        $('.b1').css('background-color', '#5dff00');
        $('.b1').css('color', '#5dff00');
        $('.b1b').css('background-color', '#5dff00');
        $('.b1b').css('color', '#5dff00');
        $('.b2').css('color', '#101010');
        $('.b2b').css('color', '#101010');
        $('.b2').css('background-color', '#101010');
        $('.b2b').css('background-color', '#101010');
        $('.b3').css('background-color', '#101010');
        $('.b3').css('color', '#101010');
        $('.b3b').css('background-color', '#101010');
        $('.b3b').css('color', '#101010');
        $('#time').css('visibility', 'visible');
        $('#screen').css('visibility', 'visible');
        $('#glow').css('visibility', 'visible');
        $('#clock').css('background-color', '#303030');
    } else {
        clockOn = true;
        timerOff = true;
        $('.b1').css('background-color', '#101010');
        $('.b1').css('color', '#101010');
        $('.b1b').css('background-color', '#101010');
        $('.b1b').css('color', '#101010');
        $('.b2').css('color', '#101010');
        $('.b2b').css('color', '#101010');
        $('.b2').css('background-color', '#101010');
        $('.b2b').css('background-color', '#101010');
        $('.b3').css('background-color', 'red');
        $('.b3').css('color', 'red');
        $('.b3b').css('background-color', 'red');
        $('.b3b').css('color', 'red');
        $('#time').css('visibility', 'hidden');
        $('#screen').css('visibility', 'hidden');
        $('#glow').css('visibility', 'hidden');
        $('#clock').css('background-color', '#252525');
        reset();
    }
}