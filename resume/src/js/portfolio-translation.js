import View from '../base/View.js';
import Model from '../base/Model.js';
import Controller from '../base/Controller.js';

function portfolioTranslation(){
    let view = document.querySelector('.portfolio');
    let controller = function(view){
        let portfolio1 = view.querySelector('#portfolio1');
        let portfolio2 = view.querySelector('#portfolio2');
        let portfolio3 = view.querySelector('#portfolio3');
        let small_2_picture = view.querySelector('#small_2_picture');
        let big_1_picture = view.querySelector('#big_1_picture');
        let portfolioBar = view.querySelector('#portfolioBar');
        let small_1 = view.querySelector('#small_1');
        let small_2 = view.querySelector('#small_2');
        
        portfolio1.onclick= function(){
            portfolioBar.className = 'bar state-1';
            small_2_picture.className = '';
            big_1_picture.className = '';
            small_1.className = '';
            small_2.className = '';
          }
        portfolio2.onclick= function(){
          portfolioBar.className = 'bar state-2';
          small_2_picture.className = 'small_2_picture_2';
          big_1_picture.className = '';
          small_1.className = '';
          small_2.className = '';
        }
        portfolio3.onclick= function(){
          portfolioBar.className = 'bar state-3';
          small_2_picture.className = '';
          big_1_picture.className = 'big_1_picture_1';
          small_1.className = 'small-1';
          small_2.className = 'small-2';
        }
    }
    controller(view)
}

export default portfolioTranslation;


