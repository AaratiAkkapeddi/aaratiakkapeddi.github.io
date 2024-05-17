let distance
let word 
let two
let color
let shortArray
let headshort 
let headlong 
let heartshort 
let heartlong 
let lifelong 
let lifeshort 
let fateshort 
let fatelong 

function preload(){
lines = loadImage("./images/lines.png");
right = loadImage("./images/handright.png");
left = loadImage("./images/handleft.png");
}
function setup(){

createCanvas(windowWidth, windowHeight);
background(243,225,205.1);

// lines = loadImage("./images/lines.png");
// right = loadImage("./images/handright.png");
// left = loadImage("./images/handleft.png");

let heartShortArray= ["you fall in love easily", "you have less interest in romance", 
"you have a good handle on your emotions", "you may expirence sadness or depression",
 "you may face emotional trauma"]
 	heartshort = random(heartShortArray);

 let heartLongArray = ["you are content with your love life", 
 "you may be selfish when it comes to love",
 "your heart is broken easily", "you freely express your emotions and feelings", 
 "although you may have many relationships there is an absense of serious relationships in your life"]
 	heartlong = random(heartLongArray);


let colorArray= ["#F0D474", "#D68551", "#A5322A"];
	 color = random(colorArray);

fill(191,179,149.1);
	noStroke();
	rect(350, 25, 725, 675, 5, 5, 5, 5);
	noFill();
	stroke(191,179,149.1);
	rect(18, 18, 165, 275, 5, 5, 5, 5);

	image(lines, 26, 24, 164, 260);	
	image(right, 750, 85, 276.29, 546);
	image(left, 400, 85, 276.29, 546 );



}





function draw(){
	// image(lines, 26, 24, 164, 260);	
	// image(right, 750, 85, 276.29, 546);
	// image(left, 400, 85, 276.29, 546 );

	
	if (mouseIsPressed == true){
	fill (165,50,42.1);
	noStroke();
	ellipse(mouseX, mouseY, 1.5, 1.5, 165,50,42,1);
}
		
	
}


function mousePressed(){
	distance = [mouseX, mouseY];
}

function mouseReleased(){

	let length = dist(distance[0], distance[1], mouseX, mouseY);
	console.log(length);
	 if (length > 100){
	 	fill(color);
	 	noStroke();
	 	textFont("Georgia");
	 	text(heartlong, mouseX, mouseY);

	 	}else{
	 	fill(214,133,81.1);
	 	noStroke();
	 	textFont("Georgia");
	 	text(heartshort, mouseX, mouseY);

	 
	  }


	}

