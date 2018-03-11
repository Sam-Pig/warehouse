import  './index.scss';
import tableImage from './images/todo.jpg';
import watchImage from './images/canvas.jpg';
import computeImage from './images/music.jpg';
import avatar from './images/colorPicker.jpg';
import canvas from './images/pikachu.jpg';
import resumeCover from './images/rs-cover.jpg';
import logo from './images/logo.png';


//在手机设备上的菜单点击
var menu_flag_xs=false;
var introduction_top=$('#introduction').offset().top;
var works_top=$('#works').offset().top;
var form_top=$('#form').offset().top;
var scroll_start;
var scroll_end;

function blurryMove(){
    if(scroll_end-scroll_start>0){
        scroll_start=scroll_start + (scroll_end - scroll_start)/10;
        $('html,body').scrollTop(scroll_start);
        if (scroll_end - scroll_start < 1) {
            $('html,body').scrollTop(scroll_end);
            return;
        }
        requestAnimationFrame(blurryMove);
    }else{
        scroll_start=scroll_start + (scroll_end - scroll_start)/10;
        $('html,body').scrollTop(scroll_start);
        if (scroll_start - scroll_end < 1) {
            $('html,body').scrollTop(scroll_end);
            return;
        }
        requestAnimationFrame(blurryMove);
    }
}

$('#icon_menu').click(function(){
    menu_flag_xs=!menu_flag_xs;
    if(menu_flag_xs){

        $("#dropmenu").css("height",'116px');
        
        $("#port").click(function(){
            $("#port").addClass('checked');
            $('#about').removeClass('checked');
            $('#contact').removeClass('checked');
            scroll_start=$('html,body').scrollTop();
            scroll_end=works_top;
            blurryMove();
        })

        $("#about").click(function(){
            $("#about").addClass('checked');
            $('#port').removeClass('checked');
            $('#contact').removeClass('checked');
            scroll_start=$('html,body').scrollTop();
            scroll_end=introduction_top;
            blurryMove();
        })

        $("#contact").click(function(){
            $("#contact").addClass('checked');
            $('#about').removeClass('checked');
            $('#port').removeClass('checked');
            scroll_start=$('html,body').scrollTop();
            scroll_end=form_top;
            blurryMove();
        })

    }else{       
        $("#dropmenu").css("height",'0px');
    }
});


//在电脑上的菜单点击
$("#port_not_xs").click(function(){
    $("#port_not_xs").addClass('checked');
    $('#about_not_xs').removeClass('checked');
    $('#contact_not_xs').removeClass('checked');
    scroll_start=$('html,body').scrollTop();
    scroll_end=works_top;
    blurryMove();
})
$("#about_not_xs").click(function(){
    $("#about_not_xs").addClass('checked');
    $('#port_not_xs').removeClass('checked');
    $('#contact_not_xs').removeClass('checked');
    scroll_start=$('html,body').scrollTop();
    scroll_end=introduction_top;
    blurryMove();
})
$("#contact_not_xs").click(function(){
    $("#contact_not_xs").addClass('checked');
    $('#about_not_xs').removeClass('checked');
    $('#port_not_xs').removeClass('checked');
    scroll_start=$('html,body').scrollTop();
    scroll_end=form_top;
    blurryMove();
})   
