{
    let view = {
        el: '.songListOuter',
        template: '<ul class="songList"></ul>',
        render:function(data,serialNumber){
            let $el = $(this.el);
            $el.html(this.template);
            let dataSongs = data;
            let liList = dataSongs.songs.map(function(song){
            let songNmae = song.name;
            let songAlbum = song.album;
            serialNumber = serialNumber + 1;
            let li = $('<li class="test"><p class="serialNumber"><span>'+serialNumber+'<span></p><div class="eachSong"><p>'+songNmae+'</p><div class="hot"><svg class="icon music" aria-hidden="true"><use xlink:href="#icon-quxiaoremen"></use></svg><span>'+songAlbum+'</span></div></div><a class="playButton" href="#"><svg class="icon music" aria-hidden="true"><use xlink:href="#icon-iconset0481"></use></svg></a></li>').attr('data-song-id',song.id)[0];
            $el.find('ul').append(li);})
        },
        activationSong: function(song){
            $(song).addClass('active').siblings('.active').removeClass('active');
        },
        clearActive: function(){
            $(this.el).find('.active').removeClass('active');
        }
    }
    let model = {
        data:{
            songs: [],
        },
        getAllSongs:function(){
            var query = new AV.Query('Song');
            return query.find().then( (songs) =>{
                this.data.songs = songs.map(function(song){
                    return { id: song.id, name:song.attributes.name,url:song.attributes.url,album:song.attributes.album,lyrics:song.attributes.lyrics, }
                });
                return this.data.songs
            })
        }
    }
    let controller = {
        init:function(view,model){
            this.view = view;
            this.model = model;
            this.model.getAllSongs().then(()=>{
                this.view.render(this.model.data,0);
            })
            this.bindEvents();
            this.bindEventHub();
        },
        bindEvents:function(){
            $(this.view.el).on('click','li',(e)=>{
                this.view.activationSong(e.currentTarget);
                let currentSongId = e.currentTarget.getAttribute('data-song-id');
                let data;
                let songs = this.model.data.songs;
                for(let i = 0;i < songs.length; i++){
                    if(songs[i].id === currentSongId){
                        data = songs[i]
                    }
                }
                //不使用直接的data，为了不引用同一个对象（地址是一样的）
                let string = JSON.stringify(data);
                let object = JSON.parse(string);
                window.eventHub.emit('select',object);
                window.eventHub.emit('activeButton',null);
                $(this.view.el).parent().addClass('hide'); //手机端需要隐藏，跳转到歌曲信息界面
                window.eventHub.emit('jumpDirectlyToAdd',null);
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
                window.eventHub.emit('showplayMusic',currentaudio);
                window.eventHub.emit('playDirectly');
                if($('.pageOuterInMobile')){
                    $('.pageOuterInMobile').addClass('hide');
                }
                console.log($(this.view.el).parent())
            })
        },
        bindEventHub:function(){
            window.eventHub.on('upload',(data)=>{
                this.view.clearActive();
            })
           
            window.eventHub.on('create',(data)=>{
                let newData = data;
                this.model.data.songs.push(newData);
                this.view.render(this.model.data,0);
            })

            window.eventHub.on('updated',(data)=>{
                this.model.data.songs.map((song)=>{
                    if(song.id === data.id){
                        Object.assign(song,data);
                    }
                })
                this.view.render(this.model.data,0);
            })

            window.eventHub.on('zoomOutOrIn',()=>{
                if($(this.view.el).parent().parent().hasClass('hide')){
                    $(this.view.el).parent().parent().removeClass('hide');
                }else{
                    $(this.view.el).parent().parent().addClass('hide')
                }

                if($(this.view.el).hasClass('hide')){
                    $(this.view.el).parent().removeClass('hide');
                    $('.uploadArea').removeClass('hide');
                    $('.myMusic').removeClass('hide');
                    $('.songList li').removeClass('hide');
                }else{
                    $('.myMusic').addClass('hide');
                    $(this.view.el).addClass('hide');
                    $(this.view.el).siblings('.uploadArea').addClass('hide');
                    $('.songList li').addClass('hide');
                }
            })

            window.eventHub.on('SongAddOrSongList',(data)=>{
                if(data.list === false){
                    $(this.view.el).parent().addClass('hide');
                }else if(data.list === true){
                    $(this.view.el).parent().removeClass('hide');
                }
            })

            window.eventHub.on('hideplayMusic',()=>{
                $(this.view.el).parent().removeClass('hide');
                
            })

            window.eventHub.on('updatedSongList',(currentSongsList)=>{
                $(this.view.el).parent().removeClass('hide');
                let updatedCurrentSongsList = currentSongsList;
                this.model.data.songs.splice(0,this.model.data.songs.length);
                this.model.data.songs.push(updatedCurrentSongsList);
                console.log(this.model.data.songs)
                let $el = $(this.el);
                $el.find('ul').empty();
                this.view.render(this.model.data,0);
            })
        }
    }
    controller.init(view,model);

}

