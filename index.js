const Panaginip = document.getElementById("Panaginip")
const WhatIfIcall = document.getElementById("WhatIfIcall")
const Byahe = document.getElementById("Byahe")
const KungDiRin = document.getElementById("KungDiRin")
const Kungsiyaman = document.getElementById("Kungsiyaman")
const totoongtayo = document.getElementById("totoongtayo")
const vid1 = document.getElementById("vid1")
const vid2 = document.getElementById("vid2")
const vid3 = document.getElementById("vid3")
const vid4 = document.getElementById("vid4")
const vid5 = document.getElementById("vid5")
const vid6 = document.getElementById("vid6")
const calcmode = document.getElementById("calcmode")

Panaginip.onclick = function(){
    vid1.style.display = "block"
    vid1.play();
    vid2.style.display = "none"
    vid3.style.display = "none"
    vid4.style.display = "none"
    vid5.style.display = "none"
}

WhatIfIcall.onclick = function(){
    vid1.style.display = "none"
    vid2.style.display = "block"
    vid2.play();
    vid3.style.display = "none"
    vid4.style.display = "none"
    vid5.style.display = "none"
}
Byahe.onclick = function(){
    vid1.style.display = "none"
    vid2.style.display = "none"
    vid3.style.display = "block"
    vid3.play();
    vid4.style.display = "none"
    vid5.style.display = "none"
}

KungDiRin.onclick = function(){
    vid1.style.display = "none"
    vid2.style.display = "none"
    vid3.style.display = "none"
    vid4.style.display = "block"
    vid4.play();
    vid5.style.display = "none"
}

Kungsiyaman.onclick = function(){
    vid1.style.display = "none"
    vid2.style.display = "none"
    vid3.style.display = "none"
    vid4.style.display = "none"
    vid5.style.display = "block"
    vid5.play();
}

totoongtayo.onclick = function(){
    vid1.style.display = "none"
    vid2.style.display = "none"
    vid3.style.display = "none"
    vid4.style.display = "none"
    vid5.style.display = "none"
    vid6.style.display = "block"
    vid6.play();
}


calcmode.onclick = function (){
    window.location.href = "indexcalcu.html"
}
