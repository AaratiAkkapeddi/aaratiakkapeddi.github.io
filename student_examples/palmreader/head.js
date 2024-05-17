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



let headShortArray = [ "you live life with a traditional approach", "you may face mental strife", 
"monumental epiphanies are in your future", "you prefer physical achievements over mental ones",
"you think realistically", " you expirence inconsistencies in thought" ];
	 headshort = random(headShortArray);

let headLongArray = ["you are a progressive thinker", "you think creatively", 
"you are adventurous, and have an enthusiasm for life", "you may have a short attention span",
"your thinking is clear and focused"];
	headlong = random(headLongArray);


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
	 	text(headlong, mouseX, mouseY);

	 	}else{
	 	fill(214,133,81.1);
	 	noStroke();
	 	textFont("Georgia");
	 	text(headshort, mouseX, mouseY);

	 
	  }


	}