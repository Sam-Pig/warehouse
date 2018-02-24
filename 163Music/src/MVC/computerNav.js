{
    let view = {
        el: '.computerNav',
        template: `
        <ul>
            <li class="album active"><span>我的音乐</span></li>
            <li class="songInformation"><span>歌曲信息</span></li>
        </ul>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    }
    let model = {
        addOrAlbum:{
            songInformation: false,
            album: true
        }
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this.bindEvent();
        },
        bindEvent(){
            $(this.view.el).on('click','li',(e)=>{
                $(e.currentTarget).addClass('active').siblings('.active').removeClass('active');
                if($(e.currentTarget).hasClass('songInformation')){
                    this.model.addOrAlbum.songInformation = true;
                    this.model.addOrAlbum.album = false;
                }else if($(e.currentTarget).hasClass('album')){
                    this.model.addOrAlbum.songInformation = false;
                    this.model.addOrAlbum.album = true;
                }
                let data = this.model.addOrAlbum
                window.eventHub.emit('addOrAlbum',data);
            })
        }
    }
    controller.init(view,model);
}