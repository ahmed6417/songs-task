
const listContainer = document.querySelector("ol");

let songss = [
    "Time to Pretend",
    "O-o-oh Child",
    "Wish You Were Here",
    "Heroes",
    "I Put a Spell on You",
    "Call Me",
    "Paper Planes",
    "Jolene",
    "You Don't Own Me",
    "Fast Car",
    "Run the World (Girls)",
    "Superstition"
    ];


for (let i = 0; i < songss.length; i++) {
    
    let hashicon = "#"
    let songsList = document.createElement("li");

    song = songss[i];
    songsList.innerHTML = song;
    listContainer.append(songsList);
}



var play = document.getElementById ("showMusic");
var byJs = document.getElementById ("by-js");
function playSongs() {
    play.style.display = "none";
    byJs.style.display = "grid";
}