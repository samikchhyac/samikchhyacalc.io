/*
 * Implement all your JavaScript in this file!
 */
document.getElementById("button0").addEventListener("click",myFunction);
document.getElementById("button1").addEventListener("click",myFunction1);
document.getElementById("button2").addEventListener("click",myFunction2);
document.getElementById("button3").addEventListener("click",myFunction3);
document.getElementById("button4").addEventListener("click",myFunction4);
document.getElementById("button5").addEventListener("click",myFunction5);
document.getElementById("button6").addEventListener("click",myFunction6);
document.getElementById("button7").addEventListener("click",myFunction7);
document.getElementById("button8").addEventListener("click",myFunction8);
document.getElementById("button9").addEventListener("click",myFunction9);
document.getElementById("addButton").addEventListener("click",myFunction10);
document.getElementById("equalsButton").addEventListener("click",myFunction11);
document.getElementById("clearButton").addEventListener("click",myFunction12);
document.getElementById("subtractButton").addEventListener("click",myFunction13);
document.getElementById("multiplyButton").addEventListener("click",myFunction14);
document.getElementById("divideButton").addEventListener("click",myFunction15);

let val=true;
let plusMinus=false

function myFunction() {
    if (val==true){
        document.getElementById("display").value += 0;
    }else{
        document.getElementById("display").value = 0;
        val=true
    }
    plusMinus=false
}
function myFunction1() {
    if (val==true){
        document.getElementById("display").value += 1;
    }else{
        document.getElementById("display").value = 1;
        val=true
    }
    plusMinus=false
}
function myFunction2() {
    if (val==true){
        document.getElementById("display").value += 2;
    }else{
        document.getElementById("display").value = 2;
        val=true
    }
    plusMinus=false
}
function myFunction3() {
    if (val==true){
        document.getElementById("display").value += 3;
    }else{
        document.getElementById("display").value = 3;
        val=true
    }
    plusMinus=false
}
function myFunction4() {
    if (val==true){
        document.getElementById("display").value += 4;
    }else{
        document.getElementById("display").value = 4;
        val=true
    }
    plusMinus=false
}
function myFunction5() {
    if (val==true){
        document.getElementById("display").value += 5;
    }else{
        document.getElementById("display").value = 5;
        val=true
    }
    plusMinus=false
}
function myFunction6() {
    if (val==true){
        document.getElementById("display").value += 6;
    }else{
        document.getElementById("display").value = 6;
        val=true
    }
    plusMinus=false
}
function myFunction7() {
    if (val==true){
        document.getElementById("display").value += 7;
    }else{
        document.getElementById("display").value = 7;
        val=true
    }
    plusMinus=false
}
function myFunction8() {
    if (val==true){
        document.getElementById("display").value += 8;
    }else{
        document.getElementById("display").value = 8;
        val=true
    }
    plusMinus=false
}
function myFunction9() {
    if (val==true){
        document.getElementById("display").value += 9;
    }else{
        document.getElementById("display").value = 9;
        val=true
    }
    plusMinus=false
}
function myFunction10() {
    document.getElementById("display").value += '+';
    val=true
    plusMinus=true
}
function myFunction12(){
    document.getElementById("display").value = '';
    val=true
}
function myFunction11() {
    let all=document.getElementById("display").value;
    try {
        result=eval(all);
        if (isNaN(result)==false){
            document.getElementById("display").value = result;
        }else if(result==undefined){
            document.getElementById("display").value = "";
        }
        
    } catch (error) {
        document.getElementById("display").value = "Syntax Error";
    }
    
    val=false;
}
function myFunction13(){
    document.getElementById("display").value += '-';
    val=true
    plusMinus=true
}
function myFunction14(){
    val=true
    if (plusMinus==true){
        let a=document.getElementById("display").value;
        let b=a.substring(0,a.length-1)+"*"
        document.getElementById("display").value = b;
        plusMinus=false
    }else{
        document.getElementById("display").value += "*";
    }
}
function myFunction15(){
    val=true
    if (plusMinus==true){
        let a=document.getElementById("display").value;
        let b=a.substring(0,a.length-1)+"/"
        document.getElementById("display").value = b;
        plusMinus=false
    }else{
        document.getElementById("display").value += "/";
    }
}