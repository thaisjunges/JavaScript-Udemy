  /*function calcular(){
        var media = 7
        var nota = document.getElementById('numero1').value
         if (nota != '') {

         if (nota >= media) {
            document.getElementById('media').innerHTML = "Média: Aprovado " + nota
            
            let h1 = document.createElement("h1")
            h1.innerHTML = "teste"
            document.body.appendChild(h1);
    
        } else {
            document.getElementById('media').innerHTML = 'Média: Reprovado ' + nota
        }
        }
         }*/

         function calcular(){
            var nota1 = document.getElementById('numero1').value
            var nota2 = document.getElementById('numero2').value
            var nota3 = document.getElementById('numero3').value

            var media = 7
            var calculo = (parseInt(nota1) + parseInt(nota2)+ parseInt(nota3)) /4
            var resultado = calculo.toFixed(1)

            if (resultado >= media) {
                document.getElementById('media').innerHTML = 'Média: Aprovado ' + calculo
            } else {
                document.getElementById('media').innerHTML = 'Média: Reprovado ' + calculo 
            }
            
         }