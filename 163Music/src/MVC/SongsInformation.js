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
            <label>外链</label><input type="text" value="__url__" name="url">
        </div>
        <div class="row">
            <label></label><button type="submit">保存</button>
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
          console.log(this.data)
        },  (error)=>{
          console.error(error);
        });
    }
};
let controller = {
    init(view,model){
        this.view = view;
        this.model = model;
        this.view.render();
        this.bindEvents();
        window.eventHub.on('upload',(data)=>{
            this.view.render(data)
        })
    },
    bindEvents(){
        $(this.view.el).on('submit', 'form', (e)=>{
            e.preventDefault()
            let needs = ['name','singer','url'];
            let data = {}
            needs.map((string)=>{
              data[string] = $(this.view.el).find(`[name="${string}"]`).val()
            })
            this.model.saveSong(data)
              .then(()=>{
                this.view.reset();
                window.eventHub.emit('create',data)
              })
          })
    }
}
controller.init(view,model);
}

