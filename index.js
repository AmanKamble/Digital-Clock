const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm1 = "AM"

    if(h>12 )
    {
        h = h -12;
        ampm1= "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    if(h===12)
    {
        h = "12";
    }

    hour.innerText = h;
    minute.innerText = m;
    seconds.innerText = s;
    ampm.innerHTML = ampm1;

    setTimeout(updateClock, 1000);
}

updateClock();