function Circle(radius){
	//console.log(this);
	this.radius = radius;
	this.writerName = "Alex P";
}

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this.radius, 2);
};

//func();
var circle1 = new Circle(10);
console.log(circle1.getArea());