{
    let view = {
        el: '.album',
        template: `
        <div class="xiyouji" title="西游记"><img src="http://p1.music.126.net/vmiw_qldWKuPXeKxEyxk2Q==/49478023264173.jpg?param=180y180"><figcaption>大师兄，师傅又双叒叕被妖怪抓走啦~~~~~~经典西游</figcaption></div>
        <div class="shibintuji" title="士兵突击"><img src="http://p1.music.126.net/vY3naGuvGQW6Xk0JRKXxtA==/6002233976603537.jpg?param=180y180"><figcaption>光荣在于平淡，艰巨在于漫长-士兵突击</figcaption></div>
        <div class="gucunxinsi" title="谷村新司"><img src="http://p1.music.126.net/USNapWbUW2BBd_ccCHzuWw==/734473767366516.jpg?param=180y180"><figcaption>谷村新司</figcaption></div>
        <div class="yueyu" title="粤语"><img src="http://p1.music.126.net/1HD55undHb-PgFsO5BDk5g==/17829680556370235.jpg?param=180y180"><figcaption>那些年我们听过的粤语</figcaption></div>
        <div class="wuxia" title="武侠"><img src="http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180"><figcaption>武侠经典</figcaption></div>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    }
    let model = {
        getCurrentAlbum(currentTitle){
            var query = new AV.Query('Song');
            return query.find().then(function (songs) {
                return songs.filter((song)=>{
                    return (song.attributes.album === currentTitle)
                });
            })
        }
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this.bindEventHub();
            this.bindEvent();
        },
        bindEvent(){
            $(this.view.el).on('click','div',(e)=>{
                let currentTitle = e.currentTarget.getAttribute('title');
                this.model.getCurrentAlbum(currentTitle).then((currentSongsList)=>{
                    let hash = { id: currentSongsList[0].id, ...currentSongsList[0].attributes }
                    window.eventHub.emit('updatedSongList',hash); 
                });
                $(this.view.el).addClass('hide');
            })
        },
        bindEventHub(){
            window.eventHub.on('SongAddOrSongList',(data)=>{
                if(data.myAlbum === false){
                    $(this.view.el).addClass('hide');
                }else if(data.myAlbum  === true){
                    $(this.view.el).removeClass('hide');
                }
            })
            window.eventHub.on('hideplayMusic',()=>{
                $(this.view.el).addClass('hide');
            })
        }
    }
    controller.init(view,model);
}