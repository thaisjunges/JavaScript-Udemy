

    function login() {
        
    err = document.getElementById('error')
    var teste = 'teste@hotmail.com'
    var email = document.getElementById('email')
    var cliente = 'thais'
    var nome = document.getElementById('nome')

        
        return nome.value == cliente && email.value == teste
        
    }


    document.getElementById('menu').onclick = function(){
        window.location.href = 'menu.html'
        
        login() ? err.innerHTML = 'Usuario e Email' : err.innerHTML = 'Usuario ou Email Incorreto'
    }