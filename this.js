/**
 *    2017-09-18    Wang Jian
 */

/*function add(x){
    return this.a + x;
}
var a = 2;
console.log(add(2))
*/

/*var obj = {
    a: 2,
    add:function(x){
        return function(){
            console.log(`this.a -> ${this.a}`)
        return this.a + x;
        }
    }

}
console.log(obj.add(2)());
setTimeout(obj.add(2),2000);
*/
/*var  obj ={
    a: 1,
    add : function(x){
        this.b = 2;
        return this.a + x;
    }
}
console.log(obj.add(5),obj.b);
*/


var  obj = {
    a: 1,
    add : function(x){
        this.b = 2;
        this.add = undefined;
        return this.a + x;
    }
};
console.log(obj.add(5),obj.b);
console.log(obj.add(5),obj.b);
