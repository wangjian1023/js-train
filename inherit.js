/**
 * 
 */

/* 
function animal(){
    animal.prototype.species = 'manmal'
}
function cat(name){
    animal.apply(this,arguments);
    this.name = name;
};
var a =new cat('12')
console.log(a);
a.species = '123';
console.log(animal.prototype.species);
*/
/*
function cat(){
    
};
function animal(){

};
function dog(){

};
cat.prototype = animal.prototype;
cat.prototype.constructor = cat;
dog.prototype =animal.prototype;
dog.prototype.constructor = dog;
cat.prototype.brith = '123';
var a = new dog ();
console.log(a.brith);
*/
/*
function Animal() {
    this.species = 'animal';
  }
  
  function Cat(name,color) {
    this.name = name;
    this.color = color;
  }
  var a =new Cat('1','2');
  console.log(a);
*/
console.log(`----------------prototype 模式--------------------`);
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

console.log(`----------------直接继承 prototype 模式-------------`);
function Animal() { }
Animal.prototype.species = "animal";

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat; 

console.log(`----------------利用空对象--------------------`);
var F = function(){};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

console.log(`---------------直接拷贝--------------------`);
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
      c[i] = p[i];
    }
    c.uber = p;
};

console.log(`---------------Object--------------------`);
function object(o) {
    function F() {}
  
    F.prototype = o;
    return new F();
};  

console.log(`---------------浅拷贝--------------------`);
function extendCopy(p) {
    var c = {};
  
    for (var i in p) {
      c[i] = p[i];
    }
  
    c.uber = p;
    return c;
}

console.log(`---------------深拷贝--------------------`);
function deepCopy(p, c) {
    var c = c || {};
  
    for (var i in p) {
      if (typeof p[i] === 'object') {
        c[i] = (p[i].constructor === Array) ? [] : {};
        deepCopy(p[i], c[i]);
      } else {
        c[i] = p[i];
      }
    }
    return c;
  }
