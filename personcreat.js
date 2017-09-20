/**
 *   2017-09-19   Wang Jian
 */

var person  = {
    a : 1
};
person.getage = function(){
    return 0;
};

var a = Object.create(person,{
    age: {
        value : 20
    }
});
console.log(a.__proto__);
console.log(a.getage());

a.__proto__.name = 1;
console.log(person.name);
var b = Object.create (person,{})
b.__proto__.sex = 3;
console.log(a.sex);

console.log(a.age, b.age);
console.log(`---------------Array------------------`)
var m =[1, 2, 3];
console.log(typeof m);
console.log(m.__proto__ === Object.prototype);
console.log(m.__proto__.__proto__ === Object.prototype);
console.log(m.__proto__ === Array.prototype);

console.log(`-----------string--------------------`)
var n = 'name';
console.log(n.__proto__.__proto__ === Object.prototype);
console.log(n.__proto__ === String.prototype);
console.log(n.__proto__ === Array.prototype);
console.log(`String.__proto__ =>${String.__proto__}`)
console.log(`Object.__proto__ => ${Object.__proto__} `)

console.log(`-----------------Number-------------`)
var b = 12;
console.log(b.__proto__.__proto__ === Object.prototype);
console.log(b.__proto__ === Number.prototype);
console.log(b.__proto__.__proto__);
console.log(Number.prototype.__proto__ === Object.prototype)

console.log(`-------------------Boolean------------`)
var c = true;
console.log(`c.__proto__ =>${c.__proto__}`);
console.log(`c.__proto__.__proto__ =>${c.__proto__.__proto__}`);
console.log(c.__proto__.__proto__ === Object.prototype);
console.log(c.__proto__ === Boolean.prototype);
console.log(c.__proto__ === Function.prototype);

console.log(`------------Constuctor------------------------`);
console.log(`Function.prototype.constructor === Function => ${Function.prototype.constructor=== Function}`);
console.log(`Function.constructor => ${Function.constructor}`);