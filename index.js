// var audio4 = new Audio('sounds//crash.mp3');
// var audio1 = new Audio('sounds//tom-3.mp3');
// var audio2 = new Audio('sounds//snare.mp3');
// var audio3 = new Audio('sounds//tom-1.mp3');
// var audio0 = new Audio('sounds//tom-2.mp3');
// var audio5 = new Audio('sounds//kick-bass.mp3');
// var audio6 = new Audio('sounds//tom-4.mp3');
// var arr = [audio0,audio1,audio2,audio3,audio4,audio5,audio6];
// for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//
//     arr[i].play();
// });
// }

// console.log(this.innerHTML);
// console.log(this);
// this = "<button style="color:white"; class="(this.innerHTML) drum">(this.innerHTML)</button>";
var input = "0";
function sound(input){
  switch(input){
    case "w" :
    var audio = new Audio('sounds//tom-3.mp3');
    audio.play();
    break;

    case "a" :
    var audio = new Audio('sounds//snare.mp3');
    audio.play();
    break;

    case "s" :
    var audio = new Audio('sounds//tom-1.mp3');
    audio.play();
    break;

    case "j" :
    var audio = new Audio('sounds//crash.mp3');
    audio.play();
    break;

    case "d" :
    var audio = new Audio('sounds//tom-2.mp3');
    audio.play();
    break;

    case "k" :
    var audio = new Audio('sounds//kick-bass.mp3');
    audio.play();
    break;

    case "l" :
    var audio = new Audio('sounds//tom-4.mp3');
    audio.play();
    break;

    default : console.log("oops");
  }
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;
      sound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    // arr[i].play();
});
}

document.addEventListener("keypress",function(event){
    // console.log(event.key);
    sound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(input){
  document.querySelector("."+input).classList.toggle("pressed");
  setTimeout(function(){
    document.querySelector("."+input).classList.toggle("pressed");} , 120);
}
