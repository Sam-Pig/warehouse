window.jQuery = function(){};
  window.$ = window.jQuery
  
window.jQuery.ajax = function({url, method, body,headers}){
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest()
        request.open(method, url) 
        for(let key in headers) {
          let value = headers[key]
          request.setRequestHeader(key, value)
        }
        request.onreadystatechange = function(){
          if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
              resolve.call(undefined, request.responseText)
            }else if(request.status >= 400){
              reject.call(undefined, request)
            }
          }
        }
        request.send(body)
    })
}
  
  var myButton = document.getElementById('click');
  myButton.addEventListener('click', function(){
    window.jQuery.ajax({
      url: '/say',
      method: 'GET',
      headers: {
        'content-type': 'XXX'
      }}).then(function(x){console.log(x)},function(x){console.log(x)})
  })
  