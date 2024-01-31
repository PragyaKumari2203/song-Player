const ctrlBtn=document.getElementById("ctrl-btn");
const progress=document.getElementById("progress")
const song=document.getElementById("song")

song.onloadedmetadata=function(){
  progress.max=song.duration;
  progress.value=song.currentTime;
}

ctrlBtn.addEventListener("click",()=>{
  if(ctrlBtn.classList.contains("fa-pause")){
    song.pause();
    ctrlBtn.classList.remove("fa-pause")
    ctrlBtn.classList.add("fa-play")
  }
  else{
    song.play();
    ctrlBtn.classList.add("fa-pause")  
    ctrlBtn.classList.remove("fa-play")
  }
})

setInterval(()=>{
  progress.value=song.currentTime;
  console.log(progress.value);
},500)

progress.onchange=function(){
  song.currentTime=progress.value;
}



