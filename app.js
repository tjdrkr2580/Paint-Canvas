const canvas = document.getElementById("jsCanvas");

function onMounseEnter(event) {
    const x = event.offsetX;
    const y = event.offsetY
}


if(canvas) {
    canvas.addEventListener("mousemove",onMounseEnter);
}