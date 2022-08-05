/* Validação formulário de contato */
if( document.forms["formContato"] != undefined ){

    
    var form = document.forms["formContato"];
    
    form.addEventListener("submit", function(evt){
        
        var formValido = true;
        
        if(!NaoVazio(form.Nome_Completo.value)){
            form.Nome_Completo.className = "nao_valido";
            formValido = false;
        }
        
        if(!NaoVazio(form.Mensagem.value)){
            form.Mensagem.className = "nao_valido";
            formValido = false;
        }
        
        if(!ValidarEmail(form.Email.value)){
            form.Email.className = "nao_valido";
            formValido = false;
        }
        
        
        if(!formValido){
            evt.preventDefault();
        }
        
    });
    
    
    var inputs = document.querySelectorAll("form[name=formContato] input[type=text]");
    
    for(var i = 0; i < inputs.length; i++){
        
        inputs[i].addEventListener("keypress", function(){
            this.className = "";
        });
    }
    
    var textarea = document.querySelector("form[name=formContato] textarea");
    
    textarea.addEventListener("keypress", function(){
        this.className = "";
    });
    
}



/* Funções */
function ValidarEmail(valorEmail){
    if(
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 &&
        valorEmail.lastIndexOf(".") > valorEmail.indexOf("@")
    ){
        return true;
    }else{
        return false;
    }
}
function NaoVazio(texto){
    if(texto.trim().length > 0){
        return true;
    }else{
        return false;
    }
}