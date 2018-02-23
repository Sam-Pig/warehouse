{
    let view = {
        el: '.topbar',
        template: `
        <ol>
            <li class="active list"><span>我的音乐</span></li>
            <li class="add"><span>添加歌曲</span></li>
        </ol>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    }
    let model = {
        addOrList:{
            add: false,
            list: true
        }
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this.bindEvents();
        },
        bindEvents(){
            $(this.view.el).on('click','li',(e)=>{
                $(e.currentTarget).addClass('active').siblings('.active').removeClass('active');
                if($(e.currentTarget).hasClass('add')){
                    this.model.addOrList.add = true;
                    this.model.addOrList.list = false;
                }else if($(e.currentTarget).hasClass('list')){
                    this.model.addOrList.add = false;
                    this.model.addOrList.list = true;
                }
                let data = this.model.addOrList
                window.eventHub.emit('SongAddOrSongList',data);
            })
        },
    }
    controller.init(view,model);
}