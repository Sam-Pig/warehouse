var initialBarrage = []
initialBarrage[1] = 'hello world';
initialBarrage[2] = '4564fafsdf';
initialBarrage[4] = ['444','4444444444','44444444444444444','444444444444444444444444444']
initialBarrage[6] = 'djjjjjjjjjjdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj';
initialBarrage[7] = '111111111111111111111111111111111111111111111111111111111';
initialBarrage[8] = ['88','8','888888888888888888888888888','88888','88888888888888888888888888888888888888888888888'];
initialBarrage[20] = ['qqqqqq','qqqqq','qqqqqqqqqqqqqqqqqqq','q','qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'];
initialBarrage[35] = ['www','ww','wwwwwwwwwwwww','ww','wwwwwww'];
initialBarrage[50] = ['eeee','e','eeeeeeeeeee','eeeee','eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'];
initialBarrage[70] = ['rrr','r','rrrrrrrrrrrrrrrrrrrrrr','r'];
initialBarrage[100] = ['yy','y','yyyyyy'];
initialBarrage[120] = ['120','120120','120120120120120120','1201','120120120120120120120120120120120120120120120120120120120120'];
var tempDanmu = [];
$(document).ready(function(){
    var currentTime;
    var currentBarrage;
    var timeQueue;
    var currentSentence;
    var setIntervalPlay;
    var sentenceColor;
    var sentenceTop;
    var sentenceSpeed;
    var switchFlag = true;
    $('#Display')[0].addEventListener('play',function(){

        for(var i=0; i < $('#initialDanmu').children().length;i++){
            var elementWidth = $('#initialDanmu').children()[i].clientWidth;
            var initialSpeed = Number(((1 - (elementWidth / ($('#initialDanmu')[0].clientWidth + elementWidth))) * 10).toFixed(1));
            var changedSpeed = (1-(($('#initialDanmu')[0].getBoundingClientRect().right -  $('#initialDanmu').children()[i].getBoundingClientRect().left)/($('#initialDanmu')[0].clientWidth + elementWidth))) * initialSpeed;
            $($('#initialDanmu').children()[i]).css('transform' , "translateX(-" + Math.ceil($('#initialDanmu')[0].clientWidth + $('#initialDanmu').children()[i].clientWidth+10)+"px)");
            $($('#initialDanmu').children()[i]).css('transition',"transform " + changedSpeed +'s'+' linear');
        }

        setIntervalPlay = setInterval(function(){
            currentTime = Math.floor($('#Display')[0].currentTime);
            currentBarrage = initialBarrage.slice(currentTime,currentTime + 1);
            if(currentBarrage[0] instanceof Array){
                currentBarrage = currentBarrage[0];
            }

            currentBarrage.forEach(function(elem,index){
                timeQueue = "initialData_" + currentTime + "_" + index;
                $('#initialDanmu').append("<p style = 'position: absolute;left: 100%;font-size: 24px;' class='initialData " + timeQueue + "'>" + $.trim(elem) + "</p>");
                currentSentence = document.getElementsByClassName(timeQueue)[0];
                sentenceColor = getColor();
                sentenceTop = getOffsetTop();
                sentenceSpeed = getSpeed(currentSentence.clientWidth);
                var cssObj = {
                    'transition' : "transform " + sentenceSpeed + 's' + ' linear',
                    'transform' : "translateX(-" + Math.ceil($('#initialDanmu')[0].clientWidth+currentSentence.clientWidth+10)+"px)",
                    'color' : sentenceColor,
                    'top': sentenceTop + "px"
                  };
                $(currentSentence).css(cssObj)
            })       
                
            for(var i=0; i < $('#initialDanmu').children().length;i++){
                var removeCondition = $('#initialDanmu').children()[i].getBoundingClientRect().right - $('#initialDanmu')[0].getBoundingClientRect().left;
                if(removeCondition < 0){
                    $('#initialDanmu').children()[i].remove();
                }
            }
        },1000)
    })

    $('#Display')[0].addEventListener('pause', function () {
        clearInterval(setIntervalPlay);
        currentTime = Math.floor($('#Display')[0].currentTime);
        for(var i=0; i < $('#initialDanmu').children().length;i++){
            var pauseDistance = $('#initialDanmu')[0].getBoundingClientRect().right -  $('#initialDanmu').children()[i].getBoundingClientRect().left;
            $($('#initialDanmu').children()[i]).css('transform' , "translateX(-" + pauseDistance +"px)");
        }
    });

    $('#Display')[0].addEventListener('seeked', function () {
        clearInterval(setIntervalPlay);
		for(var i=0; i < $('#initialDanmu').children().length;i++){
            $('#initialDanmu').children()[i].remove();
        }
    });

    $("#send").click(function() {
        if($.trim($('#input').val())){
            var inputValue = $.trim($('#input').val());
            var sendTime = Math.floor($('#Display')[0].currentTime);
            
            if(initialDanmu[sendTime]){
                initialDanmu[sendTime].push(inputValue);
                var l = initialDanmu[sendTime].length - 1;
            }else{
                initialDanmu[sendTime] = [];
                initialDanmu[sendTime].push(inputValue);
                var l = 0;
            }

            var messageClassName = "initialData_" + sendTime + "_" + l; 
            $('#initialDanmu').append("<p style = 'position: absolute;left: 100%;font-size: 24px;' class='initialData " + messageClassName + "'>" + $.trim(inputValue) + "</p>");
            var currentmessage = document.getElementsByClassName(messageClassName)[0];
            var messageColor = getColor();
            var messageTop = getOffsetTop();
            var messageSpeed = getSpeed(currentmessage.clientWidth);
            var cssObj = {
                'transition' : "transform " + messageSpeed + 's' + ' linear',
                'transform' : "translateX(-" + Math.ceil($('#initialDanmu')[0].clientWidth + currentmessage.clientWidth+10)+"px)",
                'color' : messageColor,
                'top': messageTop + "px"
              };
            $(currentmessage).css(cssObj)    
        }
    });

    $('.deleteButton')[0].onclick=function(){
        initialBarrage.length = 0;
        $('#initialDanmu').remove();
    }

    $('.closeOrOpen')[0].onclick = function(){
        switchFlag = !switchFlag;
        if(switchFlag === true){
            $('#initialDanmu').css('height','80%');
            $('.switchButton').removeClass('off').addClass('on');
            $('.switchButton').text('ON');
            $('.closeOrOpen').removeClass('close');
            $('.input').attr('disabled',false);
        }else{
            $('#initialDanmu').css('height','0px');
            $('.switchButton').removeClass('on').addClass('off');
            $('.switchButton').text('OFF');
            $('.closeOrOpen').addClass('close');
            $('.input').attr('disabled',true);
        }
    }

    function getColor(){
        var randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        return randomColor;
    }
    function getOffsetTop(){
        return Math.random() * ($('#initialDanmu')[0].clientHeight - 50);
    }
    function getSpeed(elementWidth){
        var speed;
        return  speed = Number(((1 - (elementWidth / ($('#initialDanmu')[0].clientWidth + elementWidth))) * 10).toFixed(1));
    }
})
