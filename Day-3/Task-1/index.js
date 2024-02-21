function add(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1+num2;
    document.getElementById("result").innerText = result
}
function sub(){
    const num1 =  parseFloat(document.getElementById("num1").value);
    const num2 =  parseFloat(document.getElementById("num2").value);
    const result = num1-num2;
    document.getElementById("result").innerText = result
}
function mul(){
    const num1 =  parseFloat(document.getElementById("num1").value);
    const num2 =  parseFloat(document.getElementById("num2").value);
    const result = num1*num2;
    document.getElementById("result").innerText = result
}
function div(){
    const num1 =  parseFloat(document.getElementById("num1").value);
    const num2 =  parseFloat(document.getElementById("num2").value);
    if (num2 <= 0) {
        alert("Error: Division by zero");
        return;
    }
    const result = num1/num2;
    document.getElementById("result").innerText = result
}
var inputField
function number(){
     inputField = document.activeElement; 
}
function num(digit){
    // var inputField = document.activeElement;
    // console.log(inputField,"inputField")
    if(inputField){
        inputField.focus()
        inputField.value += digit;
    }
    if(!inputField){
        alert("select the input box")
    }
}
function reset(){
    document.getElementById("num1").value=null;
    document.getElementById("num2").value=null;
    document.getElementById("result").innerText ="Result";
}