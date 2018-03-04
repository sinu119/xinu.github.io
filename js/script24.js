var doc=document;

var play=doc.getElementById('play');
var pause=doc.getElementById('pause');
var box=doc.getElementById('box');
var reset=doc.getElementById('reset');

play.addEventListener('click',function(){
    var ani=null;
    var num=0;
    ani =setInterval(function(){
                
       num+=1; 
    if( num>300){
        clearInterval(ani);return;
    }    
    box.style.transform='translateX('+num+'px')'
        
                     },10);
});