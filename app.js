function sum(number1,number2){
    return number1 + number2
}
function sub(number1,number2){
    return number1 - number2
}
let op = process.argv[2]
let num1 = process.argv[3]*1
let num2 = process.argv[4]*1
if(op == "sum"){
    console.log(sum(num1,num2))
}
else if (op == "sub"){
    console.log(sub(num1,num2));
}