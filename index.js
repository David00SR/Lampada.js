const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lamp")

turnOn.addEventListener('click',function(){
    lamp.src = "./img/ligada.jpg"
})

turnOff.addEventListener('click',function(){
    lamp.src = "./img/desligada.jpg"
})

lamp.addEventListener('dblclick',function(){
    lamp.src = "./img/quebrada.jpg"
})
