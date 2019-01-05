
function AllDay(){
    var stuff = document.getElementsByClassName("dark");
    if(stuff){
        for(var i= 0; i < 10; i++){
            if(stuff[i]){
                stuff[i].className = "light";
            }
        }
    }
}

function AllNight(){
    var stuff = document.getElementsByClassName("light");
    if(stuff){
        for(var i= 0; i < 10; i++){
            if(stuff[i]){
                stuff[i].className = "dark";
            }
        }
    }
}