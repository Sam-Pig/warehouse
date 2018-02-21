{
let view = {
    el: '.newSongsInformation',
    template: `
    <form>
        <div class="row">
            <label>歌曲</label><input type="text" name="name" value="__name__">
        </div>
        <div class="row">
            <label>歌手</label><input type="text" name="singer" value="__singer__">
        </div>
        <div class="row">
            <label>外链</label><input type="text" value="__url__" name="url" readonly>
        </div>
        <div class="row">
            <label></label><button type="submit" disabled="true" class="submitButton">保存</button>
        </div>
    </form>
    ` ,
    render(data = {}){
        let placeholders = ['name', 'url','singer','id']
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
        'name':'','singer':'','url':'','id':''
    },
    saveSong(data){
        // 声明类型
        var Song = AV.Object.extend('Song');
        // 新建对象
        var song = new Song();
        // 设置名称
        song.set('name',data.name);
        song.set('singer',data.singer);
        song.set('url',data.url);
        // 设置优先级
        return song.save().then((newSong)=>{
          let {id,attributes} = newSong;
          Object.assign(this.data, { id, ...attributes })
        },  (error)=>{
          console.error(error);
        });
    },
    updated(data){
        var song = AV.Object.createWithoutData('Song', this.data.id);
        // 修改属性
        song.set('name', data.name);
        song.set('singer', data.singer);
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
            let needs = ['name','singer','url'];
            let data = {}
            needs.map((string)=>{
              data[string] = $(this.view.el).find(`[name="${string}"]`).val()
            })
            if(this.model.data.id){
                data['id'] = this.model.data.id;
                this.model.updated(data)
                window.eventHub.emit('updated',data)
                this.view.reset();
            }else{
                this.model.saveSong(data)
                .then(()=>{
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
        })
        window.eventHub.on('activeButton',()=>{
            $('.submitButton').removeAttr('disabled');
        })
    }
}
controller.init(view,model);
}

