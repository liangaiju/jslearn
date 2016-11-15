//Object js
var Man{
	name : '男人',
	age : 30,
	doing : function(){
		console.log(this.name + ' say hi ~')
	}
};

function createMan(name){
	var m = Object.create(Man);
	m.name = name;
	return m;
}


var zcl = createMan('zcl');
zcl.