
// --- +++ querySelector = Devuelve el primer elemento descendiente del nodo que coincide con los selectores. +++ ---
const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(hamburguesa);

hamburguesa.addEventListener('click', ()=>{
  // alert('click');
  menu.classList.toggle('spread')  // con esto cada vez que toco el ícono del menu,voy a poner o a quitarle la clase 'spread'
} )

window.addEventListener('click', e=>{
  // -- ++++ Este evento manda a console.log el elemento al que le demos click +++ ---- 
  // console.log(e.target);
  if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguesa){
    menu.classList.toggle('spread')  // con esto cada vez que toco el ícono del menu,voy a poner o a quitarle la clase 'spread'
  }
})



