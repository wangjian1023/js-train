/**
 * 
 */

const _ = require ('lodash'); 
console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
console.log(_.compact([0, 1, false, 2, '', 3]));
console.log(_.difference([2, 1], [2, 3]));
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual));
console.log(_.drop([1, 2, 3]));
console.log(_.drop([1, 2, 3],5));
console.log(_.drop([1, 2, 3],0));
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];
 
console.log(_.dropRightWhile(users, function(o) { return !o.active; }));
console.log(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }));
console.log(_.dropRightWhile(users, ['active', false]));
console.log(_.dropRightWhile(users, 'active'));




console.log(`-----------dropWhile---------------------`);
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];
console.log(_.dropWhile(users, function(o) { return !o.active }));
console.log(_.dropWhile(users, { 'user': 'barney', 'active': false }));
console.log(_.dropWhile(users, 'active'));

console.log(`-------------fill-------------------`);
var array = [1, 2, 3];
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
console.log(_.fill(Array(3), 2));

console.log(`------------findIndex-------------------`);
console.log(_.findIndex(users, function(o) { return o.user == 'barney'; }));
console.log(_.findIndex(users, { 'user': 'fred', 'active': false }));
console.log(_.findIndex(users, 'active'));
console.log(_.findIndex(users, ['active', false]));

console.log(`---------------------findlastIndex--------------`);
console.log(_.findLastIndex(users, function(o) { return o.user == 'pebbles'; }));
console.log(_.findLastIndex(users, ['active', false]));
console.log(_.findLastIndex(users, { 'user': 'barney', 'active': true }));

console.log(`------------------------first ->head--------------`);
console.log(_.head([1, 2, 3]));
console.log(_.head([]));

console.log(`--------------------flatten----------------------`);
console.log(_.flatten([1, [2, [3, [4]], 5]]));

console.log(`--------------------flattendeep-----------------`);
console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

console.log(`----------------flattendeepth--------------------`);
var array = [1, [2, [3, [4]], 5]];
console.log(_.flattenDepth(array, 1));
console.log(_.flattenDepth(array, 2));

console.log(`--------------fromPairs--------------------------`);
console.log(_.fromPairs([['a', 1], ['b', 2],['c', 3]]));

console.log(`---------------------head------------------------`);
console.log(_.head([1, 2, 3]));
console.log(_.head([]));

console.log(`-------------------indexof----------------------`);
console.log(_.indexOf([1, 2, 1, 2], 2));
console.log(_.indexOf([1, 2, 1, 2], 2, 2));

console.log(`------------------initial-------------------------`);
console.log(_.initial([1, 2, 3]));

console.log(`----------------intersection-----------------------`);
console.log(_.intersection([2, 1], [2, 3]));

console.log(`----------------intersectionBy----------------------`);
console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));

console.log(`---------------intersectionWhith---------------------`);
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 3 }];
var others = [{ 'x': 1, 'y': 2 }, { 'x': 1, 'y': 2 }];
console.log(_.intersectionWith(objects, others, _.isEqual));

console.log(`---------------------join--------------------------`);
console.log(_.join(['a', 'b', 'c'], '~'));

console.log(`------------------last---------------------------`);
console.log(_.last([1, 2, 3]));

console.log(`-----------------lastIndexO-----------------------`);
console.log(_.lastIndexOf([1, 2, 1, 2], 2));
console.log(_.lastIndexOf([1, 2, 1, 2], 2, 2));










  