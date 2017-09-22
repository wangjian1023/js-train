/**
 * 2017-09-22     Wang Jian
 */

const ovipara = require('./ovipara');
function chicken(){

};
chicken.prototype.__proto__ = ovipara.prototype;

module.exports = chicken;