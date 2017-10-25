#!/usr/bin/env node
var fs = require('fs')

var dirName = process.argv[2] // 因为传的参数是从第 2 个开始的

fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("./index.html", "<!DOCTYPE html><link rel='stylesheet' type='text/css' href='css/style.css'><script src='js/main.js'></script><title>Hello</title><h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", " var string = 'Hello World';alert(string)")

process.exit(0)