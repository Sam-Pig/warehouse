{
let view = {
    el: '.newSongsInformation',
    template: `
    <form>
        <div class="row">
            <label>歌曲</label><input type="text" value="__key__"
        </div>
        <div class="row">
            <label>歌手</label><input type="text">
        </div>
        <div class="row">
            <label>外链</label><input type="text" value="__link__">
        </div>
        <div class="row">
            <label></label><input type="submit">
        </div>
    </form>
    ` ,
    render: function(data = {}){
        let placeholders = ['key', 'link']
        let html = this.template
        placeholders.map((string)=>{
          html = html.replace(`__${string}__`, data[string] || '')
        })
        $(this.el).html(html);
    }
}

let model = {};
let controller = {
    init: function(view,model){
        this.view = view;
        this.model = model;
        this.view.render();
        window.eventHub.on('upload',(data)=>{
            this.view.render(data)
        })
    },
}
controller.init(view,model);
}

