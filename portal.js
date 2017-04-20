
function Portal(color, xpos, ypos, width, height) { //creates the two portals, passing 
var rad = 10;


//scribble.bowing = 0;	
// 						//passing variables into their class
	this.display = function() {
	strokeWeight(7);
	stroke(color);
	fill(0);
   	scribble.scribbleEllipse(xpos, ypos, width, height);
   	//image(img4, 975, 550, 100, 75); //for sale sign 
	}

	this.travel = function() {
	 noStroke(); //this gives the eyes a color effect as well
     var x = rad * cos(theta);
  	 var y = rad * sin(theta);
 	 ellipse(x + width / 2, y + height / 2, 30, 30);
  	 theta = theta + 2;
  	 rad = rad + .5;
	}




}