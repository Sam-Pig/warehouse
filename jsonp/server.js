var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

 











  console.log('HTTP 路径\n' + path)

  if(path === '/'){
    var string = fs.readFileSync('./index.html','utf8')
    var amount = fs.readFileSync('./db','utf8')
    string = string.replace('&&&amount&&&',amount)
    response.setHeader('content-Type','text/html;charset=UTF-8')
    response.write(string)
    response.end()
  }else if(path === '/style'){
    var string = fs.readFileSync('./style.css','utf8')
    response.setHeader('content-Type','text/css;charset=UTF-8')
    response.write(string)
    response.end()
  }else if(path === '/script'){
    var string = fs.readFileSync('./main.js','utf8')
    response.setHeader('content-Type','text/javascript;charset=UTF-8')
    response.write(string)
    response.end()
  }else if(path === '/pay'){
      var amount = fs.readFileSync('./db','utf8')
      var newAmount = amount -1
      fs.writeFileSync('./db',newAmount)
      response.setHeader('content-Type','text/javascript;charset=UTF-8')
      response.statusCode = 200;
      response.write(`
      ${query.callback}.call(undefined,'success')
      `)
      response.end()
  }else{
    response.statusCode = 404
    response.setHeader('content-Type','text/html;charset=UTF-8')
    response.write('找不到对应路径')
    response.end()
  }








  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)