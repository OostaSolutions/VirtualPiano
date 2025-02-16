for (i=0 ; i<document.querySelectorAll(".piano").length ; i++){
   
    document.querySelectorAll(".piano")[i].addEventListener("click", function() {
      
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml); 
        addAnimation(buttonInnerHtml);
    }                                                                                                                                                                                                                                              

)}



document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
    
});




function makeSound(key){
    switch (key) {
        case "q":
            var c4 = new Audio("./sounds/c4.mp3");
            c4.play();
            break;
        case "w":
            var cc4 = new Audio("./sounds/cc4.mp3")
            cc4.play();
            break;
        case "e":
            var d4 = new Audio("./sounds/d4.mp3")
            d4.play();
            break;
        case "r":
            var dd4 = new Audio("./sounds/dd4.mp3")
            dd4.play();
            break;
        case "t":
            var e4 = new Audio("./sounds/e4.mp3")
            e4.play();
            break;
        case "y":
            var f4 = new Audio("./sounds/f4.mp3")
            f4.play();
            break;
        case "u":
            var ff4 = new Audio("./sounds/ff4.mp3")
            ff4.play();
            break;
        case "i":
            var g4 = new Audio("./sounds/g4.mp3")
            g4.play();
            break;
        case "o":
            var gg4 = new Audio("./sounds/gg4.mp3")
            gg4.play();
            break;
        case "p":
            var a5 = new Audio("./sounds/a5.mp3")
            a5.play();
            break;
        case "k":
            var aa5 = new Audio("./sounds/aa5.mp3")
            aa5.play();
            break;
        case "l":
            var b4 = new Audio("./sounds/b4.mp3")
            b4.play();
            break;
       
        default: console.log(keyPressed);
            
       }
}

function addAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},100);
}