/**
 *  2017-09-16   Wang Jian
 */

var a = function (x){
     return function(y){
         return x/y;

    }
}
var b = a(4);
var c = b(8)
console.log(c)
  