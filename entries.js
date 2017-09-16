/**
 *  2017-09-16   Wang Jian
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
console.log(Object.entries(o));
console.log(Object.getOwnPropertyNames(o))
console.log(Object.keys(o))
