let p = document.getElementById('peso');
let a = document.getElementById('altura');
let s = document.getElementById('saida');

function calcular() {
    
    if (p.value || a.value) {
        let peso = Number.parseFloat(p.value);
        let altura = Number.parseFloat(a.value);

        let imc = peso / altura ** 2;

        
        
        resultado(imc.toFixed(2));

    } else {
        alert('Preencha todos os Campos');
    }
    p.value = '';
    a.value = '';
}

function resultado(imc) {
    console.log(imc)
    if (imc <= 18.5) {
        return s.innerHTML = 'Abaixo do Peso';
    } else if (imc <= 24.9) {
        return s.innerHTML = 'Peso Normal';
    } else if (imc <= 29.9) {
        return s.innerHTML = 'Sobrepeso';
    } else if (imc <= 34.9) {
        return s.innerHTML = 'Obsidade Grau 1';
    } else if (imc <= 39.9) {
        return s.innerHTML = 'Obsidade Grau 2';
    } else {
        return s.innerHTML = 'Obsidade Grau 3';
    }

}

