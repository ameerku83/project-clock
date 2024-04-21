
let hr = document.getElementById("hor")
let mi = document.getElementById("mint")
let se = document.getElementById("sect")

function disTime (){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
   let ss = date.getSeconds();
    
   let hRotation = 30*hh +mm/2;
    let mRotation = 6*mm;

    let sRotation = 6*ss;

    hr.style.transform =`rotate(${hRotation}deg)`;
    mi.style.transform =`rotate(${mRotation}deg)`;
    se.style.transform =`rotate(${sRotation}deg)`;
}
setInterval(disTime,1000)
