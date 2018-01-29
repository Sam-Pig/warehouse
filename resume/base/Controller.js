window.Controller = function(options){
    var init = options.init;
    var object = {
        model: null,
        view: null,
        init: function(view,model){
            this.view = view;
            this.model = model;
            if(init !== null){
                init.call(this,view,model);
            }
            this.bindEvents()
        }
    }
    for(let key in options){
        if(key !== 'init'){
            object[key] = options[key]
        }
    }
    console.log(object)
    return object
    
}