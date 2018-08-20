
function get(url, data, callback){
       //创建异步对象
       var xhr = new XMLHttpRequest();
       //判断data是否为空
       if(data){
           url=url+'?'+data;
       }
       //设置请求行
       xhr.open('get',url);
       //设置请求头(get可以省略)
       //注册回调函数
       xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&xhr.status==200){
                //调用传递的回调函数
                callback(xhr.responseText);
            }
       }
       //发送请求主体
       xhr.send(null);
}
function post(url, data, callback){
       //创建异步对象
       var xhr = new XMLHttpRequest();
       //设置请求行
       xhr.open('post',url);
       //设置请求头(post有数据发送才需要设置请求头)
       //判断是否有数据发送
       if(data){
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       }
       //注册回调函数
       xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 //调用传递的回调函数
                 callback(xhr.responseText);
             }
       }
       //发送请求主体
       xhr.send(data);
}
function ajax_tool(url,type,data,callback){
       //创建异步对象
       var xhr = new XMLHttpRequest();
       //如果是get并且有数据
       if(type=='get'&&data){
            url=url+'?'+data;
       }
       //设置请求行
       xhr.open(type,url);
       //设置请求头(post有数据发送才需要设置请求头)
       //判断是否有数据发送
       if(type=='post'&&data){
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       }
       //注册回调函数
       xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 //调用传递的回调函数
                 callback(xhr.responseText);
             }
       }
       //发送请求主体
       //判断不同的请求类型
       xhr.send(type=='post'?data:null);
}
function ajax(option){
       //创建异步对象
       var xhr = new XMLHttpRequest();
       //如果是get并且有数据
       if(option.type=='get'&&option.data){
            option.url=option.url+'?'+option.data;
       }
       //设置请求行
       xhr.open(option.type,option.url);
       //设置请求头(post有数据发送才需要设置请求头)
       //判断是否有数据发送
       if(option.type=='post'&&option.data){
             xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
       }
       //注册回调函数
       xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 //接收返回的数据类型
                 var type = xhr.getResponseHeader('Content-Type');
                 //json格式
                 if(type.indexOf('json')!=-1){
                      option.callback(JSON.parse(xhr.responseText));
                 }
                 //xml格式
                 else if(type.indexOf('xml')!=-1){
                      option.callback(xhr.responseXML);
                 } 
                 //普通格式
                 else{
                      option.callback(xhr.responseText);
                 }
             }
       }
       //发送请求主体
       //判断不同的请求类型
       xhr.send(option.type=='post'?option.data:null);
}
