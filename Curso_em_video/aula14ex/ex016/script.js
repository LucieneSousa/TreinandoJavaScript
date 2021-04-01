function contar() {
  let inicio = Number(document.querySelector('input#initial').value);
  let fim = Number(document.querySelector('input#end').value);
  let cont = Number(document.querySelector('input#passo').value);
  let res = document.querySelector('div#res');
  let c = inicio;

  res.innerHTML = `Contagem: `;
  //res.innerHTML += `${c}`;
  
  if(inicio.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
    res.innerHTML = `Impossível contar!`;
   // alert('Por favor, insira um numero!');
    
  } else if(inicio < fim ){
    //contagem crescente
    for (c = inicio; c <= fim; c = c + cont) {
      res.innerHTML += ` ${c} \u{1F449}`;
    }  
    
  } else {    
    //contagem regressiva
    for (c = inicio; c >= fim; c = c - cont) {
      res.innerHTML += `${c} \u{1f449}`;
    } 
  }
  res.innerHTML += `\u{1F3c1}`;
  

  /*while (c <= fim) {
    c = c + cont;
    res.innerHTML += `${c}`;
  }*/
}
