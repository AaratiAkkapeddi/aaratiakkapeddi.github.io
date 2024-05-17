
var r,g,b;

function setup(){
	let c = createCanvas(windowWidth, windowHeight);
	c.parent("canvas-wrapper");




// let color = map(hr,0,24,0,255);








}

function draw(){


let hr = hour();
console.log(hr);

if(6<hr&&hr<12){
	r = 255;
	g = 234;
	b = 164;

}else if(12<hr&&hr<16){
	r = 255;
	g = 255;
	b = 255;

}else if(16<hr&&hr<19){
	r = 255;
	g = 181;
	b = 71;
	
}else if(19<=hr&&hr<23){
	r = 75;
	g = 76;
	b = 132;
	
}else if(0<hr&&hr<5){
	r = 75;
	g = 76;
	b = 132;

}else if(5<hr&&hr<6){
	r = 157;
	g = 208;
	b = 228;

}

color="rgb("+r+","+g+","+b+")";

let rectangle = document.getElementById("rectangle");
rectangle.style.backgroundColor=color;




}


