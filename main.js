var mouseEvent = "empty";
var lastPositionX,lastPositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "green";
widthLine = 1;

canvas.addEventListener("mousedown",myMouseDown)

function myMouseDown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove",myMouseMove)
function myMouseMove(e){
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.moveTo(lastPositionX,lastPositionY)
        ctx.lineTo(PositionMouseX,PositionMouseY)
        ctx.stroke()
    }

    lastPositionX = PositionMouseX
    lastPositionY = PositionMouseY
}
canvas.addEventListener("mouseup",myMouseUp)
function myMouseUp(e){
    mouseEvent = "mouseUP"
}
canvas.addEventListener("mouseleave",myMouseLeave)
function myMouseLeave(e){
    mouseEvent = "mouseleave"
}