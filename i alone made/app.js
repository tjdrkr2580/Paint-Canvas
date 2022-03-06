const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("controls__color");
const range = document.getElementById("jsRange");
const fill = document.getElementById("jsFill");
const save = document.getElementById("jsSave");
const eraser = document.getElementById("jsEraser");
const closebtn = document.querySelectorAll(".menu__color:last-child");


canvas.width = 700;
canvas.height = 800;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";

let erazermode = false;
let filling = false;
let painting = false;

function paintingOn() {
    painting = true;
}

function paintingOff(){
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function colorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function rangeChange(event){
    const line = event.target.value;
    ctx.lineWidth = line;
}


function canvasCilck() {
    if(filling === true){
    ctx.fillRect(0,0,700,800);
}
}


function btnCilck() {
    if(filling === true){
        filling = false;
        fill.innerText = "Fill";
    } else {
        filling = true;
        fill.innerText = "Paint";
    }
}


function handleCM(event) {
    event.preventDefault();
}


function saveClick() {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "MyBeautifulPicture";
    link.click();
}

function clickEraser(event){
   ctx.fillStyle = "white";
   ctx.fillRect(0,0,700,800);
}

function clickCloseBtn(){
    window.close();
}


if(canvas) {
    canvas.addEventListener("mousemove" , onMouseMove)
    canvas.addEventListener("mouseleave" , paintingOff)
    canvas.addEventListener("mousedown" , paintingOn)
    canvas.addEventListener("mouseup" , paintingOff);
    canvas.addEventListener("click" , canvasCilck)
    canvas.addEventListener("contextmenu" , handleCM);
}

if(range) {
    range.addEventListener("input" , rangeChange);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click" , colorClick)    
);


if(fill) {
    fill.addEventListener("click" , btnCilck);
}

if(save) {
    save.addEventListener("click",saveClick)
}

if(eraser) {
    eraser.addEventListener("click" , clickEraser);
}

if(closebtn) {
    closebtn.addEventListener("click" , canvasCilck);
}

