const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hour = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
    horas = Math.floor((time/3600));
    segundos = time%60;
    minutos = (time-horas*3600-segundos)/60;
    seconds.style.transform = `rotate(${180+(segundos*6)}deg)`;
    hour.style.transform = `rotate(${180+(horas*30)}deg)`;
    minutes.style.transform = `rotate(${180+(minutos*6)}deg)`;
}, 1000);

