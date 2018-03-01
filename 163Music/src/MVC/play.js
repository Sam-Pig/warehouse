{
    let view = {
        el: '.playInterface',
        template:`
        <div class="xiyouji hide">
            <div class="needle"></div>
            <img src="http://p1.music.126.net/vmiw_qldWKuPXeKxEyxk2Q==/49478023264173.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying" id="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/vmiw_qldWKuPXeKxEyxk2Q==/49478023264173.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                    <svg class="icon play hide" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <svg class="icon stop" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                    </svg>
                </div></div>
                <div class="lyricsOuter"><div class="lyrics"></div></div>
                <div class="playInformation"><p>{{name}}</p><p>{{album}}</p></div>
            </div>
            
        </div>
        <div class="shibintuji hide">
            <div class="needle"></div>
            <img src="http://p1.music.126.net/vY3naGuvGQW6Xk0JRKXxtA==/6002233976603537.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying" id="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/vY3naGuvGQW6Xk0JRKXxtA==/6002233976603537.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                    <svg class="icon play hide" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <svg class="icon stop" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                    </svg>
                </div></div>
                <div class="lyricsOuter"><div class="lyrics"></div></div>
                <div class="playInformation"><p>{{name}}</p><p>{{album}}</p></div>
            </div>
        </div>
        <div class="gucunxinsi hide">
            <div class="needle"></div>
            <img src="http://p1.music.126.net/USNapWbUW2BBd_ccCHzuWw==/734473767366516.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying" id="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/USNapWbUW2BBd_ccCHzuWw==/734473767366516.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play hide" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyricsOuter"><div class="lyrics"></div></div>
                <div class="playInformation"><p>{{name}}</p><p>{{album}}</p></div>
            </div>
        </div>
        <div class="yueyu hide">
            <div class="needle"></div>
            <img src="http://p1.music.126.net/1HD55undHb-PgFsO5BDk5g==/17829680556370235.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying" id="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/1HD55undHb-PgFsO5BDk5g==/17829680556370235.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play hide" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyricsOuter"><div class="lyrics"></div></div>
                <div class="playInformation"><p>{{name}}</p><p>{{album}}</p></div>
            </div>
        </div>
        <div class="wuxia hide">
        <div class="needle"></div>
        <img src="http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying" id="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play hide" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyricsOuter"><div class="lyrics"></div></div>
                <div class="playInformation"><p>{{name}}</p><p>{{album}}</p></div>
            </div>
        </div>
        <audio src="{{audioSrc}}" controls>
        </audio>`,
        render(data){
            let html = this.template;
            let url = data.url;
            html = html.replace("{{audioSrc}}", data.url).replace(/{{name}}/g, data.name).replace(/{{album}}/g, data.album);
            $(this.el).html(html);
        },
        show(){
            $(this.el).removeClass('hide')
        },
        hide(){
            $(this.el).addClass('hide')
        },
        showLyrics(lyricsHash,className){
            let lyricPart = className+ ' .lyrics';
            if(lyricsHash){
                console.log(lyricPart)
                let lyricElement = lyricsHash.map((lyric,key)=> $(`
                <p class="lyric_${key}  played">${lyric}</p>`));
                $(lyricPart).empty();
                lyricElement.map((lyric)=>{
                    $(lyricPart).append(lyric);
                })
            }else{
                $(lyricPart).empty();
                $(lyricPart).append($(`<p>纯音乐无歌词</p>`));
            }
        }
    }
    let model = {
        'currentaudio': {},
        'end': false,
        getLyricsHash(){
            if(this.currentaudio.lyrics){
                let hash = [];
            this.currentaudio.lyrics.split('\n').forEach((lyric)=>{
                let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                let lyricReg = lyric.split('\]')[1];
                let timeRegExpArr = lyric.match(timeReg);
                let min = Number(String(timeRegExpArr[0].match(/\[\d*/i)).slice(1)),
                    sec = Number(String(timeRegExpArr[0].match(/\:\d*/i)).slice(1));
                let time = min * 60 + sec;
                hash[time] = lyricReg
            })
            return hash;
            }
        }
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this. bindEventHub();
            this.bindEvents();
        },
        bindEvents(){
            $(this.view.el).on('click','span.back',()=>{
                window.eventHub.emit('hideplayMusic',null);
                if($('.pageOuterInMobile')){
                    $('.pageOuterInMobile').removeClass('hide');
                }
            })
            $(this.view.el).on('click','svg.play',(e)=>{
                if(this.model.end === true){
                    window.eventHub.emit('showplayMusic',this.model.currentaudio);
                }
                $('audio')[0].play();
                $(e.currentTarget).addClass('hide').siblings('.stop').removeClass('hide');
                $('.disc').removeClass('paused');
                $('div.needle').removeClass('paused');
                this.model.end = false;
            })
            $(this.view.el).on('click','svg.stop',(e)=>{
                $('audio')[0].pause();
                $(e.currentTarget).addClass('hide').siblings('.play').removeClass('hide');
                $('.disc').addClass('paused');
                $('div.needle').addClass('paused');
            })
        },
        bindEventHub(){
            window.eventHub.on('showplayMusic',(currentaudio)=>{

                this.model.currentaudio = currentaudio;
                let className = this.getClassName(this.model.currentaudio);
                this.view.show();
                this.view.render(this.model.currentaudio);
                this.getAlbumToShowImage(this.model.currentaudio)

                let hash = this.model.getLyricsHash();
                this.view.showLyrics(hash,className);  
                let time = 0;
                let standardHeight = $(className+' .lyrics')[0].getBoundingClientRect().top + $(className+' .lyrics')[0].offsetHeight/2;
                let moveDistance = $(".lyrics p:nth-child(1)")[0].offsetHeight;
                $('audio')[0].ontimeupdate = ()=>{
                    console.log(moveDistance)
                    let currentTime = Math.floor($('audio')[0].currentTime);
                    let lightLyric = className+ ' .lyric_'+currentTime;

                    if($('.lyric_'+currentTime).length > 0){

                        $('.lyric_'+currentTime).addClass('lyriclight').siblings().removeClass('lyriclight');

                        if($(lightLyric)[0].getBoundingClientRect().top > standardHeight && $(lightLyric).hasClass('played')){
                            time = time + 1;
                            $('.lyric_'+currentTime).addClass('lyriclight');
                            $($(lightLyric)[0]).parent().css('transform','translateY(-'+time*moveDistance+'px)');
                            $(lightLyric).removeClass('played')
                        }else{
                            return
                        }
                    }
                }

                $(this.view.el).find('audio')[0].onended = ()=>{
                    $('.disc').addClass('paused');
                    $('div.needle').addClass('paused');
                    $('svg.stop').addClass('hide').siblings('.play').removeClass('hide');
                    this.model.end = true;
                }          
            })
            window.eventHub.on('hideplayMusic',()=>{
                this.view.hide();
            })
            window.eventHub.on('playDirectly',()=>{
                $('audio')[0].play();
                $('svg.play').addClass('hide').siblings('.stop').removeClass('hide');
            })
        },
        getAlbumToShowImage(currentaudio){
            switch(currentaudio.album)
            {
                case '西游记':
                    $('.xiyouji').removeClass('hide').siblings().addClass('hide');
                    break;
                case '士兵突击':
                    $('.shibintuji').removeClass('hide').siblings().addClass('hide');
                    break;
                case '谷村新司':
                    $('.gucunxinsi').removeClass('hide').siblings().addClass('hide');
                    break;
                case '粤语':
                    $('.yueyu').removeClass('hide').siblings().addClass('hide');
                    break;
                case '武侠':
                    $('.wuxia').removeClass('hide').siblings().addClass('hide');
                    break;
                default:
                    return
            }
        },
        getClassName(currentaudio){
            switch(currentaudio.album)
            {
                case '西游记':
                    return '.xiyouji'
                    break;
                case '士兵突击':
                    return '.shibintuji'
                    break;
                case '谷村新司':
                    return '.gucunxinsi'
                    break;
                case '粤语':
                    return '.yueyu'
                    break;
                case '武侠':
                    return '.wuxia'
                    break;
                default:
                    return
            }
        }
    }
    controller.init(view,model);
}