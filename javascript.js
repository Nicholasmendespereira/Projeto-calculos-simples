
const resultados = []

function calcular() {
    var camp01 = document.getElementById("numero-01");
    let button01 = document.getElementById("button01");
    var res01 = document.getElementById("res-01");
    var camp02 = document.getElementById("numero-02");

   if (camp01.value == 0) {
        alert("O campo está 1 vazio!")
   }else {
        
      var resultado01 = camp01.value * camp02.value
        res01.innerHTML = `Seu Resultado é : ${resultado01}`
        resultados.push(resultado01)
       console.log(resultados)
   }
}
function calcular2() {
     var camp03 = document.getElementById("numero-03");
     let button02 = document.getElementById("button02");
     var res02 = document.getElementById("res-02");
     var camp04 = document.getElementById("numero-04");
     
     if (camp03.value == 0) {
          alert("O campo está 2 vazio!")
     }else {
          
          var resultado02 = parseInt(camp03.value) + parseInt(camp04.value)
          res02.innerHTML = `Seu Resultado é : ${resultado02}`
          resultados.push(resultado02)
          console.log(resultados)
     }
}

function calcular3() {
    var res03 = document.getElementById("res-03");
    var result01 = resultados[0]
    var result02 = resultados[1]
    if(result01 < result02) {
          res03.innerHTML = `A operação de soma é menor: ${result01}`
    }else {
          res03.innerHTML = `A operação de Multiplicação  é menor: ${result02}` 
    }
         
    
}

/*
     * dado um vetor com 3 elementos, calcular:
     * v1 = primeiro elemento do vetor multiplicado pelo segundo elemento;
     * v2 = primeiro elemento do vertor somado com o terceiro elemento;
     * O resultado será o menor valor entre v1 e v2
     * implementar o código aqui
    */