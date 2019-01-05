// this is js
function myfunction(){
    // alert("idk. ,anm");
    var x = document.getElementById("x");
    var y = document.getElementsByClassName("gold");
    x.innerHTML = "pikachu";
    for(var i =0; i < y.length; i++){
        y[i].innerHTML = "charizard";
    }
    // y[0].innerHTML = "charizard";
}
// alert('pbj');   // it's working  !! this is so much fun

function undo(){
    var x = document.getElementById("x");
    var y = document.getElementsByClassName("gold");
    x.innerHTML = "X Div";
    for(var i =0; i < y.length; i++){
        y[i].innerHTML = "Gold";
    }
}

function day(){
    var spot = document.getElementById("k");
    if(spot){
        spot.innerHTML = "Day Time";

    }
    var spot2 = document.getElementById("j");
    if(spot2){
        spot2.id = "k";
        spot2.innerHTML = "Day Time";
    }

}

function night(){
    var spot2 = document.getElementById("k");
    spot2.innerHTML = "Night Time";
    spot2.id = "j";
}