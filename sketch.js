var teleport = 0; 
var tp = 1;
var player_sprite_sheet; //these are used to create the sprite
var player_walk; 
var player_stand;
var player_sprite;
var dancer; //dancing person
var scribble = new Scribble(); //allows you to use scribble library  
var portal1; //2 objects of the same class
var portal2;
var you;
var mySound;
var familySound; //dialouge for family 
var img; //variable for image of background
var img2; //image for store
var img3; //image for apartments
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
var introFont;
var motion = 0; //used with key to control sprite movement
var ourtime; //courrent time
var timeStamp; //time stamp
var rad = 10; //these are used for the portal visuals
var theta = 0; 


var player_frames = [ //splites the png into frames for animation
  {"name":"player_walk01", "frame":{"x":0, "y": 0, "width": 100, "height": 400}},
  {"name":"player_walk02", "frame":{"x":280, "y": 0, "width": 170, "height": 400}},
  {"name":"player_walk03", "frame":{"x":575, "y": 0, "width": 180, "height": 400}},
  {"name":"player_walk04", "frame":{"x":865, "y": 0, "width": 190, "height": 400}},
  {"name":"player_walk05", "frame":{"x":1195, "y": 0, "width": 110, "height": 400}},
  {"name":"player_walk06", "frame":{"x":1470, "y": 0, "width": 170, "height": 400}},
  {"name":"player_walk07", "frame":{"x":1775, "y": 0, "width": 180, "height": 400}},
  {"name":"player_walk08", "frame":{"x":2065, "y": 0, "width": 185, "height": 400}}
];



function preload() {
 img = loadImage("assets/background.jpg");
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

 introFont = loadFont("assets/impact.ttf");
 mySound = loadSound('assets/song1.mp3');
  familySound = loadSound('assets/family.m4a');
  player_sprite_sheet = loadSpriteSheet('assets/sprite1.png', player_frames); // Load player sprite sheet from frames array
  player_walk = loadAnimation(player_sprite_sheet); // Player walk animation passing in a SpriteSheet
  player_stand = loadAnimation(new SpriteSheet('assets/sprite1.png',  // An animation with a single frame for standing
    [{"name":"player_stand", "frame":{"x":0, "y": 0, "width": 100, "height": 400}}]));
  dancer = loadAnimation("assets/dancer_frames/0.png", "assets/dancer_frames/10.png");
}

function setup() {
	mySound.setVolume(0.5);
  //mySound.play();
  createCanvas(1436, 815);
  frameRate(40);
   portal1 = new Portal('#619BF2', width - 40, height - 200, 70, 400); //spawn two portals on each side
   portal2 = new Portal('#C79BF2', 40, height - 200, 70, 400);
   objects = new Objects(); //creates instance of Objects class

  // Create the Player sprite and add it's animations
  player_sprite = createSprite(width/2, 600, 100, 300);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('stand', player_stand);
}

function draw() {
  clear();
  image(img, 0, 0, width, height-115); //spawn image of background
	escenas(); //checks for teleportation to change scenes
	objects.sidewalk(); //draws the sidewalk
  objects.display(); //displays interavtive objects 
  portal1.display(); //display the portals
  portal2.display(); // one for each side 

  if(keyDown(LEFT_ARROW)) { //thse keyboard commans check change motion variable and teleport you
    motion = 1;
    if(player_sprite.position.x === 88) {
      player_sprite.position.x = 1383;
      teleport = teleport - 1; 
      tp = 1;
      timeStamp = millis(); //stores current time
      } 
    }
  else if(keyDown(RIGHT_ARROW)) {
    motion = 2;
    if(player_sprite.position.x === 1383) {
      player_sprite.position.x = 88;
      teleport = teleport + 1; 
      tp = 0;
      timeStamp = millis(); //stores current time
      } 
    }
  else {
        motion = 0;
  }
  
  if(motion == 1) { //these if statements check the var motion to animate you
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
    
    if(millis() - timeStamp < 1500) {
      if(tp === 0) {
       portal1.travelf();
      }
      if(tp === 1) {
       portal1.travelb();
      }
    }

     objects.interact(); //interact with the family 

    mainmenu(); 
} // draw

function mainmenu() { //calls for main menu
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

function escenas() {
  if (teleport === 1) { //first scene
    image(img2, width/2, 0, 700, 800); //store
    image(img5, 652, 300, 85, 90); //boombox
    image(img3, 100, -350, 700, 1100); //apt
    textSize(25);
    fill(0);
    text("CAFÉ - $1", 900, 600);
    animation(dancer, 535, 325);
  }
if (teleport === 2) { //second scene
  image(img2, width/2, 0, 700, 800); //store
  image(img5, 652, 300, 85, 90); //boombox
  image(img3, 100, -350, 700, 1100); //apt
  image(img4, 975, 550, 100, 75); //for sale sign
  }
if (teleport === 3) { //third scene
  image(img7, width/2, 0, 700, 800); //store
  image(img3, 100, -350, 700, 1100); //apt
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0);
  text("COFFEE - $5", 900, 600);
 }
if (teleport === 4) { //fourth scene
  image(img7, width/2, 0, 700, 800); //store
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0); 
  text("COFFEE - $5", 900, 600);
  image(img11, 150, 0, 600, 700);
  //image(img8, 250, 500, 300, 250); //construction sign
  image(img9, 85, 500, 700, 250); //caution tape
}
if (teleport === 5) { //fifth scene
  image(img7, width/2, 0, 700, 800); //store
  image(img10, 100, -100, 700, 900); //new apt
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0);
  text("COFFEE - $5", 900, 600);
}
  } //escenas


  function mousePressed() {
    print(mouseX)
   if (mouseIsPressed && mouseX > 299 && mouseX < 473 && mouseY < 726 && mouseY > 384 && teleport === 3) {
     mySound.playMode('restart');
     familySound.setVolume(1);
     familySound.play();
    }
  } //mousePressed
