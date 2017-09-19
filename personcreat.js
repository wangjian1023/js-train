/**
 * 
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
