/**
 *  2017-09-14     Wang Jian
 */

 var  worker ={
      worktime: true,
      age: 2,
      salary:function(){
       console.log(`worktime=>${this.worktime} age=>${this.age} salary=>${this.salary}`)
      }
 }
worker.salary();

var o = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar:{
        configurable: false,
        get: function(){ return 10;},
        set: function(value){
            console.log(`setting'o.bar'to, ${value}`);
        }
    }
});
console.log(`o${typeof o}`);
console.log(`${Object.getPrototypeOf(o)}`)
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o,'foo')));
o.name = 2;
console.log(Object.keys(o));

var arr =['a', 'b', 'c'];
arr['name'] = 'hello';
arr.age = 12;
console.log(arr[`name`]);
console.log(arr.name)

var a = function (){
   console.log('asd');
}
a.age = 34
console.log(`typeof a ${typeof a}`, Object.getPrototypeOf(a))
console.log(`a.age ${a.age}`);
console.log(Object.getOwnPropertyDescriptor(a,'age'));
a();
