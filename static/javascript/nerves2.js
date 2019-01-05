alert("makes no sense");
// not able to grab element and do stuff to it without functions right now idk y
function AllDay(){
    var night = document.getElementById("night");
    if(night){
        night.innerHTML = "Day";
        night.id= "day";
        console.log("changing night to day")
    }
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
    var day = document.getElementById("day");
    if(day){
        day.innerHTML = "Night";
        day.id = "night";
        console.log("changing day to night");
    }
    var stuff = document.getElementsByClassName("light");
    if(stuff){
        for(var i= 0; i < 10; i++){
            if(stuff[i]){
                stuff[i].className = "dark";
            }
        }
    }
}