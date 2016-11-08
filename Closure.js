function count1(){
	var arr = [];
	for(var i=1;i<3;i++){
		arr.push(function(){return i});
	}
	return arr;
}
var r = count1();
r[0]();//3
r[1]();//3

var farr = [];
farr.push(
	function (x){console.log(x);return x;}(5)
);

//闭包计数器
function create_couner(init){
	var x = init || 0;
	return {
		inc : function (){
			x += 1;
			return x;
		}
	}
}

var c1 = create_couner();
c1.inc();//1
c1.inc();//2

var c2 = create_couner(10);
c1.inc();//11
c1.inc();//12