console.log('sss');
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
//error
//function cteate_couner2(init){
//	var x = init || 0;
//	inc : function (){
//		x += 1;
//		return x;
//	}
//	return inc;
//}

var c1 = create_couner();
c1.inc();//1
c1.inc();//2

var c2 = create_couner(10);
c1.inc();//11
c1.inc();//12

//箭头函数
//x => x*x;

//(x,y) => x*x +y*y;

//var fn3 = (x,y,...rest) => {
//var i, sum = x+y;
//for (var i = rest.length - 1; i >= 0; i--) {
//	sum += rest[i];
//}
//return sum;
//}

//this指向生效,call()、apply()第一个参数无法对this重新绑定
//var obj = {
//	birth: 1990,
//	getAge: function(){
//		var b = this.birth;
//		var fn = ()=>new Date().getFullYear() - this.birth; //this指向obj
//		return fn();
//	}
//}



//Object js
//var Man{
//	name : 'zcl',
//	age : 30,
//	doing : function(){
//	
//	}
//}




