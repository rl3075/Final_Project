function Changes() { //creates the two portals, passing 
//            //passing variables into their class

  this.preload = function() {
    
  }
  this.display = function() {
    image(img4, 975, 550, 100, 75); //for sale sign 
  }

}


/*
var sizeofB = 300;

function FirstB() {

	this.display = function() {
    stroke(0);
    fill(500);
    ellipse(500, 500, sizeofB, sizeofB);
	}

}
/*
//Creating sprite using sprite sheets for animation
var key = false;
var player_sprite_sheet;
var player_walk;
var player_stand;
var player_sprite;
var scribble = new Scribble();    
var portal1; //2 objects of the same class
var portal2;
var you;
var firstB;


var player_frames = [
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
  // Load player sprite sheet from frames array
  player_sprite_sheet = loadSpriteSheet('assets/sprite1.png', player_frames);
  // Player walk animation passing in a SpriteSheet
  player_walk = loadAnimation(player_sprite_sheet);
  // An animation with a single frame for standing
  player_stand = loadAnimation(new SpriteSheet('assets/sprite1.png',
    [{"name":"player_stand", "frame":{"x":0, "y": 0, "width": 100, "height": 400}}]));
}

function setup() {
  createCanvas(1436, 815);
  frameRate(40);
   portal1 = new Portal('#619BF2', width - 40, height - 200, 50, 400);
   portal2 = new Portal('#C79BF2', 40, height - 200, 50, 400);
    //you = new You();
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
  portal1.display();
  portal2.display();



  // Mobile friendly controls
  /*
  var eventX;
  if (isTouch()) {
    eventX = touchX;
  } else {
    eventX = mouseX;
  }

  //if mouse is to the left
  
  if(keyCode === LEFT_ARROW) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(-1);
    // move left
    player_sprite.velocity.x = - 5;
  }
  else if(keyCode === RIGHT_ARROW) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(1);
    // move right
    player_sprite.velocity.x = 5;
  }
  else { */
    //player_sprite.changeAnimation('stand');
    //if close to the mouse, don't move
    //player_sprite.velocity.x = 0;
 // }

  //draw the sprite
  drawSprites();
}
/*
function touchStarted() {
  touch_started = true;
}

function mouseMoved() {
  mouse_moved = true;
}

function isTouch() {
  return touch_started && !mouse_moved;
}
*/

function keyPressed() {
	if(keyCode === LEFT_ARROW) {
    player_sprite.changeAnimation('walk');
    // flip horizontally
    player_sprite.mirrorX(-1);
    // move left
    player_sprite.velocity.x = - 5;
    
  }
  else if(keyCode === RIGHT_ARROW) {
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
  return false;
}


