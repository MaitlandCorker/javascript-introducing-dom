//IIFE
(function(){
    //Start of the code
    console.info("Hello Console");
    console.dir(document);
    document.getElementById("myHeading").innerHTML = "Maitland's Website";
    document.querySelector("nav li").setAttribute("class", "currentPage");
    document.querySelector("nav ul li a").setAttribute('href','http://www.google.co.uk');
    // The end of it
})();

