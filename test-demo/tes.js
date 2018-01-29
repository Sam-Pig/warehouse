#!/usr/bin/env node                              

console.log("----------in demo.js-----------");
let fs = require('fs');                             //加载文件模块
let dirName = process.argv[2];                      //获取第一个参数 文件夹名称
let exit;                                           //demox.js脚本退出变量返回值

if(fs.existsSync('./' + dirName)){                  //判断文件夹名在创建的路径中是否存在
  console.log(dirName + '已经存在');                 //存在时，提示并退出
  exit = 1;
}else{                                              //不存在时，开始创建index.html、style.css、main.js各文件
  fs.mkdirSync('./' + dirName);                     //并分别写入指定的初始化内容
  process.chdir('./'+dirName);
  fs.mkdirSync('css');
  fs.mkdirSync('js');

  const html = "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>",
        css = "h1{color: red;}",
        js = "var string = 'Hello World';\nalert(string);";

  fs.writeFileSync('./index.html',html);
  fs.writeFileSync('./css/style.css',css);
  fs.writeFileSync('./js/main.js',js);

  console.log('create $1 dir success :)');          //创建成功提示信息
  exit = 0;
}
console.log("---------out demo.js-----------");

process.exit(exit);     