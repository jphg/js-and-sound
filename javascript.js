let mySound=document.querySelector("#mySound");
//let myVideo=document.querySelector("#myVideo");
let playBtn = document.querySelector("#play-btn");
let pauseBtn = document.querySelector("#pause-btn");
let stopBtn = document.querySelector("#stop-btn");



playBtn.addEventListener("click", playSound);
pauseBtn.addEventListener("click", pauseSound);
stopBtn.addEventListener("click", stopSound);


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
