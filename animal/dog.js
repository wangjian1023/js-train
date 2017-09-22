/**
 * 2017-09-22     Wang Jian
 */

const manmal = require('./manmal');
function dog(){

};
dog.prototype.__proto__ = manmal.prototype;
module.exports = dog;