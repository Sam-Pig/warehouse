!function(){
    let view = View('nav.topNavBar');
    let model = null;
    let controller = Controller({
        aTags: null,
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element){
            let targetY = element.offsetTop - 80;
            let currentY = window.scrollY;
            var t = Math.abs(((targetY-currentY)/100)*300) // 时间
            if(t>500){ t = 500 }
            var coords = { x: 0, y: currentY }; 
            var tween = new TWEEN.Tween(coords) 
            .to({ x: 0, y: targetY }, t) 
            .easing(TWEEN.Easing.Cubic.InOut) 
            .onUpdate(function() { 
                window.scrollTo(0,coords.y);
            })
            .start();
        },
        bindEvents: function(){
            this.aTags = this.view.querySelectorAll('ul > li >a');
            for(let i=0;i < this.aTags.length;i++){
                this.aTags[i].onclick = (e)=>{
                    e.preventDefault();
                    let href = e.currentTarget.getAttribute('href');
                    let element = document.querySelector(href);
                    this.scrollToElement(element);
               }
            }
        },
        init: function(view,model){
            this.initAnimation();
        }
    })
    controller.init(view)
}.call()
