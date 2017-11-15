var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var actions = document.getElementById('actions');
var eraser = document.getElementById('eraser');
var pen = document.getElementById('pen');

autoSetCanvasSize(canvas);

listenToMouse(canvas);

var eraserEnabled = false;
eraser.onclick = function(){
    eraserEnabled =true;
    actions.className = 'showPen';
}
pen.onclick = function(){
    eraserEnabled =false;
    actions.className = 'showEraser';
}

function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight; 
}
function autoSetCanvasSize(canvas){
    setCanvasSize();
    window.onresize = function(){
        setCanvasSize();
    }
}

function drawCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill();
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineWidth = 5;
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
function listenToMouse(canvas){
    var using = false;
    var lastPoint = {x:undefined,y:undefined};

    canvas.onmousedown = function(a){
        using = true;
        var x = a.clientX;
        var y = a.clientY;
    
        if(eraserEnabled){
            ctx.clearRect(x-2, y-2, 4, 4);
        }else{
            lastPoint={x:x,y:y};
        }
    }
    canvas.onmousemove = function(a){
        var x = a.clientX;
        var y = a.clientY;
        if(using){
            if(eraserEnabled){
                ctx.clearRect(x-2, y-2, 4, 4);    
            }else{
                var newPoint = {x:x,y:y};
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                lastPoint = newPoint;
            }
        }
    }
    canvas.onmouseup = function(a){
        using = false;
    }
}


