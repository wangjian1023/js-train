/**
 *  2017-09-14             wangjian
 */

var arr =('1', '2', '3', '4', '5');

arr.forEach(function(ele){
    console.log(ele * 2);
})

console.log(arr.map(function(ele){
    console.log( 2 * ele);
}))

console.log(arr.filter(function(ele){
    console.log(4 >= ele);
}))

console.log(arr.reduce(function(prev,next) {
    console.log(prev + next);
}))

console.log(arr.every(function(){
    console.log(item < 4);
}))

console.log(arr.some(function(){
    console.log(item > 3);
}))
