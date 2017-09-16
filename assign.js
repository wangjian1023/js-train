/**
 * 
 */

var o = Object.create(null, {
    foo: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'hi'
        
    }
});

var obj = Object.assign({}, o);
console.log(obj); 
console.log(o.bar, obj.bar)
