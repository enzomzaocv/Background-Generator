
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hojastilo=document.getElementById("linkstyle");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor(){
	var colorR1= getRandomColor();
	var colorR2= getRandomColor();
	color1.value= colorR1;
	color2.value= colorR2;
	setGradient();
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.addEventListener("load", function(){setGradient();});

function toHex(){
	//function to convert rgb colors to hex color
}

function toRgb(){

}

function toHexalfa(){

}
function toRgbAlfa(){

}