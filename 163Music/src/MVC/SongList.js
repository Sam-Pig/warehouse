{
    let view = {
        el: '.songListOuter',
        template: `
        <ul class="songList">
        </ul>
        `,
        render(data){
            let $el = $(this.el);
            $el.html(this.template);
            let {songs} = data;
            let liList = songs.map((song)=> $('<li></li>').text(song.name));
            $el.find('ul').empty();
            liList.map((li)=>{
            $el.find('ul').append(li);
            })
        },
        clearActive: function(){
            $(this.el).find('.active').removeClass('active');
        }
    }
    let model = {
        data:{
            songs: []
        }
        
    }
    let controller = {
        init: function(view,model){
            this.view = view;
            this.model = model;
            this.view.render(this.model.data);
            window.eventHub.on('upload',(data)=>{
                this.view.clearActive();
            })
            window.eventHub.on('create',(data)=>{
                this.model.data.songs.push(data);
                this.view.render(this.model.data)
                console.log(this.model.data)
            })
        },
        
    }
    controller.init(view,model);

}

