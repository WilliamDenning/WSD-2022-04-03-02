class Star {
constructor(x, y, size, context) {
this.canvasX = x;
this.canvasY = y;
this.width = size;
this.height = size;
this.strokeColor = 'black';
this.fillColor = 'white';
this.context = context;
this.path = new Path2D();
}
draw() {
let x = 0;
let y = 0;
let pathX = this.canvasX + (this.width / 2);

x = pathX;
y = this.canvasY;
this.path.moveTo(x, y);

// line 1
x = pathX + (this.width * 0.15);
y = this.canvasY + (this.height * 0.33);
this.path.lineTo(x, y);

// line 2
x = pathX + (this.width * 0.50);
y = this.canvasY + (this.height * 0.38);
this.path.lineTo(x, y);

// line 3
x = pathX + (this.width * 0.25);
y = this.canvasY + (this.height * 0.64);
this.path.lineTo(x, y);

// line 4
x = pathX + (this.width * 0.31);
y = this.canvasY + (this.height * 1.00);
this.path.lineTo(x, y);

// line 5
x = pathX;
y = this.canvasY + (this.height * 0.83);
this.path.lineTo(x, y);

// line 6
x = pathX - (this.width * 0.31);
y = this.canvasY + (this.height * 1.00);
this.path.lineTo(x, y);

// line 7
x = pathX - (this.width * 0.25);
y = this.canvasY + (this.height * 0.64);
this.path.lineTo(x, y);

// line 8
x = this.canvasX;
y = this.canvasY + (this.height * 0.38);
this.path.lineTo(x, y);

// line 9
x = pathX - (this.width * 0.15);
y = this.canvasY + (this.height * 0.33);
this.path.lineTo(x, y);

// line 10
x = pathX;
y = this.canvasY;
this.path.lineTo(x, y);

this.context.fillStyle = this.fillColor;
this.context.fill(this.path);
this.context.strokeStyle = this.strokeColor;
this.context.stroke(this.path);
}
}