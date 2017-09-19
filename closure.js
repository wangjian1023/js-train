/**
 *  2017-09-16   Wang Jian
 */

var a = function (x){
     return function(y){
         return x/y;

    }
}
var b = a(8);
var c = b(4)
console.log(c)
  