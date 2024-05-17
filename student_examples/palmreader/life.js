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
let bg

function preload(){
lines = loadImage("./images/lines.png");
right = loadImage("./images/handright.png");
left = loadImage("./images/handleft.png");
}

function setup(){
createCanvas(windowWidth, windowHeight);
background(243,225,205.1);




let lifeLongArray = ["you have plenty of energy", "you will have great vitality in your life",
 "your life has a great deal of strength and enthusiasm", "you may be cautious when it comes to relationships",
 "your life will have a gread deal of vitality"];
 	lifelong = random(lifeLongArray);

 let lifeShortArray = ["you may be often tired", "you may be easily manipulated by others",
 "you may be hospitalized or injured within your lifetime", "you may face a sudden change in lifestyle"];
 	lifeshort = random(lifeShortArray);


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
	 	text(lifelong, mouseX, mouseY);

	 	}else{
	 	fill(214,133,81.1);
	 	noStroke();
	 	textFont("Georgia");
	 	text(lifeshort, mouseX, mouseY);

	 
	  }


	}

