const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')

const buttonAdd = document.getElementById('add');
const butonMinus = document.getElementById('minus');
const butondivide = document.getElementById('divide');
const butonmultiply = document.getElementById('multiply');

const resultado = document.querySelector('h2');


n1.addEventListener('change', (event) => {

    n1.textContent = parseFloat(event.target.value)

})
n2.addEventListener('change', (event) => {


    n2.textContent = event.target.value

})
console.log(n1.textContent);


function validarNumeros() {

    if ((!n1.value || !n2.value) || (n1.value == 0 && n2.value == 0)) {
        resultado.textContent = "Preencha os dois numeros!"
        return false
    }
    return true
}

buttonAdd.addEventListener('click', (event) => {

    if (!validarNumeros()) {
        return
    }
    resultado.textContent = `O resultado é : ${parseFloat(n1.textContent) + parseFloat(n2.textContent)}`;

})

butonMinus.addEventListener('click', (event) => {
    if (!validarNumeros()) {
        return
    }
    resultado.textContent = `O resultado é : ${parseFloat(n1.textContent) - parseFloat(n2.textContent)}`;

})

butondivide.addEventListener('click', (event) => {

    if (!validarNumeros()) {
        return
    }
    resultado.textContent = `O resultado é : ${parseFloat(n1.textContent) / parseFloat(n2.textContent)}`;

})

butonmultiply.addEventListener('click', (event) => {

    if (!validarNumeros()) {
        return
    }
    resultado.textContent = `O resultado é : ${parseFloat(n1.textContent) * parseFloat(n2.textContent)}`;

})




