/**
* 
*/

function animal(){
    
};
animal.prototype = {
    breath : true,
    e: 'move',
    broth: function(){
        console.log('animal.broth')
    }   
};

function ovipara(){
      
};
ovipara.prototype = {

    canfly: function(){
        console.log('ovipara.canfly')

    }
};

ovipara.prototype.__proto__ = animal.prototype;

function manmal(){

};
manmal.prototype = {
    v : 'viviparity',
    lactation: function(){
        console.log(`manmal.latation`)
    }

};
manmal.prototype.__proto__ = animal.prototype;

function person(){
    
};

person.prototype.__proto__ = manmal.prototype;

function brid(){
   
};
brid.prototype.__proto__ = ovipara.prototype;

function chicken(){
   
};
chicken.prototype.__proto__ = ovipara.prototype;

function dog(){
   
};
dog.prototype.__proto__ = manmal.prototype;
var o = Object.create(dog, {
    age: {
        writable: true,
        configurable: true,
        value: '1',
        enumerable: true
    },
    name:{
        writable: true,
        configurable: true,
        value: '123',
        enumerable: true
    }
});
var a = new person();
var b = new brid();
var c = new chicken();
var d = new dog();
console.log(a.v); 
a.lactation();
console.log(o.age);
d.broth();
console.log(typeof Object.create(Function.__proto__,{}));