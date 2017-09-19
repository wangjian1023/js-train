/**
*  2017-09-19    Wang Jian
*/

var person = function (x){
    this.age = x;  
};
var we = new person (10)
var wang = new person (20);
person.prototype.getAge = function(){
    return this.age;
}
console.log(we.getAge(), wang.getAge());

we.class = function(){
    return 2;
};
wang.cd = function(){
    return 4;
};
console.log(we.class, wang.cd);
console.log(typeof we.prototype);
console.log(we.get)
console.log(`we.__proto__ == Function.prototype =>${we.__proto__ == Function.prototype}`)
console.log(we.class.__proto__ === Function.prototype);
console.log(wang.cd.__proto__ === Function.prototype);

//we.__proto__ = null;
console.log(we.getAge());
we.getAge = function(){
    return this.age + 1;
}
console.log(we.getAge());
