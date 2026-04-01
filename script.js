console.log("Script started");

function start() {
    console.log("click")
    console.log(Math.random()* window.innerWidth);
    makeCircle();
}

function makeCircle() {
    //create a div for the circle
    let circle = document.createElement("div");
    
    //set some text and styles
    circle.innerText = "1";
    circle.style.width = "100px";
    circle.style.height = "100px"
    circle.style.color = "black";
    circle.style.backgroundColor = "white";
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
}

function getRandomX(){
    let ranX = Math.random() * (window.innerWidth - 100);
    return ranX; 
}

function getRandomY() {
    let ranY = Math.random() * (window.innerHeight - 100);
    return ranY; 
}