/**
 * 2017-09-22   Wang Jian
 */

const animal = require('./animal');
function manmal(){

};
manmal.prototype = {
    v : 'viviparity',
    lactation: function(){
        console.log(`manmal.latation`)
    }

};
manmal.prototype.__proto__ = animal.prototype;
module.exports = manmal;

