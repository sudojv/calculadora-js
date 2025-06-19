var operações = document.getElementsByName('operação')

var modoSoma = operações[0]
var modoSubtração = operações[1]
var modoMultiplicação = operações[2]
var modoDivisão = operações[3]

modoSoma.addEventListener('change', soma)
modoSubtração.addEventListener('change', subtração)
modoMultiplicação.addEventListener('change', multiplicação)
modoDivisão.addEventListener('change', divisão)

var sinal = document.getElementById('sinal')
var botãoContar = document.getElementById('contar')

function soma() {
    sinal.innerText = '+'
    botãoContar.value = 'Somar'
    contar()
}

function subtração() {
    sinal.innerText = '-'
    botãoContar.value = 'Subtrair'
    contar()
}

function multiplicação() {
    sinal.innerText = 'x'
    botãoContar.value = 'Multiplicar'
    contar()
}

function divisão() {
    sinal.innerHTML = '&div;'
    botãoContar.value = 'Dividir'
    contar()
}

botãoContar.addEventListener('click', contar)

function contar() {
    var txtOperador = document.getElementById('operador')
    var txtOperando = document.getElementById('operando')
    
    var operador = Number(txtOperador.value)
    var operando = Number(txtOperando.value)
    
    var resultado = document.getElementById('resultado')

    var erros = document.getElementById('erros')

    erros.innerText = ' '

    if(modoSoma.checked) {
        resultado.innerText = (operador + operando).toString()
    } else if(modoSubtração.checked) {
        resultado.innerText = (operador - operando).toString()
    } else if(modoMultiplicação.checked) {
        resultado.innerText = (operador * operando).toString()
    } else if(modoDivisão.checked) {
        if(operando <= 0) {
            erros.innerText = 'Não é póssivel dividir por zero ou negativo!'
        } else {
            resultado.innerText = (operador / operando).toString()
        }
    }
}