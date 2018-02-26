{
    let view = {
        el: '.playInterface',
        template:`
        <audio src="{{audioSrc}}" controls autoplay>
        </audio>`,
        render: function(data){
            let html = this.template;
            html = html.replace("{{audioSrc}}", data)
            $(this.el).html(html);
        },
        show(){
            $(this.el).removeClass('hide')
        },
        hide(){
            $(this.el).addClass('hide')
        },
    }
    let model = {}
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render();
            this. bindEventHub();
        },
        bindEventHub(){
            window.eventHub.on('showplayMusic',(audioSrc)=>{
                this.view.show();
                console.log(audioSrc)
                this.view.render(audioSrc);
            })
            window.eventHub.on('hideplayMusic',()=>{
                this.view.hide();
            })
        }
    }
    controller.init(view,model);
}