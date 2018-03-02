{
    let view = {
        el: '.menu',
        template: '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-menu"></use></svg>',
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
        bindEvents:function(){
            $(this.view.el).on('click','svg',function(e){
                window.eventHub.emit('zoomOutOrIn',null);
            })
        }
    }
    controller.init(view,model);
}