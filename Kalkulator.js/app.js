//hentet ut ID'ene til alt jeg trenger fra html
const txtNum1 = document.querySelector("#num1")
const txtNum2 = document.querySelector("#num2")
const divAnswer = document.querySelector("#answer")
const btnPluss = document.querySelector("#add")
const btnMinus = document.querySelector("#minus")
const btnMulti = document.querySelector("#multi")
const btnDivide = document.querySelector("#divide")

//plussknappen
btnPluss.onclick = function(){
    let num1 = Number(txtNum1.value);
    let num2 = Number(txtNum2.value);
    let answer = num1 + num2
    divAnswer.innerHTML = answer
}
btnMinus.onclick = function(){
    let num1 = Number(txtNum1.value);
    let num2 = Number(txtNum2.value);
    let answer = num1 - num2
    divAnswer.innerHTML = answer
}
btnMulti.onclick = function(){
    let num1 = Number(txtNum1.value);
    let num2 = Number(txtNum2.value);
    let answer = num1 * num2
    divAnswer.innerHTML = answer
}
btnDivide.onclick = function(){
    let num1 = Number(txtNum1.value);
    let num2 = Number(txtNum2.value);
    let answer = num1 / num2
    divAnswer.innerHTML = answer
}



