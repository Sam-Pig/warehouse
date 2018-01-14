window.jQuery = function(){};
  window.$ = window.jQuery
  
  window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){
    let request = new XMLHttpRequest()
    request.open(method, url) 
    for(let key in headers) {
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = function(){
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          successFn.call(undefined, request.responseText)
        }else if(request.status >= 400){
          failFn.call(undefined, request)
        }
      }
    }
    request.send(body)
  }
  
  var myButton = document.getElementById('click');
  myButton.addEventListener('click', function(){
    window.jQuery.ajax({
      url: '/say',
      method: 'GET',
      headers: {
        'content-type': 'XXX'
      },
      successFn: function(x){
        console.log(x);
      },
      failFn: function(x){
        console.log(x)
        console.log(x.status)
        console.log(x.responseText)
      }
    })
  })
  