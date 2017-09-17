/**
 *  2017-09-16  Wang Jian
 */
var b = 2;
var a = function() {
    var c = {
        age: b++
    };

    return c;
}
var c = a();
var d = a();

console.log(c, d);


var a = function(x){
    var origin = 1;

    return  function (){
        var obj = {
            age: origin
        };
        origin = origin + a;
        return obj;
     
    }

};
var fun = a(2);
console.log(fun(), fun(), fun()) 
    