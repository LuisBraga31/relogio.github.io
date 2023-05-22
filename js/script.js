const horas = document.querySelector('#hour');
const minutos = document.querySelector('#minutes');
const segundos = document.querySelector('#seconds');

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds(); 

    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    horas.innerText = hours;
    minutos.innerText = minutes;
    segundos.innerText = seconds; 

});