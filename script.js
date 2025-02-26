function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')
  
  //pegar a tag image
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar a imagem light  
    img.setAttribute('src', './assets/avatar-light.png')
  } else{
    img.setAttribute('src', "./assets/avatar.png")
  } 
  if(html.classList.contains('light')){
    img.setAttribute('alt', "Mayk Brito de óculos modo light")
    } else{
    img.setAttribute("alt", "Foto de Mayk Brito padrão") 
  }
}
