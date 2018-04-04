let mySound=document.querySelector("#mySound");
let myVideo=document.querySelector("#myVideo");
let playBtn = document.querySelector("#play-btn");
let pauseBtn = document.querySelector("#pause-btn");
let stopBtn = document.querySelector("#stop-btn");
let horizontalRule = document.querySelector("hr");


playBtn.addEventListener("click", playSound);
pauseBtn.addEventListener("click", pauseSound);
stopBtn.addEventListener("click", stopSound);

mySound.addEventListener("ended", afterTheSound);

function afterTheSound(){
    horizontalRule.classList.add("grow");
}


function pauseSound(){
    mySound.pause();
}
function stopSound(){
    mySound.pause();
    mySound.currentTime=0;
}

/*
function playSound(){
    mySound.play();
}
*/

let playing=false;
function playSound(){
    if(playing==false){
        mySound.play();
        playBtn.classList.remove("green");
        playBtn.classList.add("red");
        playBtn.textContent="Stop";
        playing=true;
    }else{
        mySound.pause();
        mySound.currentTime=0;
        playBtn.classList.remove("red");
        playBtn.classList.add("green");
        playBtn.textContent="Play";
        playing=false;

    }

}

