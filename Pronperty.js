/**
 *  2017-09-16  Wang Jian
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
        enumerable: true
    }
});

var n = Object.defineProperty(o, 'n', {
    enumerable: true,
    writable: true,
    value: 1
});

n.n = 10;

Object.defineProperty(o, 'q', {
    enumerable: true,
    writable: true,
    value: 2
});

console.log(n, o)

var n = [1,2];

var d = Object.defineProperty(n, '4', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 128
});
console.log(n)

var s = Object.defineProperty(n, 'length', {
    enumerable: true,
    writable: true,
    configurable: true,
    value: 2
    
});
console.log(n,s)



