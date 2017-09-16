/**
 *  2017-09-16   Wang jian
 */

var o = function () {
};

o.name = [1, 2, 3];
o.abj = {
    age: 12,
    sex: 'male'
};
o.f = function (){
    console.log('value')
}

Object.defineProperty(o, 'len', {
    enumerable: true,
    configurable: true,
    get: function() { return this.name.length; }
});

console.log(Object.keys(o))
console.log(Object.getOwnPropertyNames(o))

o.name.length = 10;

console.log(o.len);

