import AutoSlideUp from './js/auto-slide-up.js';
import topBar from './js/topBar.js';
import Navigation from './js/smoothly-navgation.js';
import portfolioTranslation from './js/portfolio-translation.js';
import Message from './js/message.js';
import  './css/main.scss';
import tableImage from './images/todo.jpg';
import watchImage from './images/canvas.jpg';
import computeImage from './images/music.jpg';
import avatar from './images/colorPicker.jpg';
import canvas from './images/pikachu.jpg';
import resumeCover from './images/rs-cover.jpg';




!function(){
    AutoSlideUp();
    topBar();
    Navigation();
    portfolioTranslation();
    Message();
}.call()