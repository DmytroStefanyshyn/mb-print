var arr = '0123456789abcdef';
var paragraphs = document.getElementsByTagName('p');
function getRandom(){
	random = Math.floor(Math.random() * 15) + 1;
	return random;
} 
var color = '';
var prevColor = color;
function getColor(){
	color = '';
	for (var i = 0; i<6; i++){
		var index = getRandom();
		color += arr[index];
	}
	color = '#' + color;
	return color;
	prevColor = color;

}
for (var i = paragraphs.length -1; i>=0; i--) {
	var Color = getColor();
	var BgColor = getColor();
	var Element;
	var nextColor;
	var nextBgColor;
	paragraphs[i].onclick = function() {
		Element = this;
		nextColor = this.style.color;
		nextBgColor = this.backgroundColor;
		paragraphs[i].onclick = function() {
		console.log(this.style.color);
		Element.style.color = this.style.color;
		Element.style.backgroundColor = this.style.backgroundColor;	
		this.style.color = nextColor;
		this.style.backgroundColor = nextBgColor;
		
	}
	}

	paragraphs[i].style.color = getColor();
	paragraphs[i].style.backgroundColor = getColor();
}
