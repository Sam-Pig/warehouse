{
    var uploader = Qiniu.uploader({
        runtimes: 'html5',      // 上传模式，依次退化
        browse_button: 'pickfiles',        // 上传选择的点选按钮，必需
        uptoken_url: 'http://localhost:9999/uptoken',
        // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
        // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
        // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
        // uptoken : '<Your upload token>', // uptoken是上传凭证，由其他程序生成
        // uptoken_url: '/uptoken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
        // uptoken_func: function(){    // 在需要获取uptoken时，该方法会被调用
        //    // do something
        //    return uptoken;
        // },
        get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
        // downtoken_url: '/downtoken',
        // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
        // unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
        // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
        domain: 'p469r9yj3.bkt.clouddn.com',     // bucket域名，下载资源时用到，必需
        container: 'container',             // 上传区域DOM ID，默认是browser_button的父元素
        max_file_size: '10mb',             // 最大文件体积限制

        dragdrop: true,                     // 开启可拖曳上传
        drop_element: 'container',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
        chunk_size: '4mb',                  // 分块上传时，每块的体积
        auto_start: false,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
        //x_vars : {
        //    查看自定义变量
        //    'time' : function(up,file) {
        //        var time = (new Date()).getTime();
                  // do something with 'time'
        //        return time;
        //    },
        //    'size' : function(up,file) {
        //        var size = file.size;
                  // do something with 'size'
        //        return size;
        //    }
        //},
        init: {
            'FilesAdded': function(up, files) {
                var fileName;
                var sourceLink;
                plupload.each(files, function(file) {
                    var domain = up.getOption('domain');
                    fileName = file.name;
                    sourceLink = "http://"+domain +"/"+ encodeURIComponent(fileName);
                    window.eventHub.emit('upload',{
                        url: sourceLink,
                        name: file.name,
                        album: '',
                    });
                    let data = {
                        songInformation: true,
                        album: false
                    }
                    $('.album').removeClass('active').siblings('.songInformation').addClass('active');
                    window.eventHub.emit('addOrAlbum',data);
                    window.eventHub.emit('activeButton',null);
                });
                $('#up_load').on('click', function(){
                    if($.trim(fileName) && $.trim($('input[name=album]').val())){
                        uploader.start();
                    }
                });
            },
            'BeforeUpload': function(up, file) {
                
            },
            'UploadProgress': function(up, file) {
                   // 每个文件上传时，处理相关的事情
                   window.eventHub.emit('beforeUpload',false)
            },
            'FileUploaded': function(up, file, info) {
                   // 每个文件上传成功后，处理相关的事情
                   // 其中info.response是文件上传成功后，服务端返回的json，形式如：
                   // {
                   //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                   //    "key": "gogopher.jpg"
                   //  }
                   // 查看简单反馈
                   window.eventHub.emit('afterUpload',true)
            },
            'Error': function(up, err, errTip) {
                   //上传出错时，处理相关的事情
            },
            'UploadComplete': function() {
                   //队列文件处理完毕后，处理相关的事情
            },
        }
    });
    
}