{
    let view = {
        el: '.songListOuter',
        template: `
        <ul class="songList">
            <li class="active">歌曲。。。。。。</li>
            <li>歌曲。。。。。。</li>
            <li>歌曲。。。。。。</li>
            <li>歌曲。。。。。。</li>
            <li>歌曲。。。。。。</li>
            <li>歌曲。。。。。。</li>
        </ul>
        `,
        render: function(data = {}){
            $(this.el).html(this.template);
        }
    }
    let model = {}
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this.active();
            window.eventHub.on('upload',(data)=>{
                this.active();
            })
        },
        active: function(){
            $(this.view.el).addClass('active')
        }
    }
    controller.init(view,model);

}

