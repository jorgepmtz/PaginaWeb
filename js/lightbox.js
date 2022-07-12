// --- +++ querySelector = Devuelve el primer elemento descendiente del nodo que coincide con los selectores. +++ ---
const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburguesa1 = document.querySelector('.hamburguesa');

// console.log(imagenes);
// console.log(imagenesLight);
// console.log(contenedorLight);

imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    // ---- solo para validar que esta recibeindo el click ----
    // alert('Ouch, me dolio') 
    // ----- Solo para validar que esta recibiendo el src (source) de cada imagen ---- entonces ya quitamos el console.log()
    // console.log(imagen.getAttribute('src'));
    aparecerImagen(imagen.getAttribute('src'));
  })
})

contenedorLight.addEventListener('click', (e) => {
  // --- ++++ Solo para validar que e esta recibiendo el target, es decir el elemnto donde se esta haciendo click ++++ ----
  // console.log(e.target)
  if (e.target != imagenesLight) {
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage')
    hamburguesa1.style.opacity = '1'
  }
})


//  --- ++++ Función para establecer una imagen ++++ ---- 
const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle('show');
  imagenesLight.classList.toggle('showImage');
  hamburguesa1.style.opacity = '0'
}


