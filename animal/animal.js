/**
 * 2017-09-22   Wang Jian
 */

function animal(){

};
animal.prototype = {
    breath : true,
    e: 'move',
    broth: function(){
        console.log('animal.broth')
    }   
};
module.exports = animal;
