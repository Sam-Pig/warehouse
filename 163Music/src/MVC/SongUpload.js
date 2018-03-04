{
    let view = {
        el: '.uploadArea',
        template: `
        <button id="pickfiles" class="pickfiles">文件大小不超过10M</button>
        `,
        render: function(data){
            if($(this.el)){
                $(this.el).html(this.template);
            }
        }
    }
    let model = {}
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            $('.uploadArea').on('click',function(){
                let data = {
                    'name':'','album':'','url':'','id':''
                }
                window.eventHub.emit('clearForm',data);
            })

            window.eventHub.on('hideplayMusic',()=>{
                $(this.view.el).removeClass('hide');
                
            })
        }
    }
    controller.init(view,model);
}