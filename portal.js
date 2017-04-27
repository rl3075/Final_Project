
function Portal(color, xpos, ypos, width, height) { //creates the two portals, passing 
//var rad = 10;
//var theta = 0;
//scribble.bowing = 0;	
//passing variables into their class
	this.display = function() {
	strokeWeight(7);
	stroke(color);
	fill(0);
   	scribble.scribbleEllipse(xpos, ypos, width, height);
   	//image(img4, 975, 550, 100, 75); //for sale sign 
	}

	this.travelf = function() {
	background('#619BF2');
	 for (r = 0; r < 1000; r = r + .5) { //I used a for loop to create a spiral
     noStroke(); //at first I just a normal loop but it would create the spiral slowly
     var x = r * cos(theta); //after experimenting I was able to exuecute a solid spinning spiral
     var y = r * sin(theta);
     fill('#C79BF2'); //I used the Learning Procc. book to figure this out 
     ellipse(x + 700, y + 400, 25, 25);
     theta = theta + 50;
     }
	} 

    this.travelb = function() {
	background('#C79BF2');
	 for (r = 0; r < 1000; r = r + .5) { //I used a for loop to create a spiral
     noStroke(); //at first I just a normal loop but it would create the spiral slowly
     var x = r * cos(theta); //after experimenting I was able to exuecute a solid spinning spiral
     var y = r * sin(theta);
     fill('#619BF2'); //I used the Learning Procc. book to figure this out 
     ellipse(x + 700, y + 400, 35, 35);
     theta = theta + 1000;

     }
	} 


}