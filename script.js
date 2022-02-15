const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const boxWidth = canvas.width / 11;
const boxHeight = canvas.height / 9;

function drawGrid() {
ctx.beginPath();
for (let x = 0; x < canvas.width; x+=boxWidth) {
ctx.moveTo(x, 0);
ctx.lineTo(x, canvas.height);
ctx.stroke();
}
for (let y = 0; y < canvas.height; y+=boxHeight) {
ctx.moveTo(0, y);
ctx.lineTo(canvas.width, y);
ctx.stroke();
}
}

//drawGrid();

function getColor()
{
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g}, ${b})`;
}

class Star {
constructor(x, y, size, strokeColor, fillColor, context) {
this.canvasX = x;
this.canvasY = y;
this.width = size;
this.height = size;
this.strokeColor = strokeColor;
this.fillColor = fillColor;
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

let starSize = canvas.width / 11;

x = 0;
y = 0;


// row 1
let star_00 = new Star(0, 0, starSize, getColor(), getColor(), ctx);
star_00.draw();

x += (boxWidth * 2);
let star_02 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_02.draw();

x += (boxWidth * 2);
let star_04 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_04.draw();

x += (boxWidth * 2);
let star_06 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_06.draw();

x += (boxWidth * 2);
let star_08 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_08.draw();

x += (boxWidth * 2);
let star_010 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_010.draw();

// row 2
x = boxWidth;
y = boxHeight;

let star_11 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_11.draw();

x += (boxWidth * 2);
let star_13 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_13.draw();

x += (boxWidth * 2);
let star_15 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_15.draw();

x += (boxWidth * 2);
let star_17 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_17.draw();

x += (boxWidth * 2);
let star_19 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_19.draw();

// row 3
x = 0;
y += boxHeight;

let star_20 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_20.draw();

x += (boxWidth * 2);
let star_22 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_22.draw();

x += (boxWidth * 2);
let star_24 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_24.draw();

x += (boxWidth * 2);
let star_26 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_26.draw();

x += (boxWidth * 2);
let star_28 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_28.draw();

x += (boxWidth * 2);
let star_210 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_210.draw();

// row 4
x = boxWidth;
y += boxHeight;

let star_31 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_31.draw();

x += (boxWidth * 2);
let star_33 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_33.draw();

x += (boxWidth * 2);
let star_35 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_35.draw();

x += (boxWidth * 2);
let star_37 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_37.draw();

x += (boxWidth * 2);
let star_39 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_39.draw();

// row 5
x = 0;
y += boxHeight;

let star_40 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_40.draw();

x += (boxWidth * 2);
let star_42 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_42.draw();

x += (boxWidth * 2);
let star_44 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_44.draw();

x += (boxWidth * 2);
let star_46 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_46.draw();

x += (boxWidth * 2);
let star_48 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_48.draw();

x += (boxWidth * 2);
let star_410 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_410.draw();

// row 6
x = boxWidth;
y += boxHeight;

let star_51 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_51.draw();

x += (boxWidth * 2);
let star_53 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_53.draw();

x += (boxWidth * 2);
let star_55 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_55.draw();

x += (boxWidth * 2);
let star_57 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_57.draw();

x += (boxWidth * 2);
let star_59 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_59.draw();

// row 7
x = 0;
y += boxHeight;

let star_60 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_60.draw();

x += (boxWidth * 2);
let star_62 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_62.draw();

x += (boxWidth * 2);
let star_64 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_64.draw();

x += (boxWidth * 2);
let star_66 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_66.draw();

x += (boxWidth * 2);
let star_68 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_68.draw();

x += (boxWidth * 2);
let star_610 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_610.draw();

// row 8
x = boxWidth;
y += boxHeight;

let star_71 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_71.draw();

x += (boxWidth * 2);
let star_73 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_73.draw();

x += (boxWidth * 2);
let star_75 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_75.draw();

x += (boxWidth * 2);
let star_77 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_77.draw();

x += (boxWidth * 2);
let star_79 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_79.draw();

// row 9
x = 0;
y += boxHeight;

let star_80 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_80.draw();

x += (boxWidth * 2);
let star_82 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_82.draw();

x += (boxWidth * 2);
let star_84 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_84.draw();

x += (boxWidth * 2);
let star_86 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_86.draw();

x += (boxWidth * 2);
let star_88 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_88.draw();

x += (boxWidth * 2);
let star_810 = new Star(x, y, starSize, getColor(), getColor(), ctx);
star_810.draw();