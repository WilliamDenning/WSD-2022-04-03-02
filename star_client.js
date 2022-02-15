const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const boxWidth = canvas.width / 11;
const boxHeight = canvas.height / 9;

ctx.fillStyle = "#0A3161"
ctx.fillRect(0, 0, canvas.width, canvas.height);

//drawGrid();

let starSize = canvas.width / 11;

x = 0;
y = 0;


// row 1
let star_00 = new Star(0, 0, starSize, ctx);
star_00.draw();

x += (boxWidth * 2);
let star_02 = new Star(x, y, starSize, ctx);
star_02.draw();

x += (boxWidth * 2);
let star_04 = new Star(x, y, starSize, ctx);
star_04.draw();

x += (boxWidth * 2);
let star_06 = new Star(x, y, starSize, ctx);
star_06.draw();

x += (boxWidth * 2);
let star_08 = new Star(x, y, starSize, ctx);
star_08.draw();

x += (boxWidth * 2);
let star_010 = new Star(x, y, starSize, ctx);
star_010.draw();

// row 2
x = boxWidth;
y = boxHeight;

let star_11 = new Star(x, y, starSize, ctx);
star_11.draw();

x += (boxWidth * 2);
let star_13 = new Star(x, y, starSize, ctx);
star_13.draw();

x += (boxWidth * 2);
let star_15 = new Star(x, y, starSize, ctx);
star_15.draw();

x += (boxWidth * 2);
let star_17 = new Star(x, y, starSize, ctx);
star_17.draw();

x += (boxWidth * 2);
let star_19 = new Star(x, y, starSize, ctx);
star_19.draw();

// row 3
x = 0;
y += boxHeight;

let star_20 = new Star(x, y, starSize, ctx);
star_20.draw();

x += (boxWidth * 2);
let star_22 = new Star(x, y, starSize, ctx);
star_22.draw();

x += (boxWidth * 2);
let star_24 = new Star(x, y, starSize, ctx);
star_24.draw();

x += (boxWidth * 2);
let star_26 = new Star(x, y, starSize, ctx);
star_26.draw();

x += (boxWidth * 2);
let star_28 = new Star(x, y, starSize, ctx);
star_28.draw();

x += (boxWidth * 2);
let star_210 = new Star(x, y, starSize, ctx);
star_210.draw();

// row 4
x = boxWidth;
y += boxHeight;

let star_31 = new Star(x, y, starSize, ctx);
star_31.draw();

x += (boxWidth * 2);
let star_33 = new Star(x, y, starSize, ctx);
star_33.draw();

x += (boxWidth * 2);
let star_35 = new Star(x, y, starSize, ctx);
star_35.draw();

x += (boxWidth * 2);
let star_37 = new Star(x, y, starSize, ctx);
star_37.draw();

x += (boxWidth * 2);
let star_39 = new Star(x, y, starSize, ctx);
star_39.draw();

// row 5
x = 0;
y += boxHeight;

let star_40 = new Star(x, y, starSize, ctx);
star_40.draw();

x += (boxWidth * 2);
let star_42 = new Star(x, y, starSize, ctx);
star_42.draw();

x += (boxWidth * 2);
let star_44 = new Star(x, y, starSize, ctx);
star_44.draw();

x += (boxWidth * 2);
let star_46 = new Star(x, y, starSize, ctx);
star_46.draw();

x += (boxWidth * 2);
let star_48 = new Star(x, y, starSize, ctx);
star_48.draw();

x += (boxWidth * 2);
let star_410 = new Star(x, y, starSize, ctx);
star_410.draw();

// row 6
x = boxWidth;
y += boxHeight;

let star_51 = new Star(x, y, starSize, ctx);
star_51.draw();

x += (boxWidth * 2);
let star_53 = new Star(x, y, starSize, ctx);
star_53.draw();

x += (boxWidth * 2);
let star_55 = new Star(x, y, starSize, ctx);
star_55.draw();

x += (boxWidth * 2);
let star_57 = new Star(x, y, starSize, ctx);
star_57.draw();

x += (boxWidth * 2);
let star_59 = new Star(x, y, starSize, ctx);
star_59.draw();

// row 7
x = 0;
y += boxHeight;

let star_60 = new Star(x, y, starSize, ctx);
star_60.draw();

x += (boxWidth * 2);
let star_62 = new Star(x, y, starSize, ctx);
star_62.draw();

x += (boxWidth * 2);
let star_64 = new Star(x, y, starSize, ctx);
star_64.draw();

x += (boxWidth * 2);
let star_66 = new Star(x, y, starSize, ctx);
star_66.draw();

x += (boxWidth * 2);
let star_68 = new Star(x, y, starSize, ctx);
star_68.draw();

x += (boxWidth * 2);
let star_610 = new Star(x, y, starSize, ctx);
star_610.draw();

// row 8
x = boxWidth;
y += boxHeight;

let star_71 = new Star(x, y, starSize, ctx);
star_71.draw();

x += (boxWidth * 2);
let star_73 = new Star(x, y, starSize, ctx);
star_73.draw();

x += (boxWidth * 2);
let star_75 = new Star(x, y, starSize, ctx);
star_75.draw();

x += (boxWidth * 2);
let star_77 = new Star(x, y, starSize, ctx);
star_77.draw();

x += (boxWidth * 2);
let star_79 = new Star(x, y, starSize, ctx);
star_79.draw();

// row 9
x = 0;
y += boxHeight;

let star_80 = new Star(x, y, starSize, ctx);
star_80.draw();

x += (boxWidth * 2);
let star_82 = new Star(x, y, starSize, ctx);
star_82.draw();

x += (boxWidth * 2);
let star_84 = new Star(x, y, starSize, ctx);
star_84.draw();

x += (boxWidth * 2);
let star_86 = new Star(x, y, starSize, ctx);
star_86.draw();

x += (boxWidth * 2);
let star_88 = new Star(x, y, starSize, ctx);
star_88.draw();

x += (boxWidth * 2);
let star_810 = new Star(x, y, starSize, ctx);
star_810.draw();