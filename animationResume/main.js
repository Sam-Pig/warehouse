var result = `/*
*面试官你好，我是XXX
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/
*{
    transition: all 1s;
 }
 pre{
     height: 100vh;
     overflow: auto;
 }
 /*接下来我要给代码加一些高亮*/
 .token.selector{
     color: #690;
 }
 .token.punction{
     color: #999;
 }
 .token.function{
     color: #DD4A68;
 }
 .token.property{
    color: #905;
}
#code{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 50%;
}`;

var result2 = `
/*
接下来我需要准备一张白纸来介绍以下我自己*/
#selfIntroduction{
    position: fixed;
    right: 0px;
    top: 0px;
    width: 50%;
    background-color: #252526;
    height: 100vh;
    overflow: auto;
    color: #c5c5c5;
}
html{
    perspective: 1000px;
  }
#code{
    border: 1px solid white;
    transform-origin:0% 50%;
    -webkit-transform: rotateY(10deg);
}
`

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
text
`
let beautifyResume = `
/*给简历加点样式*/
#content h1{
    background-color: #3f3f46;
    margin: 20px 0px;
}
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */`
var styleTag = document.getElementById('styleTag');
writeCode('',result,()=>{
   createPaper(()=>{
       writeCode(result,result2,()=>{
           writeMarkdown(md,()=>{
            writeCode(result + result2,beautifyResume,()=>{
                console.log('完成！')
            })
           });
       });
   });
})

function createPaper(fp){
    var paper = document.createElement('div');
    paper.id = 'selfIntroduction';
    document.body.appendChild(paper)
    fp.call();
}

function writeCode(preCode,code,fn){
   let domCode = document.querySelector('#code');
   let n = 0;
   let time = setInterval(()=>{
      n = n + 1;
      domCode.innerHTML = Prism.highlight(preCode + code.substring(0,n) , Prism.languages.css);
      styleTag.innerHTML = preCode + code.substring(0,n);
      domCode.scrollTop = domCode.scrollHeight;
      if(n >= code.length){
          window.clearInterval(time);
          fn && fn.call()
      }
   },50)
}

function writeMarkdown(code,fn){
    var content = document.createElement('pre');
    content.id = 'content';
    document.querySelector('#selfIntroduction').appendChild(content)
    let n = 0;
    let time = setInterval(()=>{
        n = n + 1;
        content.innerHTML = marked(code.substring(0,n));
        domCode.scrollTop = domCode.scrollHeight;
        if(n >= code.length){
            window.clearInterval(time);
            fn && fn.call();
        }
     },50)
}

