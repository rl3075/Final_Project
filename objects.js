function Objects() {
	
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
    } //

} //display function

this.interact = function() { //control interactive aspects of obhects
    if(mouseIsPressed) { //checks for when you click on the news to show the article
    	if (mouseX > 800 && mouseX < 905 && mouseY < 776 && mouseY > 700 && teleport === 2) {
        	print('news')
       		image(img13, 400, 0, 700, 800); //news article
        } //if 
    } //mouseispresed
} //this interact function

this.sidewalk = function() { //creates the sidewalk
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



} // class 