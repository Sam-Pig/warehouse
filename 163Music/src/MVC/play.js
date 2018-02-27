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
            <div class="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/vmiw_qldWKuPXeKxEyxk2Q==/49478023264173.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                    <svg class="icon play" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <svg class="icon stop hide" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                    </svg>
                </div></div>
                <div class="lyrics"></div>
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
            <div class="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/vY3naGuvGQW6Xk0JRKXxtA==/6002233976603537.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                    <svg class="icon play" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                    </svg>
                    <svg class="icon stop hide" aria-hidden="true">
                    <use xlink:href="#icon-zanting"></use>
                    </svg>
                </div></div>
                <div class="lyrics"></div>
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
            <div class="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/USNapWbUW2BBd_ccCHzuWw==/734473767366516.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop hide" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyrics"></div>
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
            <div class="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/1HD55undHb-PgFsO5BDk5g==/17829680556370235.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop hide" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyrics"></div>
            </div>
        </div>
        <div class="wuxia hide">
        <img src="http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180">
            <span class="back">
                <svg class="icon music" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
                </svg>
            </span>
            <div class="startPlaying">
                <div class="CD"><div class="disc" style="background: url(//p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180);background-size: 60%;background-position: center;background-repeat: no-repeat;">
                <svg class="icon play" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg class="icon stop hide" aria-hidden="true">
                <use xlink:href="#icon-zanting"></use>
                </svg>
                </div></div>
                <div class="lyrics"></div>
            </div>
        </div>
        <audio src="{{audioSrc}}" controls >
        </audio>`,
        render: function(data){
            let html = this.template;
            let url = data.url;
            html = html.replace("{{audioSrc}}", data.url)
            $(this.el).html(html);
        },
        show(){
            $(this.el).removeClass('hide')
        },
        hide(){
            $(this.el).addClass('hide')
        },
    }
    let model = {}
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
                this.view.show();
                this.view.render(currentaudio);
                this.getAlbumToShowImage(currentaudio)
                $(this.view.el).find('audio')[0].onended = ()=>{
                    $('.disc').addClass('paused');
                    $('div.needle').addClass('paused');
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
        }
    }
    controller.init(view,model);
}