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


//对象继承  protype
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};


var p = document.getElementById('js');
p.innerText = 'test';
p.style.fontWeight = 'bold';
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';

var newElement = document.createElement('div');
p.appendChild(newElement);

