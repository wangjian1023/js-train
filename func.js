/**
 *  2017-09-16   Wang Jian
 */
var a = function qwe(){
    return  function (x){
        return x + 2
    }
};

var b = a();
var c = b(2);
var d = a();
console.log(c);
b.a = 'cm';
d.a = 'cn';
console.log(b.a, d.a);
console.log(a()(5))
