/**
 * 
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
