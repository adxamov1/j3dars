var elinp1 = document.querySelector('.inp1')
var elinp2 = document.querySelector('.inp2')
var elSel = document.querySelector('.sel')
function fn(){
    var num1 = elinp1.value
    if(num1 % 3 == 0 || num1 % 7 == 0){
        console.log('bolinadi');
    }else{
        console.log('bolinmaydi');
    }
}