{
    let view = {
        el: '.header',
        template: `
        <span class="back">←</span>网易云音乐<span>✕</span><span>☐</span><span>一</span>
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
            $(this.view.el).on('click','span.back',(e)=>{
                window.eventHub.emit('hideplayMusic',null);
            })
        }
    }
    controller.init(view,model);
}