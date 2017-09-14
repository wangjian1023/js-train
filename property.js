/**
 *  2017-09-14     Wang  Jian
 */

 var dd = {
    name: 'xs',
    age: '14',
    city:'tianjin',
};
for (var key in dd) {
    console.log(key);
    console.log(`key=${key},value=${dd(key)}`);
}