function login() {

    var teste = 'teste@hotmail.com'
    var email = document.getElementById('email')
    var cliente = 'thais'
    var nome = document.getElementById('nome')

    
    if (nome.value == cliente && email.value == teste) {
        document.getElementById('tt').innerHTML = 'Confirmado'
        window.location.href = 'menu.html'

    } else {
        document.getElementById('th').innerHTML = 'Negado'
        window.location.href = '#'
    }

   
}


 /*err = document.getElementById('error')

    function valid() {
        return nome.value == client && email.value == emailClient
    }


    document.getElementById('submit').onclick = function (){
        
        valid() ? '' : err.innerHTML = 'Usuario ou Email Incorreto'
    }*/