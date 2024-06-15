let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let resultado = document.getElementById('resultado');
let mayor = 0;
let menor = 0;

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

function mayorMenor() {
    let resta = mayor - menor;
    if (n1.value < n3.value) {
        mayor = n3.value;
        menor = n1.value;
        resultado.textContent = `El resultado es: ${multiplication}`;
        return;
    } else if (n1 > n3) {
        mayor = n1.value;
        menor = n3.value;
        resultado.textContent = resta;
        console.log(resta);
        return;
    }
}

btn1.onclick = function() {
    if (n1.value < n3.value && n2.value > 0 && n1.value !== n2.value) {
        let multiplication = n1.value * n2.value * n3.value;
        resultado.textContent = `La operación realizada es: ${n1.value} * ${n2.value} * ${n3.value} = ${multiplication}`;
        return;
    } else if (n2.value === 0) {
        mayorMenor();
        return;
    } else if (n1.value === n2.value) {
        let suma = parseInt(eval(n1.value + n2.value + n3.value));
        resultado.textContent = `La operación realizada es: ${n1.value} + ${n2.value} + ${n3.value} = ${suma}`;
        return;
    }
}