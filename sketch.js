//CC Final Project
//Gentrified
//Inspired by Youtube video "Nugget" by FilmBuilder
//It is an animated story of a person going to the same location and seeing how gentrification affects it
//The hardest part of this was figuring out the structure to control things exactly how I wanted them to  

var teleport = 0; //controls the scenes, even though it's meant to actually be time travel 
var tp = 1; //controls which time travel visual to toggle
var player_sprite_sheet; //these are used to create the sprite
var player_walk; 
var player_stand;
var player_sprite;
var dancer; //dancing person
var scribble = new Scribble(); //allows you to use scribble library  
var portal1; //2 objects of the same class
var portal2;
var mySound; //bacnground song
var soundEffect; //timetravel sound effect
var convo; //dialouge for family 
var img; //variable for image of background
var img2; //image for store
var img3; //image for apartmentsrad
var img4; //image of for sale sign
var img5; //boombox
var img6; //starbucks logo 
var img7; //starbucks store
var img8; //construction sign
var img9; //caution tape
var img10; //new apt
var img11; //construction site
var img12; //news
var img13; //newspaper
var img14; //family
var img15; //table
var img16; //handshake 
var img17; //new city
var img18; //slums 
var introFont; //font used 
var motion = 0; //used with key to control sprite movement
var talkTime; //time stamp for dialouge
var timeStamp; //time stamp
var diff1 = 0; //these control the randomzied patters for the time travel effect
var diff2 = 0;


var player_frames = [ //splites the png into frames for animation
  {"name":"player_walk01", "frame":{"x":0, "y": 0, "width": 100, "height": 400}},
  {"name":"player_walk02", "frame":{"x":280, "y": 0, "width": 170, "height": 400}},
  {"name":"player_walk03", "frame":{"x":575, "y": 0, "width": 180, "height": 400}},
  {"name":"player_walk04", "frame":{"x":865, "y": 0, "width": 190, "height": 400}},
  {"name":"player_walk05", "frame":{"x":1195, "y": 0, "width": 110, "height": 400}},
  {"name":"player_walk06", "frame":{"x":1470, "y": 0, "width": 170, "height": 400}},
  {"name":"player_walk07", "frame":{"x":1775, "y": 0, "width": 180, "height": 400}},
  {"name":"player_walk08", "frame":{"x":2065, "y": 0, "width": 185, "height": 400}},
];

function preload() {
 img = loadImage("assets/oldcity.jpg"); //load up all my media
 img2 = loadImage("assets/store.png");
 img3 = loadImage("assets/apt.png");
 img4 = loadImage("assets/forsalesign.png");
 img5 = loadImage("assets/boombox.png");
 img6 = loadImage("assets/starbucks.png");
 img7 = loadImage("assets/starstore.png");
 img8 = loadImage("assets/undercon.png");
 img9 = loadImage("assets/caution.png");
 img10 = loadImage("assets/newapt.png");
 img11 = loadImage("assets/constructionsite.png");
 img12 = loadImage("assets/news.png");
 img13 = loadImage("assets/newspaper.png");
 img14 = loadImage("assets/family.png");
 img15 = loadImage("assets/table.png");
 img16 = loadImage("assets/handshake.png");
 img17 = loadImage("assets/slums.jpg");
 img18 = loadImage("assets/newcity.jpg");

 introFont = loadFont("assets/impact.ttf");
 mySound = loadSound('assets/song1.mp3');
 soundEffect = loadSound('assets/tpeffect.mp3')
 convo = loadSound('assets/convo.mp3');
 
 //I used the play.js library for the animations, and I used the Paolo Pedercini's examples 
 //found on http://p5play.molleindustria.org/examples/index.html?fileName=sprites_with_sheet.js
// this loads the whole sprite sheet 
 player_sprite_sheet = loadSpriteSheet('assets/sprite1.png', player_frames); 
// This loads the animations and frames for when the player walks
 player_walk = loadAnimation(player_sprite_sheet); 
//stores one frame to be the standing stance
 player_stand = loadAnimation(new SpriteSheet('assets/sprite1.png', 
  [{"name":"player_stand", "frame":{"x":0, "y": 0, "width": 100, "height": 400}}]));
//this compiles png sprites into one animation
 dancer = loadAnimation("assets/dancer_frames/0.png", "assets/dancer_frames/10.png"); 
}

function setup() {
  //set up all my media, I looked up functions on the refernce page for sound.js
	mySound.setVolume(.5);
  soundEffect.setVolume(.5);
  mySound.loop(); //loops the bacnground song
  convo.playMode('restart'); //so that the congo does not overlap
  convo.setVolume(1);
  createCanvas(1436, 815);
  frameRate(40);
  //spawn two portals on each side
   portal1 = new Portal('#619BF2', width - 40, height - 200, 70, 400); 
   portal2 = new Portal('#C79BF2', 40, height - 200, 70, 400);
   //creates instance of Objects class
   objects = new Objects(); 

  // Create the Player sprite and add it's animations
  player_sprite = createSprite(width/2, 600, 100, 300);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('stand', player_stand);
}

