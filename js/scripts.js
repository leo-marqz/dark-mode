const checkbox = document.querySelector('#checkbox')


checkbox.addEventListener('change',function(event){
  if(this.checked === true){
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')

    console.log("agregado")
  }else{
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
    console.log("quitado")
  }
})