var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var hue = document.getElementById('hue');
var ctxHue=hue.getContext("2d");
var saturation = document.getElementById('saturation');
var ctxSaturation = saturation.getContext("2d");
var lightness = document.getElementById('lightness');
var ctxLightness = lightness.getContext("2d");
var actions = document.getElementById('actions');
var eraser = document.getElementById('eraser');
var pen = document.getElementById('pen');
var showColor = document.getElementById('color');
var footer = document.getElementById('footer');
var setting = document.getElementById('setting');
var thickness = document.getElementById('thickness');
var selectThickness = document.getElementById('selectThickness');
var eraserEnabled = false;
var drawEnabled = true;
var hueFlag = false;
var saturationFlag = false;
var lightnessFlag = false;
var showThickness = true;
var showFooter = true;
var penColor = 'red';
var penWidth = '3';
/*用来存储HSL变化时的值,特别注意的是这里的50，因为从0开始，无论色相和饱和度怎么变化都是黑色，
能直观让人看到移动的效果是最好的，不然会以为是不是出错了，所以设置亮度50，能直观看到颜色变化*/
var HSL = {h:0,s:100,l:50};

autoSetCanvasSize(canvas);

initialCanvasColor();

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
showColor.onclick = function (){
    showFooter = !showFooter;
    if(showFooter){
        footer.classList.add('disappear');
        footer.classList.remove('show');
    }else{
        footer.classList.remove('disappear');
        footer.classList.add('show');
    }
}
thickness.onclick = function(){
    showThickness = !showThickness;
    if(showThickness){
        selectThickness.classList.add('disappear');
        selectThickness.classList.remove('show');
    }else{
        selectThickness.classList.remove('disappear');
        selectThickness.classList.add('show');
    }
}
selectThickness.addEventListener('click',function(e){
    var innerNumber = Number(e.target.innerText);
    penWidth = innerNumber;
    ctx.lineWidth = penWidth;
})


//以下为工具函数
function setCanvasSize(){
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;
    canvas.width = pageWidth;
    canvas.height = pageHeight;
    hue.width = pageWidth-80;
    saturation.width = pageWidth-80;
    lightness.width =  pageWidth-80;
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

function drawLine(x1,y1,x2,y2,penColor,penWidth){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineWidth = penWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = penColor;
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
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,penColor,penWidth);
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
                    drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,penColor,penWidth);
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
    var hueMove = document.getElementById('hueMove');
    var saturationMove = document.getElementById('saturationMove');
    var lightnessMove = document.getElementById('lightnessMove');
    var rightBorder = window.innerWidth - 50;
    if(document.body.ontouchstart !== undefined){
        hueMove.ontouchstart=function(e){
            hueFlag = true;
        }
        saturationMove.ontouchstart=function(e){
            saturationFlag = true;
        }
        lightnessMove.ontouchstart=function(e){
            lightnessFlag = true;
        }
        footer.addEventListener('touchmove',function(e){
            e.preventDefault();
            if(hueFlag && e.touches[0].clientX  > 30 && e.touches[0].clientX  < rightBorder){
                e.preventDefault();
                //条件成立则target是hueMove,clientX是hueMove距屏幕左边距离
                hueMove.style.left = e.touches[0].clientX + 'px';

                var hueDate=ctxHue.getImageData(Math.floor(e.touches[0].clientX)-30, 0, 1, 1);
                render(hueDate.data[0],hueDate.data[1],hueDate.data[2],hueDate.data[3]);

                HSL.h = Math.ceil((360 / (window.innerWidth-80)) * (e.touches[0].clientX - 30)); //30是圆形开始的偏移量，80是画布两端的margin;
                ChangeIconAndPencolor();
                console.log(hueDate);
                console.log(e);

            }else if(saturationFlag && e.touches[0].clientX  > 30 && e.touches[0].clientX  < rightBorder){
                e.preventDefault();
                saturationMove.style.left = e.touches[0].clientX  + 'px';

                HSL.s = 100 - Math.ceil((e.touches[0].clientX - 30) * 100 / (window.innerWidth-80)); 
                ChangeIconAndPencolor();
                console.log(e);
            }else if(lightnessFlag && e.touches[0].clientX  > 30 && e.touches[0].clientX  < rightBorder){
                e.preventDefault();
                lightnessMove.style.left = e.touches[0].clientX  + 'px';

                HSL.l = 100 - Math.ceil((e.touches[0].clientX - 30) * 100 / (window.innerWidth-80));
                ChangeIconAndPencolor();
                console.log(e);
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

            //防止移动时出现选中现象，导致圆形移动画布被选中变成蓝色
            e.preventDefault();
 
            if(hueFlag && e.clientX > 30 && e.clientX < rightBorder){

                //条件成立则target是hueMove,clientX是hueMove距屏幕左边距离
                hueMove.style.left = e.clientX + 'px';

                //减8是因为e.clientX是从8像素开始的（即圆心），而像素在画布上是从0开始的，所以要减30
                var hueDate=ctxHue.getImageData(Math.floor(e.clientX)-30, 0, 1, 1);
                render(hueDate.data[0],hueDate.data[1],hueDate.data[2],hueDate.data[3]);

                //根据色相计算H,使用Math.ceil()是因为为了getImageData()能够取到画布上最后一个像素的颜色，我把移动终点设置了（画布长度-1）处，所以百分比降低，需要用ceil（）向上取整
                HSL.h = Math.ceil((360 / (window.innerWidth-80)) * (e.clientX - 30)); //30是圆形开始的便宜量，80是画布两端的margin;
                ChangeIconAndPencolor()

            }else if(saturationFlag && e.clientX > 30 && e.clientX < rightBorder){

                saturationMove.style.left = e.clientX + 'px';

                //根据饱和度计算S，并实时改变画盘icon的颜色,100来减是因为滑动从左开始，而左边的饱和度为最大，所以用减号，让左边的值从100开始，而不是从零开始
                HSL.s = 100 - Math.ceil((e.clientX - 30) * 100 / (window.innerWidth-80)); 
                ChangeIconAndPencolor()
                
            }else if(lightnessFlag && e.clientX > 30 && e.clientX < rightBorder){

                lightnessMove.style.left = e.clientX + 'px';

                //根据亮度计算L,并实时改变画盘icon的颜色，笔触的颜色
                HSL.l = 100 - Math.ceil((e.clientX - 30) * 100 / (window.innerWidth-80));
                ChangeIconAndPencolor()
            }  
        });
        footer.addEventListener('mouseup',function(e){
            hueFlag = false;
            lightnessFlag = false;
            saturationFlag = false;
        });
    }
}

