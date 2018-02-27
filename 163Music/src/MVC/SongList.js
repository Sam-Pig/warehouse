{
    let view = {
        el: '.songListOuter',
        template: `
        <ul class="songList">
        </ul>
        `,
        render(data){
            let $el = $(this.el);
            $el.html(this.template);
            let {songs} = data;

            let liList = songs.map((song)=> $(`
            <li class="test">
                <div class="eachSong">
                    <p>${song.name}</p>
                    <div class="hot">
                        <svg class="icon music" aria-hidden="true">
                            <use xlink:href="#icon-quxiaoremen"></use>
                        </svg>
                        <span>${song.album}</span>
                    </div>
                </div>
                <a class="playButton" href="#">
                    <svg class="icon music" aria-hidden="true">
                        <use xlink:href="#icon-iconset0481"></use>
                    </svg>
                </a>
            </li>`).attr('data-song-id',song.id));
            $el.find('ul').empty();
            liList.map((li)=>{
            $el.find('ul').append(li);
            })
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
        getAllSongs(){
            var query = new AV.Query('Song');
            return query.find().then( (songs)=> {
                this.data.songs = songs.map((song)=>{
                    return { id: song.id, ...song.attributes }
                });
                return this.data.songs
            })
        }
    }
    let controller = {
        init(view,model){
            this.view = view;
            this.model = model;
            this.view.render(this.model.data);
            this.bindEventHub();
            this.model.getAllSongs().then(()=>{
                this.view.render(this.model.data);
            })
            this.bindEvents();
        },
        bindEvents(){
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
                $(this.view.el).addClass('hide'); //手机端需要隐藏，跳转到歌曲信息界面
                window.eventHub.emit('jumpDirectlyToAdd',null);
            })

            $(this.view.el).on('click','svg',(e)=>{
                let currentSongId = $(e.currentTarget).parent().parent()[0].getAttribute('data-song-id');
                let data;
                let audioSrc;
                let songs = this.model.data.songs;
                for(let i = 0;i < songs.length; i++){
                    if(songs[i].id === currentSongId){
                        currentaudio = songs[i]
                    }
                }
                window.eventHub.emit('showplayMusic',currentaudio);
                window.eventHub.emit('playDirectly');
            })
        },
        bindEventHub(){
            window.eventHub.on('upload',(data)=>{
                this.view.clearActive();
            })
           
            window.eventHub.on('create',(data)=>{
                let newData = data;
                this.model.data.songs.push(newData);
                this.view.render(this.model.data);
            })

            window.eventHub.on('updated',(data)=>{
                this.model.data.songs.map((song)=>{
                    if(song.id === data.id){
                        Object.assign(song,data);
                    }
                })
                this.view.render(this.model.data);
            })

            window.eventHub.on('zoomOutOrIn',()=>{
                if($(this.view.el).parent().hasClass('hide')){
                    $(this.view.el).parent().removeClass('hide');
                }else{
                    $(this.view.el).parent().addClass('hide')
                }

                if($(this.view.el).hasClass('hide')){
                    $(this.view.el).removeClass('hide');
                    $(this.view.el).siblings('.uploadArea').removeClass('hide');
                    $('.myMusic').removeClass('hide');
                }else{
                    $('.myMusic').addClass('hide');
                    $(this.view.el).addClass('hide');
                    $(this.view.el).siblings('.uploadArea').addClass('hide');
                }
            })

            window.eventHub.on('SongAddOrSongList',(data)=>{
                if(data.list === false){
                    $(this.view.el).addClass('hide');
                }else if(data.list === true){
                    $(this.view.el).removeClass('hide');
                }
            })

            window.eventHub.on('hideplayMusic',()=>{
                $(this.view.el).removeClass('hide');
            })

            window.eventHub.on('updatedSongList',(currentSongsList)=>{
                let updatedCurrentSongsList = currentSongsList;
                this.model.data.songs.splice(0,this.model.data.songs.length);
                this.model.data.songs.push(updatedCurrentSongsList)
                this.view.render(this.model.data);
                $(this.view.el).removeClass('hide');
            })
        }
    }
    controller.init(view,model);

}

