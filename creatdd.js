/**
 *  2017-09-20   Wang Jian
 */

var o = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello',
        enumerable: true
    },
    bar:{
        writable: true,
        configurable: true,
        value: 'hi',
        enumerable: false
    }
});
var s =Object.create(o,{
    we :{
        writable : true,
        configurable : true,
        enumerable : true,
        value : 123 
    }
})
console.log(s)
console.log(s.bar)

console.log(`-------------number------------`)
var q = 1;
Number.prototype.age = 1;
console.log(q.age)
console.log(`--------------object--------------`)
/*Object.prototype.qw = 2;
console.log(s.qw)*/

console.log(`-----------freeze-----------`)
var w = Object.freeze(s);
s.value = 123;
console.log(w.value);
console.log(s.value);

console.log(`--------------seal------------------`)
Object.seal(o)
o.age = 123;
o.foo = 23;
console.log(o)
