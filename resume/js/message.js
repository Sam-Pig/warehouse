!function(){
    let view = document.querySelector('#messagePart');
    console.log(this)
    let model = {
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
            let messageFromDatabase = new AV.Query('Message');
            return messageFromDatabase.find() //Promise对象
        },
        //创建数据
        save: function(){
            let content = document.querySelector('textarea').value;
            let username = document.querySelector('input[name=username]').value;
            let Message = AV.Object.extend('Message');
            let date = new Date();
            let time = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
            if(content.split(" ").join("").length){
                if(username.split(" ").join("").length === 0){
                    username = "匿名用户";
                }
                let message = new Message();
                return message.save({
                    'username': username,
                    'content': content,
                    'time': time
                })
            } 
        }
    };
    let controller = {
        model: null,
        view: null,
        myForm:null,
        loadMessage: function(){
            this.model.fetch().then((messages) =>{
                let contentArray = messages.map((item)=>{return item.attributes})
                contentArray.forEach((item)=> {
                    let li = document.createElement('li');
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    p1.innerText = `${item.username}——${item.time}`;
                    p2.innerText = `${item.content}`;
                    let messageList = this.view.querySelector('#messageList');
                    messageList.appendChild(li);
                    li.appendChild(p1);
                    li.appendChild(p2);
                });
            });
        },
        bindEvent: function(){
            this.myForm = this.view.querySelector('#messageForm');
            this.myForm.addEventListener('submit',(e)=>{
                e.preventDefault();
                this.addMessage();
            })
        },
        addMessage: function(){
            this.model.save().then((object)=>{
                let li = document.createElement('li');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                p1.innerText = `${object.attributes.username}——${object.attributes.time}`;
                p2.innerText = `${object.attributes.content}`;
                let messageList = this.view.querySelector('#messageList');
                messageList.appendChild(li);
                li.appendChild(p1);
                li.appendChild(p2);
                this.view.querySelector('textarea').value = "";
                this.view.querySelector('input[name=username]').value = "";
              })
        },
        init:function(view,model){
            this.view = view;
            this.model = model;
            this.model.initAV();
            this.loadMessage();
            this.bindEvent();
        }
    }
    controller.init(view,model);
}.call()

/*
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/