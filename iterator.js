/**
 *  2017-09-14             Wang Jian
 */

var arr = [1, 2, 3, 4, 5];

arr.forEach(function(ele){
   console.log(ele);
});

console.log(arr.map(function(ele){
    return 2 * ele;
}));

console.log(arr.filter(function(i){
    return i >= 4;
}));

console.log(arr.reduce(function(a,w){
    return a - w ;
}));

console.log(arr.every(function(i){  
    return i< 4;
}));

console.log(arr.some(function(i){
    return i> 3;
}));
