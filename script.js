
function testar(){

    let contMadeline=0;
    let contBriar=0;
    let contApple=0;
    let contRaven=0;

    let radios = document.querySelectorAll('input[type="radio"]')
    console.log(radios)

    radios.forEach(e =>{
        if(e.checked){

            if(e.value == "madeline"){
                contMadeline++;
            } else if(e.value == "briar"){
                contBriar ++;
            } else if(e.value == "apple"){
                contApple ++;
            }else if(e.value == "raven"){
                contRaven ++;
            }
            
        } 
    })


    let resultado = `Madeline = ${contMadeline}<br>
    Briar = ${contBriar}<br> Apple = ${contApple}<br>
    Raven = ${contRaven}<br>`;

    document.getElementById("resultado").innerHTML = resultado;

    localStorage.setItem('madeline', contMadeline)
    localStorage.setItem('briar', contBriar)
    localStorage.setItem('apple', contApple)
    localStorage.setItem('raven', contRaven)


    let maior = 0;
     let pagina;

if (contMadeline > maior) {
    maior = contMadeline;
    pagina = 'madeline';
}
if (contBriar > maior) {
    maior = contBriar;
    pagina = 'briar';
}
if (contApple > maior) {
    maior = contApple;
    pagina = 'apple';
}
if (contRaven > maior) {
    maior = contRaven;
    pagina = 'raven';
}

setTimeout(() => {
    window.open(pagina + '.html');
}, 5000);



}
