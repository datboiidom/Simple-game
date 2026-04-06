console.log("Script started");

function start() {
    console.log("click")
    //console.log(Math.random()* window.innerWidth);
    setTimeout(makeCircle, 100, 1);
    setTimeout(makeCircle, 500, 2);
    setTimeout(makeCircle, 1000, 3);
    setTimeout(makeCircle, 1300, 4);
    setTimeout(makeCircle, 2000, 5);
    setTimeout(makeCircle, 2300, 6);
}


function makeCircle(num) {
    //create a div for the circle
    let circle = document.createElement("div");
    
    //set some text and styles
    circle.innerText = num;
    circle.style.width = "100px";
    circle.style.height = "100px"
    circle.style.color = "darkred";
    circle.style.backgroundColor = "deepskyblue";
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
}