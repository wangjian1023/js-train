/**
 * 2017-09-22     Wang Jian
 */

const ovipara = require('./ovipara');
function bird(){

};
bird.prototype.__proto__ = ovipara.prototype;

module.exports = bird;