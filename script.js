function validateForm (){ const inputEmail = document.getElementById( 'email')
    const inputError = document.getElementById( 'email-error')
    if (inputEmail.value ===''){
        inputError.textContent ='le champ ne doit pas être vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = "20px"
    }
    else if ( inputEmail.value.length < 6){
        inputError.textContent ='le nombre de caractère doit être superieur à 6'
        inputError.textContent ='le champ ne doit pas être vide'
        inputError.style.textAlign = 'center'
        inputError.style.color = 'red'
        inputError.style.fontSize = "20px"
    }
    else{
        inputError.textContent=""

    }
inputEmail.addEventListener ('input',()=> {
    inputError.style.display= inputEmail.value==="" ?'block':'none'
});

inputEmail.addEventListener ('blur',() => {
nputError.style.display= inputEmail.value==="" ?'block':'none'
});


    const inputMessage = document.getElementById( 'message')
    const textError = document.getElementById( 'message-error')
    if (inputMessage.value ===''){
        textError.textContent ='le champ ne doit pas être vide'
        textError.style.textAlign = 'center'
        textError.style.color = 'red'
        textError.style.fontSize = "20px"
    }
   else{
    textError.textContent=''
   }
    return false
    
    
}
    