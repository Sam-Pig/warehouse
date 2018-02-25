{
    let view = {
        el: '.uploadArea',
        template: `
        <button id="pickfiles" class="pickfiles">文件大小不超过10M</button>
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
            $('.uploadArea').on('click','button',function(){
                let data = {
                    'name':'','album':'','url':'','id':''
                }
                window.eventHub.emit('clearForm',data);
            })
        }
    }
    controller.init(view,model);
}