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

drawGrid();

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
let strokeColor = 'black';
let fillColor = 'red';

x = 0;
y = 0;

const stars = [];

renderStars();

function renderStars()
{
  for (let i = 0; i < 100; i++)
  {
    if (i % 2 == 0)
    {
      stars.push(new Star(-1, -1, starSize, strokeColor, fillColor, ctx));
    }
    else
    {
      stars.push(null);
    }
  }
  console.log(stars);
}