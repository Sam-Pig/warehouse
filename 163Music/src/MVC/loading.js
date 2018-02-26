{
    let view = {
        el: '.site-loading',
        render: function(data){
            if(data === true){
                $(this.el).addClass('hide');
            }else if(data === false){
                $(this.el).removeClass('hide');
            }
        }
    }
    let model = {}
    let controller = {
        init: function(view,model){
            this.view = view;
            this.bindEventHub();
        },
        bindEventHub(){
            window.eventHub.on('beforeUpload',(data)=>{
                this.view.render(data);
            })
            window.eventHub.on('afterUpload',(data)=>{
                this.view.render(data);
            })
        }
    }
    controller.init(view,model);
}