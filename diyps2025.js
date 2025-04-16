var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  rachel = loadImage('https://sachik1.github.io/sachiKDigitalPS/rachel.png');
  monica = loadImage('monica.PNG');
  phoebe = loadImage('phoebe.PNG');
  chandler = loadImage('chandler.PNG');
  ross = loadImage('ross.PNG');
  joey = loadImage('joey.PNG');
}

function setup() {
  let cnv = createCanvas(600, 400);  // Create canvas
  cnv.parent(document.body);        // Attach canvas to the <body> so it shows up on GitHub Pages
  background(screenbg);             // Set the background color
}


function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(rachel, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '2') { // second tool
    image(monica, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '3') { // third tool
    image(phoebe, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '4') {
    image(chandler, mouseX, mouseY, 50, 50);
  } else if (key == '5') { // this tool calls a function
    image(ross, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '6') {
    image(joey, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '7') {
    let couchWidth = random(60, 100);
    let couchHeight = couchWidth * 0.4;
    let armrestSize = couchHeight * 0.8;
  
    let x = mouseX;
    let y = mouseY;
  
    fill(200); // light gray couch
    stroke(120);
    strokeWeight(1);
    rect(x - couchWidth / 2, y, couchWidth, couchHeight, 5);
    rect(x - couchWidth / 2, y - couchHeight * 0.6, couchWidth, couchHeight * 0.6, 5);
    ellipse(x - couchWidth / 2, y + couchHeight * 0.5, armrestSize, armrestSize);
    ellipse(x + couchWidth / 2, y + couchHeight * 0.5, armrestSize, armrestSize);
  }else if (toolChoice == '8') {
    fill(147, 112, 219, 180);
    noStroke();
    rect(mouseX, mouseY, 25, 25); 
  } else if (toolChoice == '9') {
    let sliceHeight = 50;
    let sliceWidth = 40;
  
    let x = mouseX;
    let y = mouseY;
  
    fill(210, 180, 140); 
    stroke(139, 69, 19); 
    strokeWeight(1);
    arc(x, y, sliceWidth, 20, PI, TWO_PI);
  
    fill(255, 204, 100); 
    stroke(255, 160, 80);
    triangle(x - sliceWidth / 2, y, x + sliceWidth / 2, y, x, y + sliceHeight);
  
    fill(200, 50, 50);
    noStroke();
    ellipse(x - 10, y + 15, 8, 8);
    ellipse(x + 8, y + 25, 8, 8);
    ellipse(x, y + 35, 8, 8);
  } else if (toolChoice == '0') {
    strokeWeight(3);
    stroke(random(255), random(255), random(255));
    noFill();
    beginShape();
    for (let i = 0; i < 10; i++) {
      vertex(mouseX + random(-10, 10), mouseY + random(-10, 10));
    }
    endShape();
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
