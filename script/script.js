let p = document.getElementById('peso');
let a = document.getElementById('altura');
let s = document.getElementById('saida');
let b = document.getElementById('body');

function calcular() {
    
    if (p.value || a.value) {
        let peso = Number.parseFloat(p.value);
        let altura = Number.parseFloat(a.value);

        let imc = peso / altura ** 2;

        resultado(imc.toFixed(2));

    } else {
        alert('Preencha todos os Campos');
        s.innerHTML = '';
        b.style.backgroundColor = '';
    }
    p.value = '';
    a.value = '';
}

function resultado(imc) {
    console.log(imc)
    if (imc <= 18.5) {
        b.style.transition = '2s'
        b.style.backgroundColor = 'red'
        s.style.color = 'black';
        s.style.fontWeight= 'bold';
        return s.innerHTML = 'Abaixo do Peso';
    } else if (imc <= 24.9) {
        b.style.transition = '2s'
        b.style.backgroundColor = 'green'
        s.style.color = 'black';
        s.style.fontWeight= 'bold';
        return s.innerHTML = 'Peso Normal';
    } else if (imc <= 29.9) {
        b.style.transition = '2s'
        b.style.backgroundColor = 'rgba(28, 212, 77, 0.622)';
        s.style.color = 'black';
        s.style.fontWeight= 'bold';
        return s.innerHTML = 'Sobrepeso';
    } else if (imc <= 34.9) {
        b.style.transition = '2s'
        b.style.backgroundColor = 'rgb(202, 99, 99)';
        s.style.color = 'black';
        s.style.fontWeight= 'bold';
        return s.innerHTML = 'Obsidade Grau 1';
    } else if (imc <= 39.9) {
        b.style.transition = '2s'
        b.style.backgroundColor = 'rgb(214, 64, 64)';
        s.style.color = 'black';
        s.style.fontWeight= 'bold';
        return s.innerHTML = 'Obsidade Grau 2';
    } else {
        b.style.transition = '2s'
        b.style.backgroundColor = 'rgb(244, 0, 0)';
        s.style.color = 'black';
        s.style.fontWeight= 'bold';
        return s.innerHTML = 'Obsidade Grau 3';
    }

}

