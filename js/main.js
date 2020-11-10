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

    document.getElementById("myTestEvent").addEventListener("click", function(ev){
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

    document.querySelector(".default").addEventListener("click", function(){
        document.querySelector("body").removeAttribute("class", "whiteBack")
    })

    // The end of it
})();

