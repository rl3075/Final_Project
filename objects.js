function Objects() { 
	//this class is for all the interavtive objects that add onto the story 
	
	//this displays the images used in the scenes 
this.display = function() {
	if (teleport === 2) { //second scene
    	image(img12, 800, 700, 100, 75); //newspaper
    }

    if (teleport === 3) { //this shows the family in the third scene
    	image(img14, 250, 375, 275, 400); //
    } 

    if (teleport === 4) { //this shows the managers handshaking in the third scene
    	image(img16, 400, 450, 300, 300); //handshake
    } 

    if (teleport === 5) { //this shows the family in the third scene
  	image(img15, 900, 475, 250, 350); //
    } 

	if (teleport > 6) { //this shows the family in the third scene
    	image(img14, 250, 425, 225, 350); //
    }

} //display function

//this allows you to click on the newspaper
this.interact = function() { //control interactive aspects of obhects
    if(mouseIsPressed) { //checks for when you click on the news to show the article
    	
    	if (mouseX > 800 && mouseX < 905 && mouseY < 776 && mouseY > 700 && teleport === 2) {
       		image(img13, 400, 0, 700, 800); //news article
       
        } //if 
    
    } //mouseispresed

} //this interact function

//creates the sidewalk
this.sidewalk = function() { 
	 rectMode(CENTER);
  fill(100);
  strokeWeight(10);
  rect(width/2, height, width, 230);
    scribble.bowing = 5;  //the scribble library creates cartoonish images
    scribble.maxOffset = 1; //but it can also create a "shaking" aspect in a draw loop because of the offset it uses
    strokeWeight(5); //I used this feature to create the illusion of energy from the portal disspersing
    scribble.scribbleFilling([0, width, width, 0], [700, 700, height, height], 100, 10); //into the sidewalk
    strokeWeight(5);
}

//used to display the year that the scenes take place in 
this.year = function(size, word, sizeX, sizeY) {
	textSize(size);
	textFont(introFont);
  	textAlign(CENTER);
  	fill(0);
  	text(word, sizeX, sizeY);
} //text function for current year 

//shows the price for coffee and how it went up 
this.price = function(size, word, sizeX, sizeY) {
	textSize(size);
	fill(0);
	textFont("Helvetica");
  	textAlign(CENTER);
  	text(word, sizeX, sizeY);
} //text function for current year 

//controls the changing background 
this.background = function() {
	if (teleport < 6) { //second scene
    	image(img, -50, 0, width+50, height-40); //spawn image of oldcity
    }

    if (teleport === 6) { //second scene
    	 image(img18, 0, 0, width, height+25); //spawn image of where the poeople went
    }

    if(teleport > 6) {
    image(img17, 0, 0, width, height+30); //spawn image of oldcity
    objects.year(50, "WATTS-2020", width-150, 60);
  }
    } //background class

//controls the dialouge between the family (Carlos) and you
this.dialogue = function() {
	
	//I used another time varibale to store the current time and used this to show the speech bubb;e
	if(millis() - talkTime < 2500) {
    this.speech(player_sprite.position.x, 350);
    }

    if(millis() - talkTime > 3000 && millis() - talkTime < 8500) {
    this.speech(400, 320);
	}
	
	if(millis() - talkTime > 8500 && millis() - talkTime < 12500) {
    this.speech(player_sprite.position.x, 350);
	}
	
	if(millis() - talkTime > 12500 && millis() - talkTime < 15500) {
    this.speech(400, 320);
	}

	if(millis() - talkTime > 15500 && millis() - talkTime < 19500) {
    this.speech(player_sprite.position.x, 350);
	}

} // 

//creates the bubbles for the speech
this.speech = function(x, y) {
	stroke(0);
    strokeWeight(3);
    fill(255);
    //triangle(x-20,y+25,x,y,x3,y3)
    ellipse(x, y, 200, 100);
    //this for loop creates the periods to show that they are thought bubbles 
    for (i = x - 80; i < x + 90; i = i + 20) {
    fill(0);
    rectMode(CENTER);
    rect(i, y , 10, 10);
    }
}
 
 

} // class 