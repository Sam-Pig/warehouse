{
    let view = {
        el: '.album',
        template: `
        <p><span>我的歌单</span></p>
        <div class="mobileOuter clearfix">
            <div class="xiyouji el" title="西游记"><img src="http://p1.music.126.net/vmiw_qldWKuPXeKxEyxk2Q==/49478023264173.jpg?param=180y180"><figcaption>大师兄，师傅又双叒叕被妖怪抓走啦~~~~~~经典西游</figcaption></div>
            <div class="shibintuji el" title="士兵突击"><img src="http://p1.music.126.net/vY3naGuvGQW6Xk0JRKXxtA==/6002233976603537.jpg?param=180y180"><figcaption>光荣在于平淡，艰巨在于漫长-士兵突击</figcaption></div>
            <div class="gucunxinsi el" title="谷村新司"><img src="http://p1.music.126.net/USNapWbUW2BBd_ccCHzuWw==/734473767366516.jpg?param=180y180"><figcaption>谷村新司</figcaption></div>
            <div class="yueyu el" title="粤语"><img src="http://p1.music.126.net/1HD55undHb-PgFsO5BDk5g==/17829680556370235.jpg?param=180y180"><figcaption>那些年我们听过的粤语</figcaption></div>
            <div class="wuxia el" title="武侠"><img src="http://p1.music.126.net/qHKvdeYzTqIOxcGKnrfaPQ==/72567767449767.jpg?param=180y180"><figcaption>武侠经典</figcaption></div>
        </div>
        <div class="recentSongs">
            <ul class="recentSongsList"></ul>
        </div>
        `,
        render:function(data){
            $(this.el).html(this.template);
            let dataSongs = data;
            let liList = dataSongs.songs.map(function(song){
            let songNmae = song.name;
            let songAlbum = song.album;
            let li = $('<li class="test"></p><div class="eachSong"><p>'+songNmae+'</p><div class="hot"><svg class="icon music" aria-hidden="true"><use xlink:href="#icon-quxiaoremen"></use></svg><span>'+songAlbum+'</span></div></div><a class="playButton" href="#"><svg class="icon music" aria-hidden="true"><use xlink:href="#icon-iconset0481"></use></svg></a></li>').attr('data-song-id',song.id)[0];
            $('.recentSongs').find('ul').append(li);})
        }
    }
    let model = {
        data:{
            songs:{},
        },
        getCurrentAlbum:function(currentTitle){
            console.log(this.data.songs)
            return this.data.songs.filter((song)=>{
                return (song.album === currentTitle)
            });
        },
        getAllSongs:function(){
            var query = new AV.Query('Song');        
            return query.find().then( (songs) =>{
                this.data.songs = songs.map(function(song){
                    return { id: song.id, name:song.attributes.name,url:song.attributes.url,album:song.attributes.album,lyrics:song.attributes.lyrics, };
                });
                return this.data.songs
            })
        }
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.model.getAllSongs().then(()=>{
                this.view.render(this.model.data);
            })
            this.bindEventHub();
            this.bindEvent();
        },
        bindEvent(){
            $(this.view.el).on('click','div.el',(e)=>{
                let currentTitle = e.currentTarget.getAttribute('title');
                let currentSongsList = this.model.getCurrentAlbum(currentTitle)
                console.log(currentSongsList)
                let hash = { id: currentSongsList[0].id, name:currentSongsList[0].name, url:currentSongsList[0].url, album:currentSongsList[0].album, lyrics:currentSongsList[0].lyrics }
                window.eventHub.emit('updatedSongList',hash); 
                $(this.view.el).addClass('hide');
            })
            $(this.view.el).on('click','svg',(e)=>{
                let currentSongId = $(e.currentTarget).parent().parent()[0].getAttribute('data-song-id');
                let data;
                let audioSrc;
                let songs = this.model.data.songs;
                let currentaudio = {}
                for(let i = 0;i < songs.length; i++){
                    if(songs[i].id === currentSongId){
                        currentaudio = songs[i]
                    }
                }
                console.log(currentaudio)
                window.eventHub.emit('showplayMusic',currentaudio);
                window.eventHub.emit('playDirectly');
                if($('.pageOuterInMobile')){
                    $('.pageOuterInMobile').addClass('hide');
                }
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