function initialCanvasColor(){
    //色相画布颜色
    var grd2 = ctxHue.createLinearGradient(0,0,window.innerWidth-80,0);
    grd2.addColorStop(0,"rgb(255,0,0)");
    grd2.addColorStop(1/6,"rgb(255,255,0)");
    grd2.addColorStop(2/6,"rgb(0,255,0)");
    grd2.addColorStop(3/6,"rgb(0,255,255)");
    grd2.addColorStop(4/6,"rgb(0,0,255)");
    grd2.addColorStop(5/6,"rgb(255,0,255)");
    grd2.addColorStop(1,"rgb(255,0,0)");
    ctxHue.fillStyle=grd2;
    ctxHue.fillRect(0,0,window.innerWidth-80,16);
    //饱和度画布颜色
    var grd3 = ctxSaturation.createLinearGradient(0,0,window.innerWidth-80,0);
    grd3.addColorStop(0,'rgba(255,0,0,1)');
    grd3.addColorStop(1,'rgba(255,255,255,1)');
    ctxSaturation.fillStyle=grd3;
    ctxSaturation.fillRect(0,0,window.innerWidth-80,16);
    //亮度画布颜色
    var grd4 = ctxLightness.createLinearGradient(0,0,window.innerWidth-80,0);
    grd4.addColorStop(0,'rgba(255,255,255,1)');
    grd4.addColorStop(1,'rgba(0,0,0,1)');
    ctxLightness.fillStyle=grd4;
    ctxLightness.fillRect(0,0,window.innerWidth-80,16);
}

//饱和度画布颜色随着色相变化而变化的渲染函数
function  render(r,g,b,a){
    var  grd1 = ctxSaturation.createLinearGradient(0,0,window.innerWidth-80,0);//水平渐变
    grd1.addColorStop(0,'rgba(' + r + ',' + g + ',' + b + ',' + a + ')');
    grd1.addColorStop(1,'rgba(255,255,255,1)');
    ctxSaturation.fillStyle=grd1;
    ctxSaturation.fillRect(0,0,window.innerWidth-80,16);
}

function ChangeIconAndPencolor(){
    //并实时改变画盘icon的颜色，笔触的颜色
    showColor.style.fill = 'hsl(' + HSL.h + ',' + HSL.s + '%,'+ HSL.l+'%)';
    penColor = 'hsl(' + HSL.h + ',' + HSL.s + '%,'+ HSL.l+'%)';
    ctx.strokeStyle = penColor;
}


