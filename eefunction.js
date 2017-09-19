var s = function(){
    this.age = 12;
}

var a = {};
s.apply(a);

console.log(a.age);
