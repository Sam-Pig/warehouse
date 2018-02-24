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
            let liList = songs.map((song)=> $('<li></li>').text(song.name).attr('data-song-id',song.id));
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

