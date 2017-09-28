/**
 *  2017-09-23      Wang Jian
 */

function asyncFunction() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Async Hello world');
      }, 2000);
    });
}
  
asyncFunction().then(function (value){
    console.log(`${value}`);
    return value;
}).then(function (value){
    console.log(`${value}`)
    return {
        value : `qe`,
        age : 12
    }
}).then(function (value){
    console.log(`${value.value} - ${value.age}`)
    return value, 2;
}).catch(function (error) {
    console.log(`catch -${error}`);
});    


/*function asyncFunction() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve('Async Hello world');
      }, 2000);
    });
}
asyncFunction().then(function (value){
    console.log(`${value}`);
    return value;
}).then(function (value){
    console.log(`${value}`)
    return {
        value : `qe`,
        age : 12
    }
}).then(function (s){
    console.log(`${value.value}`-`${value.age}`);
    console.log(a);
}).catch(function (error) {
    console.log(`catch -${error}`);
    return 'hello'; 
}).then(function(q){
    console.log(`${q}`);
});   
 */