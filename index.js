//Detecting button press
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButton; i++) {
  //document.query will look for all the selectors that have class drum and then selecting
  //each individual element from the array to add an event listener
  //so when thiss loop starts off i is going to be equal to 0 and it will increment by 1
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);
  });
}
//Detecting keyboard press
document.addEventListener("keydown", function(event){
   makeSound(event.key)

   buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
  
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
  
          default:console.log(buttonInnerHTML)
      }
}

function buttonAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey)
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }

