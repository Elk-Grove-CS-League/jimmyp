import chalk from 'chalk';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

function ask(question, answersList){
    console.log(question);
    
    console.log("Answers:\n" + answersList.join('\n'));
    var response = prompt('> ');
    if(answersList.includes(response)){
        return response;
    } else {
        ask(question, answersList);
        return response;
    }
}


let response = ask('what colors are around', ['blue', 'green']);

if(response == "blue"){
    response = ask("You are in a deep underground cave, enveloped in the blue light of a great, sparkling lake. What do you do? ", ['go into the lake', 'look for an exit', 'lay down and relax']);
    if(response == "go into the lake"){
        console.log("You slowly enter the water, paying no mind to the floor descending as you walk. The water is so tranquil, you enter an almost trance like state as the liquidy grave rises to shoulder level. With a smile on your face, you take another 3 steps and disappear.")
        console.log(chalk.red("You can't swim"));
        console.log(chalk.bold.red("You are dead"));
    } else if (response == "lay down and relax"){
        console.log("You lay down on the glassy shores, the sounds of the waves putting your mind at ease. Before you know it, you've fallen asleep, and you have a dream. You are at the beach and your friends are burying you with sand. While they are out getting a drink, the tide rolls in.")
        console.log(chalk.red("Immobile. You drown"));
        console.log(chalk.bold.red("You are dead"));
    } else {
        response = ask("You survey your surroundings. At the far end of the cave you notice an orange lamplight, the shadows illuminating a small crawlspace", ['enter the crawlspace', 'peak into the crawlspace']);
        if(response == "peak into the crawlspace"){
            console.log("You take a look into the crawlspace, and you make out what appears to be an empty room with a bed and table. It looks like a jail cell. Lost in thought, you fail to notice debris falling from the ceiling, as a stalagmite breaks loose and falls straight down towards you.");
            console.log(chalk.red("Why would you hesitate?"));
            console.log(chalk.bold.red("You are dead"));
        } else {
            ask("You enter the crawlspace and emerge to a from that resembles a jail cell. You look around to see the lamp on top of a table, illuminating a scribbled note.", ["pick up lamp", ["pick up note"], ["go back"]]);
        }
    }
} else {
    response = ask("You are in a sprawling forest, the echoes of the wildlife ring far. Faintly you hear rumbling in the distance. What do you do", ['go towards the noise', 'move away from the noise', 'look for a hiding place']);
}