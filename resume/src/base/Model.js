window.Model = function(options){
    let resourceName = options.resourceName
    return {
        initAV: function(){
            var APP_ID = 'fPNjK7UqI6CmzRjz0aJTLJHj-gzGzoHsz';
            var APP_KEY = 'fn9UsTazxn7ycAtS1ir8loNN';
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            });
        },
        //获取数据
        fetch: function(){
            let messageFromDatabase = new AV.Query(resourceName);
            return messageFromDatabase.find() //Promise对象
        },
        //创建数据
        save: function(object){
            let X = AV.Object.extend(resourceName);
                let x = new X();
                return x.save(object)
        } 
    }
}

export default Model;