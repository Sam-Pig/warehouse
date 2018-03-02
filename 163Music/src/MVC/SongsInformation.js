{
let view = {
    el: '.newSongsInformation',
    template: `
    <form>
        <div class="row">
            <label>歌曲</label><input type="text" name="name" value="__name__">
        </div>
        <div class="row">
            <label>专辑</label><input type="text" name="album" value="__album__">
        </div>
        <div class="row">
            <label>外链</label><input type="text" value="__url__" name="url" readonly>
        </div>
        <div class="row">
            <label class="lyrics">歌词</label><textarea name="lyrics">__lyrics__</textarea>
        </div>
        <div class="row">
            <label></label><button type="submit" disabled="true" class="submitButton" id="up_load">保存</button>
        </div>
    </form>
    ` ,
    render(data = {}){
        let placeholders = ['name', 'url','album','lyrics']
        let html = this.template
        placeholders.map((string)=>{
          html = html.replace(`__${string}__`, data[string] || '')
        })
        $(this.el).html(html);
    },
    reset(){
        this.render({});
    }
}

let model = {
    data: {
        'name':'','album':'','url':'','id':'','lyrics':''
    },
    saveSong(data){
        // 声明类型
        var Song = AV.Object.extend('Song');
        // 新建对象
        var song = new Song();
        // 设置名称
        song.set('name',data.name);
        song.set('album',data.album);
        song.set('url',data.url);
        song.set('lyrics',data.lyrics);
        // 设置优先级
        return song.save().then((newSong)=>{
          let {id,attributes} = newSong;
          Object.assign(this.data, { id:id, name:attributes.name,url:attributes.url,lyrics:attributes.lyrics })
        },  (error)=>{
          console.error(error);
        })
    },
    updated(data){
        var song = AV.Object.createWithoutData('Song', data.id);
        // 修改属性
        song.set('name', data.name);
        song.set('album', data.album);
        song.set('lyrics', data.lyrics);
        // 保存到云端
        song.save();
    }
};
let controller = {
    init(view,model){
        this.view = view;
        this.model = model;
        this.view.render();
        this.bindEvents();
        this.bindEventHub();
    },
    bindEvents(){
         $(this.view.el).on('submit', 'form', (e)=>{
            e.preventDefault()
            let needs = ['name','album','url','lyrics'];
            let data = {}
            needs.map((string)=>{
              data[string] = $(this.view.el).find(`[name="${string}"]`).val()
            })
            if(this.model.data.id && $.trim(data.name) && $.trim(data.album)){
                data['id'] = this.model.data.id;
                this.model.updated(data);
                window.eventHub.emit('updated',data);
                this.view.reset();
            }else if(!this.model.data.id && $.trim(data.name) && $.trim(data.album)){
                this.model.saveSong(data)
                .then(()=>{
                data['id'] = this.model.data.id;
                this.model.data.id = '';
                this.view.reset();
                    window.eventHub.emit('create',data);
                })  
            }
        })
    },
    bindEventHub(){
        window.eventHub.on('upload',(data)=>{
            this.view.render(data);
        })
        window.eventHub.on('select',(data)=>{
            this.model.data = data;
            this.view.render(this.model.data);
            $(this.view.el).parent().removeClass('hide');
            $('.uploadArea').removeClass('hide');
        })
        window.eventHub.on('activeButton',()=>{
            $('.submitButton').removeAttr('disabled');
        })

        //手机端切换
        window.eventHub.on('SongAddOrSongList',(data)=>{
            if( data.add === true){
                $(this.view.el).parent().removeClass('hide');
                $('.uploadArea').removeClass('hide');
            }else if(data.add === false){
                $(this.view.el).parent().addClass('hide');
                $('.uploadArea').addClass('hide');
            }
        })

        //电脑端切换
        window.eventHub.on('addOrAlbum',(data)=>{
            if(data.songInformation === true && data.album === false){
                $(this.view.el).removeClass('hide');
                
            }else if(data.songInformation === false && data.album === true){
                $(this.view.el).addClass('hide');
            }
        })

        window.eventHub.on('clearForm',(data)=>{
            this.view.reset();
            this.model.data = data;
        })
        window.eventHub.on('hideplayMusic',()=>{
            $(this.view.el).parent().addClass('hide');
            $('.uploadArea').addClass('hide');
        })
    }
}
controller.init(view,model);
}

