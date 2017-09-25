/**
 * 
 */

var a = app =>{
    this.age = 12;

}; 
console.log(a.prototype);

/*var q = new a();
console.log(q);*/
a();
console.log(a, a.age, this.age);