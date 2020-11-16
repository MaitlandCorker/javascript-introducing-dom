//IIFE
(function(){
    //Start of the code
    console.info("Hello Console");
    console.dir(document);
    document.getElementById("myHeading").innerHTML = "Maitland's Website";
    document.querySelector("nav li").setAttribute("class", "currentPage");
    document.querySelector("nav ul li a").setAttribute('href','http://www.google.co.uk');
    
    //DOM Event
    //document.getElementById("myTestEvent").onclick = function(){
    //console.info("I was Clicked");
    //}

    /*document.getElementById("myTestEvent").addEventListener("click", function(ev){
        console.info("I Was Clicked Again")
        console.dir(ev)
    })

    document.querySelector(".red").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "redBack")
    })

    document.querySelector(".green").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "greenBack")
    })

    document.querySelector(".blue").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "blueBack")
    })

    document.querySelector(".reset").addEventListener("click", function(){
        document.querySelector("body").removeAttribute("class", "defaultBack")
    })*/

    var colourButtons = document.querySelectorAll(".colpicker")
    console.dir(colourButtons)

    for(var i = 0;i < colourButtons.length; i++){
        colourButtons[i].addEventListener("click", chgColour)

    }

    function chgColour(ev){
        //console.dir(ev.target.classList)
        var colourPicked = ev.target.classList[0] + "Back";
        console.info.apply(colourPicked)
        var bodyElement= document.querySelector("body");
        if(colourPicked === " resetBack"){
            bodyElement.removeAttribute("class")
        }else{
            bodyElement.setAttribute("class", colourPicked)
        }
        bodyElement.setAttribute("class", colourPicked)
    }


    // The end of it

    var imageAr = ['images/view1.jpg', 
    'images/view2.jpg', 
    'images/view3.jpg',
    'images/view4.jpg', 
    'images/view5.jpg',
    'images/view6.jpg'];

    var counter = 0;
    chgImage();
    setInterval(chgImage, 2000);
    function chgImage(){
        counter++
        if(counter === imageAr.length){
            counter = 0
        }
        document.getElementById("myImages").setAttribute("src", imageAr[counter])
    }
        
 

})();

