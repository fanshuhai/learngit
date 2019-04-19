
// console.log(flag);
// var flag='123';

// for (var i = 0; i < 3; i++){

// }
// console.log(i)÷

// let b=3,
//     a=2;
// [a,b]=[b,a]

// console.log(a,b);

// let qwe=[
//     'width',
// 	'height'
// ]
	

// let qaz=new Set(qwe)
// console.log(qaz)

// const set=new Set([
// 	['set',1],
// 	['foo',1]
// 	])

// console.log(set)
// const map=new Map();
// map.set('foo','123');
// map.set('bar','456');
// // console.log(map);
// const objstr={
// 	'foo':2323,
// 	'bar':23423
// }
// console.log(Object.values(objstr));
// console.log(Object.keys(objstr));
// function foo (a,...params) =>{
// 	console.log(a,params)
// };
// foo(1,2,3,4,5,6);
// let arr=[1,2,3,4,5]
// console.log(...arr);
// function foo(a){
// 	console.log(a)
// }
// foo(...arr)

// 箭头函数
// let foo=v => v;
// console.log(foo(4));
// let foo1=(a,b,c,d)=>console.log(a+b+c+d)
// console.log(foo1(1,2,3,4));

// function foo(){
// 	console.log(this)
// }
// foo();
// let foo=()=>console.log(this);
// foo();

// let xw={
// 	name:'xw',
// 	sex:'boy',
// 	age:'18',
// 	say:function () {
// 		console.log('myname:'+this.name+'--mysex:'+this.sex+'--age:'+this.age)
// 	}
// }
// let xh={
// 	name:'xh',
// 	sex:'girl',
// 	age:'18',
// }


// xw.say.bind(xh)();


// let xw={
// 	name:'xw',
// 	sex:'boy',
// 	age:'18',
// 	say:function (school,parent) {
// 		console.log('myname:'+this.name+'--mysex:'+this.sex+'--age:'+this.age+'--school:'+school+'--parent:'+parent)
// 	}
// }
// let xh={
// 	name:'xh',
// 	sex:'girl',
// 	age:'18',
// }


// xw.say.bind(xh)('3424','esrwe');

// xw.say.call(xh,'66666','dassdfnln');

// xw.say.apply(xh,['66666','dassdfnln']);

// const props = {
//     className: 'tiger-button',
//     loading: '',
//     clicked: true,
//     disabled: 'disabled'
// }
// const { loading='qwerqwe', clicked } = props;


// console.log(loading);
// console.log(clicked);


// function add(x=20,y=30){
// 	x=30;
// 	return x+y;
// }

// console.log(add());

// const props = {
//   size: 1,
//   src: 'xxxx',
//   mode: 'si'
// }


// const { size, ...others } = props;

// console.log(others)



// const add=(...more)=>{
// 	console.log(more)
// 	return more.reduce((m,n)=>m+n);
// }

// let qq=[1,2,4,5,7,8,8,9];
// console.log(add(qq))
// console.log(qq.reduce((m,n)=>m+n));
// console.log(...qq);
// let qq=[1,2,4,5,7,8,8,9,9,1,2,3];

// console.log([...new Set(qq)])
// console.log(Array.from(new Set(qq)))


// const numbers=(nums)=>nums;
// console.log(numbers(1,2,3,4,5,6,6,6))

// function Car () {
// 	this.name='qwe';
// 	this.brand='qwe';
// 	this.age='qwe212';
// }
// Car.prototype={
// 	start:function (argument) {
// 		return this.name
// 	},
// 	stop:function  (argument) {
// 		return this.age
// 	}
// }

// var car = new Car();


// class Car {
// 	constructor(){
// 		this.name='qwe666';
// 		this.brand='qwe77777';
// 		this.age='qwe212';
// 	}


// 	getName(){
// 		return this.age;
// 	}

// 	getBrand(){
// 		return this.brand;
// 	}
// }

// var car = new Car();

// console.log(car.getName())
// console.log(car.getBrand())
// console.log(car.name)
// console.log(Car.prototype)
// console.log(car.__proto__)
// console.log(car.__proto__==Car.prototype)


// function foo () {
// 	// body...
// 	return ()=>{
// 		return()=>{
// 			return()=>{
// 				console.log('id',this.id)
// 			}
// 		}
// 	}
// }

// var f=foo.call({id:1});

// console.log(f.call({id:2})()())

var arr=[1,1,1,1,3,3,3,4,5,5,6,5,6,8,8,8,8,9,9,9,1]

// var newArr=arr.reduce(function(pre,cur){
// 	if(pre.indexOf(cur)=='-1'){
// 		pre.push(cur)
// 	}

// 	return pre
// },[])
// 优化
var newArr=arr.reduce(function(pre,cur){
	pre.indexOf(cur)=='-1' && pre.push(cur);

	return pre
},[])

console.log(newArr)
var gitupdata='我是新的git';

var gitupdata1='我是新的git1';







































