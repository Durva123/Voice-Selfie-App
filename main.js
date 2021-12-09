var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("text").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){
console.log(event);
var content=event.results[0][0].transcript;

document.getElementById("text").innerHTML=content;
console.log(content);
speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_text=document.getElementById("text").innerHTML;
    var speakthis=new SpeechSynthesisUtterance(speak_text);
    synth.speak(speakthis);
    Webcam.attach(camera);
}

var camera=document.getElementById("camera");
Webcam.set({
 width:350, 
 height:250,
  img_format:"jpeg",
jpeg_quality:90

})

