/**
 * 2017-09-22     Wang Jian
 */

const manmal = require('./manmal');
function person(){

};
person.prototype.__proto__ = manmal.prototype;

module.exports = person;