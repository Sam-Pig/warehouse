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
                    <svg class="icon play" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <svg class="icon stop hide" aria-hidden="true">
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
                    <svg class="icon play" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <svg class="icon stop hide" aria-hidden="true">
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
                <svg class="icon play" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop hide" aria-hidden="true">
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
                <svg class="icon play" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop hide" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyricsOuter"><div class="lyrics"></div></div>
                <div class="playInformation"><p>{{name}}</p><p>{{album}}</p></div>
            </div>
        </div>
        <div class="wuxia hide">
        <img src="http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying" id="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop hide" aria-hidden="true">
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
        showLyrics(lyricsHash){
            if(lyricsHash){
                let lyricElement = lyricsHash.map((lyric,key)=> $(`
                <p class="lyric_${key}">${lyric}</p>`));
                $('.lyrics').empty();
                lyricElement.map((lyric)=>{
                    $('.lyrics').append(lyric);
                })
            }else{
                $('.lyrics').empty();
                $('.lyrics').append($(`<p>纯音乐无歌词</p>`));
            }
        }
    }
    let model = {
        'currentaudio': {},
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
            })
            $(this.view.el).on('click','svg.play',(e)=>{
                $('audio')[0].play();
                $(e.currentTarget).addClass('hide').siblings('.stop').removeClass('hide');
                $('.disc').removeClass('paused');
                $('div.needle').removeClass('paused');
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
                this.view.show();
                this.view.render(this.model.currentaudio);
                this.getAlbumToShowImage(this.model.currentaudio)
                $(this.view.el).find('audio')[0].onended = ()=>{
                    $('.disc').addClass('paused');
                    $('div.needle').addClass('paused');
                }
                let hash = this.model.getLyricsHash();
                this.view.showLyrics(hash);  
                $('audio')[0].ontimeupdate = ()=>{
                    let currentTime = Math.floor($('audio')[0].currentTime)
                    if($('.lyric_'+currentTime).length > 0){
                        $('.lyric_'+currentTime).addClass('lyriclight');
                        console.log($('.lyric_'+currentTime)[0]);
                        let className = this.getClassName(this.model.currentaudio);
                        let lightLyric = className+ ' .lyric_'+currentTime;
                        console.log($(lightLyric)[0].getBoundingClientRect())
                    }
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