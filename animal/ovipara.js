/**
 * 2017-09-22   Wang Jian 
 */

const animal = require('./animal');
function ovipara(){

};
ovipara.prototype = {
    
        canfly: function(){
            console.log('ovipara.canfly')
    
        }
    };
ovipara.prototype.__proto__ = animal.prototype;    
module.exports = ovipara;