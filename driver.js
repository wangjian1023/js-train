/**
 *  2017-09-15    WangJian
 */
var device = ['/dev/display','/dev/console']; 
function open (dev){
    for (var n = 0; n < driver.length; n++){
        if (driver[n].type === dev) {
            driver[n].open();
            return n;
        }
    }
    
};

function read (td) {
    return driver[td].read()
}

function write (td, sno){
    return driver[td].write(sno)
}

function close (td){
    return driver[td].close()
}

var driver =[
{
    type :'/dev/console',
    open : function(){
        console.log(`console open`)
    },
    write : function(sno){
      console.log(`console write ${sno}`)
    },
    read :function(){
      console.log('console read')
    },
    close :function(){
      console.log('console close')  
    }
},  
{
    type :'/dev/display',
    open : function(){
        console.log('display open')
    },
    write : function(){
      console.log('display write')
    },
    read :function(){
      console.log('display read')
    },
    close :function(){
      console.log('display close')  
    }
}
];   

var td = open('/dev/display');
if(td >= 0){
write(td, 'hello');
close(td);
};
var td = open('/dev/console');
if(td >= 0){
write(td, 'hello');
close(td);
}