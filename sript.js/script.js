var button = document.getElementById('button');
var popUp = document.getElementById('popup');
var close = document.getElementById('close');
var backPop = document.getElementById('back');
var closethere = document.getElementById('closethere');

    button.addEventListener('click', function(){
        popUp.style.display = "block";
        backPop.style.background = "rgba(0,0,0,0.4)";
        backPop.style.position = "fixed";
        backPop.style.height =  "100%"	
    });
    
    close.addEventListener('click', function() {
        popUp.style.display = "none";
        backPop.style.background = "rgba(0,0,0,0.0)";
        backPop.style.position = "relative";
        backPop.style.height =  "0%"		
    });

    closethere.addEventListener('click', function() {
        popUp.style.display = "none";
        backPop.style.background = "rgba(0,0,0,0.0)";
        backPop.style.position = "relative";
        backPop.style.height =  "0%"		
    });
