`use strict`;

const countElement = document.getElementById("counter");
const addElement = document.getElementById("add-button");
const saveButtonElement = document.getElementById("counter-button");
const saveListElement = document.getElementById("save-list");
const powerupListElement = document.getElementById("powerupList");

let count = 0;
let backCount = 0;
let score = 0;
let level = 0;

const increment = () => {
    if(level < 1){
        count ++;
        backCount ++;
    }else if (level == 1){
        count += 10;
        backCount += 10;
    }else if (level == 2){
        count += 25;
        backCount += 25;
    }else if(level == 3){
        count += 40;
        backCount += 40;
    }else if(level == 4){
        count += 65;
        backCount += 65;
    }else if(level == 5){
        count += 80;
        backCount += 80;
    }else if(level == 6){
        count += 160;
        backCount += 160;
    }
    
    countElement.textContent = count;
    if(backCount == 5){
        const li = document.createElement("button");
        const text = document.createTextNode("Level 1! Cost: 5");
        li.appendChild(text);
        powerupListElement.appendChild(li);
        level = 1;
    }
    if(backCount == 105){
        const li = document.createElement("button");
        const text = document.createTextNode("Level 2! Upgraded click rate!");
        li.appendChild(text);
        powerupListElement.appendChild(li);
        level = 2;
    }
    if(backCount == 505){
        const li = document.createElement("button");
        const text = document.createTextNode("Level 3! Upgraded click rate!");
        li.appendChild(text);
        powerupListElement.appendChild(li);
        level = 3;
    }
    if(backCount == 6025){
        const li = document.createElement("button");
        const text = document.createTextNode("Level 4! Upgraded click rate!");
        li.appendChild(text);
        powerupListElement.appendChild(li);
        level = 4;
    }
    if(backCount == 20000){
        const li = document.createElement("button");
        const text = document.createTextNode("Level 5! Upgraded click rate!");
        li.appendChild(text);
        powerupListElement.appendChild(li);
        level = 5;
    }
    if(backCount == 36000){
        const li = document.createElement("button");
        const text = document.createTextNode("Level 5! Upgraded click rate!");
        li.appendChild(text);
        powerupListElement.appendChild(li);
        level = 6;
    }
    
}



const startAgain = () => {
   countElement.textContent = 0;
   count = 0;
   backCount = 0;
   level = 0;
   while(powerupListElement.firstChild){
   powerupListElement.removeChild(powerupListElement.firstChild);
   }
}

const save = () => {
    const li = document.createElement("li");
    const text = document.createTextNode(count);
    li.appendChild(text);
    saveListElement.appendChild(li);
    startAgain();
}

