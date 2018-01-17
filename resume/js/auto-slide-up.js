!function(){
    let siteWelcome = document.getElementById('siteWelcome');
    let disappear = document.getElementById('disappear');
    let topNavBar = document.getElementsByClassName('topNavBar')[0];
    
    window.onload=function(){
        siteWelcome.classList.add('disappear');
        disappear.classList.remove('disappear');
        findClosestElementToWindowTop();
        findElementExceedWindowBottom();
    }

    window.onscroll = function(){
        if(window.scrollY > 0){
            topNavBar.classList.add('sticky');
        }else{
            topNavBar.classList.remove('sticky');
        }
        
        findClosestElementToWindowTop();
    
        findElementExceedWindowBottom();
    }
}.call()

        
function findElementExceedWindowBottom(){
    let windowBottomY = document.documentElement.clientHeight + window.scrollY;
    let specialTags = document.querySelectorAll('[data-x]');
    let progressBar = document.querySelectorAll('.progressBar');
    for(let i =0;i<specialTags.length; i++){
        var elementY = specialTags[i].offsetTop;
        if((elementY - windowBottomY) < 0){
            specialTags[i].classList.remove('offset');
        }else{
            specialTags[i].classList.add('offset');
        }
    }
  
    for(let j =0;j<progressBar.length; j++){
        //不用offsetTop是因为，元素的offsetParent是section.skills，而不是<body>
        var progressBarY = progressBar[j].getBoundingClientRect().top + document.documentElement.scrollTop;
        
        if((progressBarY - windowBottomY) < 0){
            progressBar[j].classList.remove('contraction');
        }else{
            progressBar[j].classList.add('contraction');
        }
    }
}

function findClosestElementToWindowTop(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i =1;i<specialTags.length; i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        //存储最近元素的下标
        minIndex = i
      }
    }
    // minIndex 就是里窗口顶部最近的元素
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id + '"]')
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;
    for(let i=0; i<brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}