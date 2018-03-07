import View from '../base/View.js';
import Model from '../base/Model.js';
import Controller from '../base/Controller.js';

function portfolioTranslation(){
    let view = document.querySelector('.portfolioNav');
    let modle = {
        previousClass: 'all'
    }
    let controller = function(view){
      $(view).on("click",'li', function(e){
          $(e.currentTarget).addClass('active').siblings().removeClass('active');
          var imgIndex = $(e.currentTarget).index();
          console.log($(e.currentTarget))
          console.log(e.currentTarget)
          console.log(imgIndex)
          var moveDistance = imgIndex * 800;
          console.log(moveDistance)
          $('.jobsInner').css({transform: 'translate(-' + moveDistance + 'px)'});
        })
    }
    controller(view)
}

export default portfolioTranslation;


