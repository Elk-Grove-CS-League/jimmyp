//const story = require('./script.json');

let startButton = document.getElementById("startButton");

startButton.onclick = function(){playStory()};

function greet(){
    alert("You clicked!");
}

function playStory(num){
    document.getElementById("header").style.display = "none";
    document.getElementById("storyOutput").style.display = "block";
    //document.getElementById("header").style.display = "none";
    //document.getElementById("storyOutput").style.display = "block";
    document.getElementById("storyOutput").innerHTML = ("What colors do you see around you");
    //document.getElementById("storyOutput").write("what colors do you see around you")
}