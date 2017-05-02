
function Portal(color, xpos, ypos, width, height) { //creates the two portals, passing varibales
//stores two colors
this.clr = ['#C79BF2','#619BF2']; 
this.theta = 0; //variable for theta

    //this function creates the two portals 
	this.display = function() {
	strokeWeight(7);
	stroke(color);
	fill(0);
   	//this creates the cartoon effect, I used the Scribble.js Github readme doc to figure out this library
    scribble.scribbleEllipse(xpos, ypos, width, height);

	} //display

    //tjos function creates teh visual for going into the future
	this.travelf = function() {

	if (teleport < 7) { //fifth scene
    //I got my idea for this off the spiral in Learning Processing, but I modified the code a lot 
    background(0); 
	 for(r = 0; r < 1000; r = r + .5) { //I used a for loop to create a spiral
     stroke(100); //at first I just a normal loop but it would create the spiral slowly
     strokeWeight(1);
     var x = r * diff1 * cos(this.theta); //after experimenting I was able to exuecute a solid spinning spiral
     var y = r * diff2 * sin(this.theta);
     fill(this.clr[0]);
     ellipse(x + 700, y + 400, 35, 35);
     fill(this.clr[1]); //I used the Learning Procc. book to figure this out, the cos and sin part
     ellipse(x + 700, y + 400, 30, 30); //It is similar to my midterm, but I played with the math to 
     this.theta = this.theta + 1; //create more interesting visuals 
     } //for-loop
     } // if statement

     if (teleport > 6) {
     background(this.clr[1]);
     for(r = 0; r < 1000; r = r + .5) {  //the for loop make the spiral by expanding the radius 
     stroke(100); 
     var x = r * diff1 * cos(this.theta); 
     var y = r * diff2 * sin(this.theta);
     fill(0); 
     ellipse(x + 700, y + 400, 30, 30);
     this.theta = this.theta + 1;
     } //for-loop
     } //if statement for tp > 6
	} //travel function for travelling foward in time

    //this is the function for going back in time
    this.travelb = function() {
    if (teleport > 0) { //fifth scene
	background(0);
	 for(r = 0; r < 1000; r = r + .5) { 
     stroke(0); 
     strokeWeight(1);
     var x = r * diff1 * cos(this.theta); 
     var y = r * diff2 * sin(this.theta);
     fill(this.clr[1]);
     ellipse(x + 700, y + 400, 35, 35);
     fill(this.clr[0]);  
     ellipse(x + 700, y + 400, 30, 30);
     this.theta = this.theta + 1;
     } //for loop
    } //if statement
	} //travel foward function

} //portal class