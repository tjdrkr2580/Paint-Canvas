const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){

}

function stopPainting() {
    painting = "false";
}

function onMounseEnter(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}


if(canvas) {
    canvas.addEventListener("mousemove",onMounseEnter);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup" , stopPainting);
    canvas.addEventListener("mouseleave" , stopPainting)
}