function draw() {
  clear();
  objects.background();
	escenas(); //checks for teleportation to change scenes
	objects.sidewalk(); //draws the sidewalk
  objects.display(); //displays interavtive objects 
  
  //these make sure the story and portal work in unison, you can't travel into extra scenes
  if(teleport < 7) {
  portal1.display('#619BF2', width - 40, height - 200, 70, 400); //display the portals
}

if(teleport > 1) {
  portal2.display('#C79BF2', 40, height - 200, 70, 400); // one for each side 
}
  
  //Moving the player with the keys was hard to figure out, initally I had everything in a if(keyisPressed) 
  //statement but once you clicked a key the sprite would keep moving, and when I clicked any other key
  //it would stop moving, so I had to create an external variable to control the motion
  if(keyDown(LEFT_ARROW)) { //thse keyboard commans check change motion variable 
    motion = 1; //this variable works with another set of code to make the player walk
    //this teleports the player from portal to portal 
    if(player_sprite.position.x === 88 && teleport > 1) { 
      player_sprite.position.x = 1383;
      teleport = teleport - 1;
      //this varibale toggles which object portal function to call 
      tp = 1;
      //this creates the random visual 
      diff1 = random(1,10); 
      diff2 = random(1,10);
      //stores time to control time of the visual 
      timeStamp = millis(); //stores current time
      //plays time travel sound effect
      soundEffect.play();
      } 
    }
  else if(keyDown(RIGHT_ARROW)) {
    motion = 2;
    if(player_sprite.position.x === 1383 && teleport < 7) {
      player_sprite.position.x = 88;
      teleport = teleport + 1; 
      tp = 0;
      diff1 = random(1,10);
      diff2 = random(1,10);
      timeStamp = millis(); //stores current time
      soundEffect.play();
      } 
    }
  else {
        motion = 0;
  }
  //these if statements check the var motion to animate you
  if(motion == 1) { 
      player_sprite.changeAnimation('walk');
      player_sprite.mirrorX(-1); //flip horizontally
      player_sprite.velocity.x = - 5; // move left
  }
  else if(motion == 2) {
        player_sprite.changeAnimation('walk');
        player_sprite.mirrorX(1); // flip horizontally
        player_sprite.velocity.x = 5; // move right
  }
  else {
      player_sprite.changeAnimation('stand'); //if no key is pressed, stand still
      player_sprite.velocity.x = 0; 
  }

    drawSprites(); //draw the sprites
    
    //Using the time control examples you showed us a while back, I used the same method
    //to control the duration of each time travel visual
    if(millis() - timeStamp < 2500) { 
       frameRate(20); //changes framerate speed to control visuals
      if(tp === 0) {
       portal1.travelf();
      }
      if(tp === 1) {
       portal1.travelb();
      }
    }
     if(millis() - timeStamp > 2500) {
       frameRate(40);
     }

     //interact with the family 
     objects.interact(); 

     //calls the dialogue function 
     objects.dialogue(); 

     //toggles the main menu screen
     mainmenu(); 

} // draw

//calls for main menu
function mainmenu() { 

if (teleport === 0) {
  background(255);
  fill(0);
  noStroke();
  textSize(100);
  textFont(introFont);
  textAlign(CENTER);
  text("GENTRIFIED", width/2, height/2-100);
  textSize(20);
  text("Press Enter to Play", width/2, height/2);
  
  if (keyIsDown(ENTER))
    teleport = teleport + 1;
  } //if
} //mainmenu

function sidewalk() { //creates the sidewalk
 
  } //sidewalk

//this function creates every scene
function escenas() {
 
  if (teleport === 1) { //first scene
    image(img2, width/2, 0, 700, 800); //store
    image(img5, 652, 300, 85, 90); //boombox
    image(img3, 100, -350, 700, 1100); //apt
    objects.price(25, "CAFÉ - $1", 1000, 600);
    //create the dancing sprite
    animation(dancer, 535, 325);
    //object function shows the year on the top right 
    objects.year(50, "L.A.-2000", width-150, 60);
  }

if (teleport === 2) { //second scene
  image(img2, width/2, 0, 700, 800); //store
  image(img5, 652, 300, 85, 90); //boombox
  image(img3, 100, -350, 700, 1100); //apt
  image(img4, 975, 550, 100, 75); //for sale sign
  animation(dancer, 535, 325);
  objects.year(50, "2002", width-75, 60);
  }

if (teleport === 3) { //third scene
  image(img7, width/2, 0, 700, 800); //store
  image(img3, 100, -350, 700, 1100); //apt
  image(img6, 920, 290, 300, 125); //starbucks logo
  //this object function calls for price of the coffee on the window 
  objects.price(25, "COFFEE - $5", 1000, 600);
  objects.year(50, "2005", width-75, 60);
 }

if (teleport === 4) { //fourth scene
  image(img7, width/2, 0, 700, 800); //store
  image(img6, 920, 290, 300, 125); //starbucks logo
  objects.price(25, "COFFEE - $5", 1000, 600);
  image(img11, 150, 0, 600, 700);
  image(img9, 85, 500, 700, 250); //caution tape
  objects.year(50, "2007", width-75, 60);
}

if (teleport === 5) { //fifth scene
  image(img7, width/2, 0, 700, 800); //store
  image(img10, 150, -100, 600, 900); //new apt
  image(img6, 920, 290, 300, 125); //starbucks logo
  objects.price(25, "COFFEE - $5", 1000, 600);
  objects.year(50, "2010", width-75, 60);
}

if (teleport === 6) { //fifth scene
  image(img7, width/2, 0, 700, 800); //store
  image(img10, 150, -100, 600, 900); //new apt
  image(img6, 920, 290, 300, 125); //starbucks logo
  objects.price(25, "COFFEE - $5", 1000, 600);
  objects.year(50, "2020", width-75, 60);
}

  } //escenas

  //this function initaties the converstain between you and the family by clicking the mouse 
  function mouseClicked() {
    //print(mouseX);
    if (mouseX > 299 && mouseX < 473 && mouseY < 726 && mouseY > 384 && teleport === 3) {
    talkTime = millis(); //stores current time
    convo.play();
    } //if
    } //mouse clicked
