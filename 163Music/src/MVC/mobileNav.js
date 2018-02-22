{
    let view = {
        el: '.topbar',
        template: `
        <ol>
            <li class="active"><span>推荐音乐</span></li>
            <li><span>热歌榜</span></li>
            <li><span>搜索</span></li>
        </ol>
        `,
        render: function(data){
            $(this.el).html(this.template);
        }
    }
    let model = {}
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
            })
        }
    }
    controller.init(view,model);
}