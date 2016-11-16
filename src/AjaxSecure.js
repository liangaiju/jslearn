/**
* JSONP 跨域请求
**/
//接收回调的数据处理函数
function refreshPrice(data) {
   
    console.log('当前价格：' +
        data['0000001'].name +': ' +
        data['0000001'].price + '；' +
        data['1399001'].name + ': ' +
        data['1399001'].price);
}

//动态加载js，触发请求跨域的js，js返回回调函数refreshPrice（data）
function getPrice() {
    var
        js = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    js.src = 'http://api.money.126.net/data/feed/0000001,1399001?callback=refreshPrice';
    head.appendChild(js);
}

//动态请求
getPrice();