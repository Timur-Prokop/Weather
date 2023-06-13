
let city = "";
let cityinput = document.querySelector(".input");

function enter(event) {
    if (event.keyCode == 13) {
        city = document.querySelector(".input").value
        console.log(document.querySelector(".input").value);
        citytemp()
        return true;
    }
 }

function citytemp(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22e775a2179682eaf1d5c76cf584eb3f`)
        .then(function (massiv) { return massiv.json()})
        .then(function(summ){
            console.log(summ);
            console.log(Math.round(summ.main.temp - 273));
            document.querySelector(".deg").textContent = Math.round(summ.main.temp - 273);
            document.querySelector(".weather").textContent = summ.weather[0].main;

    })
        .catch(function(){

        });
}
