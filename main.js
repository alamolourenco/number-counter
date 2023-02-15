function count() {
    let res = document.querySelector('div#res');
    let numtxt1 = document.querySelector('input#numtxt1');
    let numtxt2 = document.querySelector('input#numtxt2');
    let num1 = Number(numtxt1.value);
    let num2 = Number(numtxt2.value);

    res.innerHTML += `<h2>Contando de ${num1} até ${num2}</h2>`;

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            res.innerHTML += ` ${i} &#x1F449;`;
        }
    } else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            res.innerHTML += ` ${i} &#x1F449;`;
        }
    } else if (num1 === num2) {
        res.innerHTML += 'Não é possível contar, pois os números são iguais';
    }
    res.innerHTML += ` &#x1F3C1;`;
}

/* Emoji de dedo apontando: &#x1F449; */
/* Emoji de bandeirinha: &#x1F3C1; */