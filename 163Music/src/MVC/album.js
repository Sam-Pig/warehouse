{
    let view = {
        el: '.album',
        template: `
        <div class="xiyouji"><img src="http://p1.music.126.net/vmiw_qldWKuPXeKxEyxk2Q==/49478023264173.jpg?param=180y180"></div>
        <div class="shibintuji"><img src="http://p1.music.126.net/vY3naGuvGQW6Xk0JRKXxtA==/6002233976603537.jpg?param=180y180"></div>
        <div class="gucunxinsi"><img src="http://p1.music.126.net/USNapWbUW2BBd_ccCHzuWw==/734473767366516.jpg?param=180y180"></div>
        <div class="yueyu"><img src="http://p1.music.126.net/1HD55undHb-PgFsO5BDk5g==/17829680556370235.jpg?param=180y180"></div>
        <div class="wuxia"><img src="http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180"></div>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    }
    let model = {}
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this.bindEventHub();
        },
        bindEventHub(){
            window.eventHub.on('SongAddOrSongList',(data)=>{
                if(data.add === true && data.list === false){
                    $(this.view.el).addClass('hide');
                }else if(data.add === false && data.list === true){
                    $(this.view.el).removeClass('hide');
                }
            })
        }
    }
    controller.init(view,model);
}