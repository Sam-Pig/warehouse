{
    let view = {
        el: '.searchOuter',
        template: `
        <div class="searchInformation">
                <svg class="icon music" aria-hidden="true"><use xlink:href="#icon-sousuo"></use></svg><input type="text" placeholder="搜索歌手、歌曲、专辑">
            </div>
            <div class="search clearfix"><span>西游记</span><span>士兵突击</span><span>谷村新司谷村新司谷村新司</span><span>粤语</span><span>武侠经典</span></div>
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
            this.bindEventHub();
        },
        bindEventHub(){
            window.eventHub.on('SongAddOrSongList',(data)=>{
                if(data.add === false){
                    $(this.view.el).addClass('hide');
                }else if(data.add === true){
                    $(this.view.el).removeClass('hide');
                }
            });
        }
    }
    controller.init(view,model);
}