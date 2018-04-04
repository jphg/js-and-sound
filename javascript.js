let mySound=document.querySelector("#mySound");
//let myVideo=document.querySelector("#myVideo");
let playBtn = document.querySelector("#play-btn");
let pauseBtn = document.querySelector("#pause-btn");
let stopBtn = document.querySelector("#stop-btn");
let volume15Btn = document.querySelector("#volume15-btn");
let volume100Btn = document.querySelector("#volume100-btn");



playBtn.addEventListener("click", playSound);
pauseBtn.addEventListener("click", pauseSound);
stopBtn.addEventListener("click", stopSound);

volume15Btn.addEventListener("click", volume15);
// addEventListener to the volume100Btn here

function playSound(){
    mySound.play();
}
function pauseSound(){
    mySound.pause();
}
function stopSound(){
    mySound.pause();
    mySound.currentTime=0;
}
function volume15(){
    mySound.volume=0.15;
}

//make the volume100 function here



