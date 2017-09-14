/**
 *  2017-09-14     Wang Jian
 */

 var  worker ={
      worktime: true,
      age: 2,
      salary:function(){
       console.log(`worktime=>${this.worktime} age=>${this.age} salary=>${this.salary}`)
      }
 }
worker.salary();
