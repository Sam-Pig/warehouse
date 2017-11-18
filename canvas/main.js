var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var actions = document.getElementById('actions');
var eraser = document.getElementById('eraser');
var pen = document.getElementById('pen');
var hue = document.getElementById('hue');
var ctxHue=hue.getContext("2d");
var saturation = document.getElementById('saturation');
var ctxSaturation = saturation.getContext("2d");
var hueMove = document.getElementById('hueMove');
var saturationMove = document.getElementById('saturationMove');
var lightnessMove = document.getElementById('lightnessMove');
var footer = document.getElementById('footer');
var eraserEnabled = false;
var drawEnabled = true;
var hueFlag = false;
var saturationFlag = false;
var lightnessFlag = false;

autoSetCanvasSize(canvas);

huePick();

colorListenToMouse();

drawListenToMouse(canvas);


eraser.onclick = function(){
    eraserEnabled =true;
    drawEnabled = false;
    eraser.classList.add('active');
    pen.classList.remove('active');
    clear.classList.remove('active');
    download.classList.remove('active');
}
pen.onclick = function(){
    eraserEnabled =false;
    drawEnabled = true;
    pen.classList.add('active');
    eraser.classList.remove('active');
    clear.classList.remove('active');
    download.classList.remove('active');
}
clear.onclick = function(){
    eraserEnabled =false;
    drawEnabled = false;
    clear.classList.add('active');
    eraser.classList.remove('active');
    pen.classList.remove('active');
    download.classList.remove('active');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
download.onclick = function(){
    eraserEnabled =false;
    drawEnabled = false;
    download.classList.add('active');
    eraser.classList.remove('active');
    pen.classList.remove('active');
    clear.classList.remove('active');
    var url = canvas.toDataURL("image/png");
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    var today= new Date();
    var month=today.getMonth() + 1
    a.download = 'myPicture'+today.getFullYear()+month+today.getDate()+today.getHours()+today.getMinutes()+today.getSeconds();
    a.click();
}



//以下为工具函数
function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    hue.width = pageWidth-30;
    saturation.width = pageWidth-30;

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

function drawListenToMouse(canvas){
    var using = false;
    var lastPoint = {x:undefined,y:undefined};
    
    if(document.body.ontouchstart !== undefined){
        //mobile phone
        canvas.ontouchstart = function(a){
            using = true;
            var x = a.touches[0].clientX;
            var y = a.touches[0].clientY;
        
            if(eraserEnabled){
                ctx.clearRect(x-2, y-2, 10, 10);
            }else{
                lastPoint={x:x,y:y};
            }
        }
        canvas.ontouchmove = function(a){
            var x = a.touches[0].clientX;
            var y = a.touches[0].clientY;
            if(using){
                if(eraserEnabled){
                    ctx.clearRect(x-2, y-2, 5, 5);    
                }else if(drawEnabled){
                    var newPoint = {x:x,y:y};
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y);
                    lastPoint = newPoint;
                }
            }
        }
        canvas.ontouchend = function(a){
            using = false;
        }
    }else{
        //pc
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
                }else if(drawEnabled){
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
}

function colorListenToMouse(){
    var rightBorder = window.innerWidth - 21;
    if(document.body.ontouchstart !== undefined){
        hueMove.ontouchstart=function(e){
            hueFlag=true;
        }
        saturationMove.ontouchstart=function(e){
            saturationFlag=true;
        }
        lightnessMove.ontouchstart=function(e){
            lightnessFlag=true;
        }
        footer.addEventListener('touchmove',function(e){
            if(hueFlag && e.touches[0].clientX  > 7 && e.touches[0].clientX  < rightBorder){
                //条件成立则target是hueMove,clientX是hueMove距屏幕左边距离
                hueMove.style.left = e.touches[0].clientX + 'px'; 
                console.log(e.touches[0].clientX);
            }else if(saturationFlag && e.touches[0].clientX  > 7 && e.touches[0].clientX  < rightBorder){
                saturationMove.style.left = e.touches[0].clientX  + 'px';
                console.log(e.touches[0].clientX);
            }else if(lightnessFlag && e.touches[0].clientX  > 7 && e.touches[0].clientX  < rightBorder){
                lightnessMove.style.left = e.touches[0].clientX  + 'px';
            }
        });
        footer.addEventListener('touchend',function(e){
            hueFlag = false;
            lightnessFlag = false;
            saturationFlag = false;
        });
    }else{
        hueMove.onmousedown=function(e){
            hueFlag=true;
        }
        saturationMove.onmousedown=function(e){
            saturationFlag=true;
        }
        lightnessMove.onmousedown=function(e){
            lightnessFlag=true;
        }
        footer.addEventListener('mousemove',function(e){
            e.preventDefault();
            if(hueFlag && e.clientX > 7 && e.clientX < rightBorder){
                //条件成立则target是hueMove,clientX是hueMove距屏幕左边距离
                hueMove.style.left = e.clientX + 'px';
                var hueDate=ctxHue.getImageData(Math.floor(e.clientX), 0, 1, 1);
                console.log(hueDate);
                render(hueDate.data[0],hueDate.data[1],hueDate.data[2],hueDate.data[3]);
            }else if(saturationFlag && e.clientX > 7 && e.clientX < rightBorder){
                saturationMove.style.left = e.clientX + 'px';
            }else if(lightnessFlag && e.clientX > 7 && e.clientX < rightBorder){
                lightnessMove.style.left = e.clientX + 'px';
            }
        });
        footer.addEventListener('mouseup',function(e){
            hueFlag = false;
            lightnessFlag = false;
            saturationFlag = false;
        });
    }
}

function  render(r,g,b,a){
    var  grd1 = ctxSaturation.createLinearGradient(0,0,window.innerWidth-30,0);//水平渐变
    grd1.addColorStop(0,'rgba(' + r + ',' + g + ',' + b + ',' + a + ')');
    grd1.addColorStop(1,'rgba(0,0,0,1)');
    ctxSaturation.fillStyle=grd1;
    ctxSaturation.fillRect(0,0,window.innerWidth-30,10);
}

function huePick(){
    var grd2 = ctxHue.createLinearGradient(0,0,window.innerWidth-30,0);
    grd2.addColorStop(0,"rgb(255,0,0)");
    grd2.addColorStop(1/6,"rgb(255,255,0)");
    grd2.addColorStop(2/6,"rgb(0,255,0)");
    grd2.addColorStop(3/6,"rgb(0,255,255)");
    grd2.addColorStop(4/6,"rgb(0,0,255)");
    grd2.addColorStop(5/6,"rgb(255,0,255)");
    grd2.addColorStop(1,"rgb(255,0,0)");
    ctxHue.fillStyle=grd2;
    ctxHue.fillRect(0,0,window.innerWidth-30,10);
}
function saturationPick(color){
    var ctxSaturation=saturation.getContext("2d");
    var grd1 = ctxSaturation.createLinearGradient(0,0,300,0);
}

