import View from '../base/View.js';
import Model from '../base/Model.js';
import Controller from '../base/Controller.js';

function topBar(){
    let view = document.querySelector('nav.topNavBar');
    let controller = {
        view: null,
        init: function(view){
            this.view = view;
            this.bindEvent()
        },
        bindEvent: function(){
            let liTags = this.view.querySelectorAll('ul > li');
            for(let i=0;i < liTags.length;i++){
                liTags[i].onmouseenter = (e)=>{
                    this.active(e.currentTarget);
                }
                liTags[i].onmouseleave = (e)=>{
                    this.deactive(e.currentTarget);
                }
            }
        },
        active: function(ele){
            ele.classList.add('active');
        },
        deactive: function(element){
            element.classList.remove('active');
        }
    }
    controller.init(view)
}

export default topBar;