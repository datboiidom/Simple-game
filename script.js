console.log("Script started");

//Variable to track current number
let currentNum = 1;
let level = 1;

function start() {
    console.log("click");
    //console.log(Math.random()* window.innerWidth);
    startLevel1();
}

function startLevel1() {
    currentNum = 1;
    level = 1;
    setTimeout(makeCircle, 100, 1);
    setTimeout(makeCircle, 500, 2);
    setTimeout(makeCircle, 1000, 3);
}

function startLevel2() {
    currentNum = 1;
    level = 2;
    setTimeout(makeCircle, 100, 1);
    setTimeout(makeCircle, 500, 2);
    setTimeout(makeCircle, 1000, 3);
    setTimeout(makeCircle, 1500, 4);
    setTimeout(makeCircle, 2000, 5);
}


function makeCircle(num) {
    //create a div for the circle
    let circle = document.createElement("div");
    
    //set some text and styles
    circle.innerText = num;
    circle.style.width = "100px";
    circle.style.height = "100px"
    circle.style.color = "darkred";
    circle.style.backgroundColor = "pink";
    circle.style.borderRadius = "90px";
    circle.style.alignContent = "center";
    circle.style.textAlign = "center";
    circle.style.fontSize = "20px";
   
    //position circle randomly using absolut
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    //add to the page
    document.body.appendChild(circle);

    //Make it clickable
    circle.addEventListener("click", checkForRemove);
}

function getRandomX(){
    let ranX = Math.random() * (window.innerWidth - 100);
    return ranX; 
}

function getRandomY() {
    let ranY = Math.random() * (window.innerHeight - 100);
    return ranY; 
}

//checks for the right choice and removes it
function checkForRemove(event) {
    let circle = event.target;
    console.log(circle.innerText);
    if (circle.innerText == currentNum){
        circle.remove();
        currentNum++;
        if (currentNum == 4 && level == 1) {
            startLevel2();
        }
        else if (currentNum == 6 && level == 1) {
            
        }
    }
}

