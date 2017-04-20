var teleport = 5; 
var key = false;
var player_sprite_sheet;
var player_walk; 
var player_stand;
var player_sprite;
var scribble = new Scribble();    
var portal1; //2 objects of the same class
var portal2;
var you;
var mySound;
var changes1;
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
var img11;
var introFont;
var motion = 0;

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
 img11 = loadImage("assets/constructionsite.png");
 img10 = loadImage("assets/newapt.png");
 introFont = loadFont("assets/GoodDog.otf");
 mySound = loadSound('assets/song1.mp3');
  // Load player sprite sheet from frames array
  player_sprite_sheet = loadSpriteSheet('assets/sprite1.png', player_frames);
  // Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);
  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('assets/sprite1.png',
    [{"name":"player_stand", "frame":{"x":0, "y": 0, "width": 100, "height": 400}}]));
}

function setup() {
	mySound.setVolume(0.1);
  mySound.play();
  createCanvas(1436, 815);
  frameRate(40);
   portal1 = new Portal('#619BF2', width - 40, height - 200, 70, 400); //spawn two portals on each side
   portal2 = new Portal('#C79BF2', 40, height - 200, 70, 400);
   //changes1 = new Changes();
    //firstB = new FirstB();
    //you.setup();
    //you.preload();
  // Create the Player sprite and add it's animations
  player_sprite = createSprite(width/2, 600, 100, 300);
  player_sprite.addAnimation('walk', player_walk);
  player_sprite.addAnimation('stand', player_stand);

}

function draw() {
  clear();
  background(255);
	image(img, 0, 0, width, height-115); //spawn image of background
	if (teleport === 1) { //first scene
	image(img2, width/2, 0, 700, 800); //store
	image(img5, 652, 300, 85, 90); //boombox
	image(img3, 100, -350, 700, 1100); //apt
  textSize(25);
  fill(0);
  text("COFFEE - $1", 900, 600);
}
if (teleport === 2) { //second scene
	image(img2, width/2, 0, 700, 800); //store
  image(img5, 652, 300, 85, 90); //boombox
	image(img3, 100, -350, 700, 1100); //apt
  //changes1.display();
  image(img4, 975, 550, 100, 75); //for sale sign
}
if (teleport === 3) { //third scene
  image(img7, width/2, 0, 700, 800); //store
  image(img3, 100, -350, 700, 1100); //apt
  //changes1.display();
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0);
  text("COFFEE - $5", 900, 600);
}
if (teleport === 4) { //third scene
  image(img7, width/2, 0, 700, 800); //store
  image(img3, 100, -350, 700, 1100); //apt
  //changes1.display();
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0);
  text("COFFEE - $5", 900, 600);
}
if (teleport === 5) { //third scene
  image(img7, width/2, 0, 700, 800); //store
  //image(img9, 100, 500, 300, 300); //apt
  //changes1.display();
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0);
  text("COFFEE - $5", 900, 600);
  image(img11, 150, 0, 600, 700);
  //image(img8, 250, 500, 300, 250); //construction sign
  image(img9, 85, 500, 700, 250); //caution tape
}
if (teleport === 6) { //third scene
  image(img7, width/2, 0, 700, 800); //store
  image(img10, 100, -100, 700, 900); //new apt
  //changes1.display();
  image(img6, 920, 290, 300, 125); //starbucks logo
  textSize(25);
  fill(0);
  text("COFFEE - $5", 900, 600);
}

	rectMode(CENTER);
	fill(100);
	strokeWeight(10);
	rect(width/2, height, width, 230);
    scribble.bowing = 5;
    scribble.maxOffset = 1;
    strokeWeight(5);
    scribble.scribbleFilling([0, width, width, 0], [700, 700, height, height], 100, 10);
    strokeWeight(5);
    //scribble.maxOffset = 0;
    //scribble.scribbleRect(width/2, height, width, 230);
    scribble.maxOffset = 0;	
    portal1.display(); //display the portals
    portal2.display();
         
     if(keyDown(LEFT_ARROW)) { //thse keyboard commans check change motion variable and teleport you
  motion = 1;
    if(player_sprite.position.x === 88) {
      player_sprite.position.x = 1383;
      teleport = teleport - 1; 
    } 
      }
      else if(keyDown(RIGHT_ARROW)) {
    motion = 2;
    if(player_sprite.position.x === 1383) {
      player_sprite.position.x = 88;
      teleport = teleport + 1; 
    } 
        }
      else {
        motion = 0;
      }
  
      if(motion == 1) { //these if statements check the var motion to animate you
      player_sprite.changeAnimation('walk');
    // flip horizontally
      player_sprite.mirrorX(-1);
    // move left
      player_sprite.velocity.x = - 5; 
      }
      else if(motion == 2) {
        player_sprite.changeAnimation('walk');
    // flip horizontally
        player_sprite.mirrorX(1);
    // move right
        player_sprite.velocity.x = 5;
      }
      else {
      player_sprite.changeAnimation('stand');
    //if close to the mouse, don't move
      player_sprite.velocity.x = 0;
      }

    drawSprites(); //draw the sprites
 
 if (teleport === 0) {
 	background(255);
 	fill(0);
 	noStroke();
 	textSize(100);
 	textFont(introFont);
 	text("GENTRIFIED", 550, height/2-100);
 	textSize(20);
 	text("Press Enter Bar to Play", 600, height/2);
 	if (keyIsDown(ENTER))
    teleport = teleport + 1;
 }
} // draw
