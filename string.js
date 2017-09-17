/**
 * 
 */
var string = '   hello hhhh   ';

console.log('----------charAt------------')
console.log(`The character at index 0 is ${string.charAt(0)}`)
console.log(`The character at index -1 is ${string.charAt(-1)}`)
console.log(`The character at index 6 is ${string.charAt(6)}`)
console.log(`The character at index 3 is ${string.charAt(3)}`)

console.log('-----------concat-----------')
console.log(string.concat(`wang`))

console.log('-----------includes---------')
console.log(string.includes('hello,'));
console.log(string.includes('hello', 1)); 
console.log(string.includes('hello', 0));
console.log(string.includes('hello', -1));
console.log(string.includes('hello', 7));

console.log('-----------endsWith---------------')
console.log(string.endsWith('hello,'));
console.log(string.endsWith('h', 1));
console.log(string.endsWith('hello', 10));

console.log('---------indexOf------------------')
console.log(string.indexOf('hello', 0));
console.log(string.indexOf('hello', 3));
console.log(string.indexOf('hello', 8));
console.log(string.indexOf('hello', -1));

console.log('---------lastIndexOf--------------')
console.log(string.lastIndexOf('o',));
console.log(string.lastIndexOf('o', -1));
console.log(string.lastIndexOf('o', 5));
console.log(string.lastIndexOf('o', 6));

console.log('--------------padEnd--------------')
console.log(string.padEnd(10));
console.log(string.padEnd(10, 'foo' ));
console.log(string.padEnd(1));
console.log(string.padEnd(7, '12345' ));

console.log('----------padStart-----------------------')
console.log(string.padStart(10));
console.log(string.padStart(10, '12345'));
console.log(string.padStart(1));
console.log(string.padStart(7, '12345'));

console.log('-----------repeat-----------------------')
//console.log(string.repeat(-1));
console.log(string.repeat(0));
console.log(string.repeat(2));
console.log(string.repeat(3.5));

console.log('---------------replace-------------------')
console.log(string.replace(`hello`,`hi`));

console.log(`------------slice-----------------------`)
console.log(string.slice(1, 3));
console.log(string.slice(20));
console.log(string.slice(-1, 5));
console.log(string.slice(1, 4));
console.log(string.slice(4));

console.log(`---------------split--------------------`)
console.log(string.split('',2));
console.log(string.split('',4));
console.log(string.split('h',2));
console.log(string.split('e',-1));

console.log(`---------------startsWith---------------`)
console.log(string.startsWith('h', 0));
console.log(string.startsWith('he', 0));
console.log(string.startsWith('o', -1));
console.log(string.startsWith('he', 1));

console.log(`---------------substr---------------`)
console.log(string.substr(-1,2));
console.log(string.substr(-2,2));
console.log(string.substr(2,2));

console.log(`---------------substring------------`)
console.log(string.substring(0,4));
console.log(string.substring(4,0));
console.log(string.substring(4));
console.log(string.substring(0,6));

console.log(`---------------trim----------`)
console.log(string.trim('hello '));  

console.log(`---------------trimLeft--------`)
console.log(string.length)
console.log(string.trimLeft())

console.log(`---------------trimright--------`)
console.log(string.length)
console.log(string.trimRight())







