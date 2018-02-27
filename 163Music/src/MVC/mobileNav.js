{
    let view = {
        el: '.topbar',
        template: `
        <ol>
            <li class=" myAlbum"><span>我的歌单</span></li>
            <li class="list"><span>我的音乐</span></li>
            <li class="add active"><span>添加歌曲</span></li>
        </ol>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    }
    let model = {
        addOrList:{
            add: true,
            myAlbum:false,
            list: false
        }
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this.bindEvents();
            this.bindEventHub();
        },
        bindEvents(){
            $(this.view.el).on('click','li',(e)=>{
                $(e.currentTarget).addClass('active').siblings('.active').removeClass('active');
                if($(e.currentTarget).hasClass('add')){
                    this.model.addOrList.add = true;
                    this.model.addOrList.list = false;
                    this.model.addOrList.myAlbum = false;
                }else if($(e.currentTarget).hasClass('list')){
                    this.model.addOrList.add = false;
                    this.model.addOrList.myAlbum = false;
                    this.model.addOrList.list = true;
                }else if($(e.currentTarget).hasClass('myAlbum')){
                    this.model.addOrList.add = false;
                    this.model.addOrList.list = false;
                    this.model.addOrList.myAlbum = true;
                }
                let data = this.model.addOrList
                window.eventHub.emit('SongAddOrSongList',data);
            })
        },
        bindEventHub(){
            window.eventHub.on('jumpDirectlyToAdd',()=>{
                $('.add').addClass('active').siblings('.active').removeClass('active');
            });
            window.eventHub.on('hideplayMusic',()=>{
                $('.list').addClass('active').siblings('.active').removeClass('active');
            })
            window.eventHub.on('updatedSongList',()=>{
                $('.list').addClass('active').siblings('.active').removeClass('active');
            })
        }
        
    }
    controller.init(view,model);
}