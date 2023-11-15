'use strict';
// function generate(){
//     var num = document.getElementById('num').value;
//     var multiples = document.getElementById('multiples').value;
//     var p = document.getElementById('nan');
//     var head = document.getElementById('heading');
//     if(num == ''){
//         p.innerHTML = 'Enter any number';
//         head.innerHTML = '';
//         for(var i = 1;i <= 10 ; i++){
//             const str = "n" + i;
//             document.getElementById(str).innerHTML = '' ;
//         }
//     }else{
//         p.innerHTML = '';
//         head.innerHTML = num + ' Table';
//         for(var i = 1;i <= 10 ; i++){
//             const str = "n" + i;
//             document.getElementById(str).innerHTML = num+" x "+i+" = "+(num*i);
//         }
        
//     }
// }
var start = 1;

function generate(){
    try{
    var num = document.getElementById('num').value;
    var multiples = document.getElementById('multiples').value;
    var p = document.getElementById('nan');
    var head = document.getElementById('heading');
    
    function generateh4(){
        var parentdiv = document.getElementById('tabledata');
        for (let i= start; i <= multiples; i++) {
            let newh4 = document.createElement('h4');
            var childh4 = parentdiv.appendChild(newh4);
            var count = 'n' + i;
            console.log(count);
            childh4.setAttribute('id',count);
        }
        start = multiples*1+1;
    }
    
    if(num == '' || multiples == '' || multiples < 1 || multiples > 50){
        if(num == ''){
            p.innerHTML = 'Enter any number';
            head.innerHTML = '';
            for(var i = 1;i <= multiples ; i++){
                const str = "n" + i;
                document.getElementsByClassName(str).innerHTML = '' ;
            }
            for(var i = multiples*1+1; i < start; i++){
                const str = "n" + i;
                document.getElementById(str).innerHTML = '';
            }
        }else if(multiples == ''){
            p.innerHTML = 'Enter No of multiples';
            head.innerHTML = '';
            for(var i = 1;i <= multiples ; i++){
                const str = "n" + i;
                document.getElementsByClassName(str).innerHTML = '' ;
            }
            for(var i = multiples*1+1; i < start; i++){
                const str = "n" + i;
                document.getElementById(str).innerHTML = '';
            }
        }else if(multiples < 1 || multiples > 50){
            p.innerHTML = 'multiples range in between (1 - 50)';
            head.innerHTML = '';
            for(var i = 1;i <= multiples ; i++){
                const str = "n" + i;
                document.getElementsByClassName(str).innerHTML = '' ;
            }
            for(var i = multiples*1+1; i < start; i++){
                const str = "n" + i;
                document.getElementById(str).innerHTML = '';
            }
        }
    }else{
        if(start<=multiples){
            generateh4();
        }
        p.innerHTML = '';
        head.innerHTML = num + ' Table';
        for(var i = 1;i <= multiples ; i++){
            const str = "n" + i;
            document.getElementById(str).innerHTML = num+" x "+i+" = "+(num*i);
        }
        for(var i = multiples*1+1; i < start; i++){
            const str = "n" + i;
            document.getElementById(str).innerHTML = '';
        }
    }
}catch(err){
     console.log(err);
}
}
