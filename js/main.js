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

    // The end of it
})();

