/**
 *  2017-09-14      WangJian
 */

var a = 0;
for (var i  = 0; i <= 10000;  i++ ) {
    if  (i % 3 ==0) {
        a = a + i;
    }
}
console.log(a); 

var a = [1, 1];
for (var n = 2; n <= 100; n++ ){
    a[n] = a[n-1] + a[n-2];
}
console.log(a);


var b = [1, 1];
for (var n = 2; n <= 20; n++){
    b[n] = b[n - 1] + 2 * b[n - 2];
}
console.log(b);
