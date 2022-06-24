const fs = require('fs')
let output = {}
fs.readFile('./script.json', 'utf-8', (err, data) => {
  if (err) throw err
  output = JSON.parse(data)
});

let startButton = document.getElementById("startButton");

startButton.onclick = function(){playStory()};

function greet(){
    alert("You clicked!");
}

function playStory(num){
    document.getElementById("header").hidden =  true;
    document.getElementById("story").hidden = false;
    //document.getElementById("story").write(output.story1.text1);
    //document.getElementById("storyOutput").write("what colors do you see around you")
}