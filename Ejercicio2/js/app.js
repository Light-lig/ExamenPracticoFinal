window.onload = () => {
//swal("Bienvenido!!!!", "Espero disfrute el contenido.");
var formulario  = document.getElementById('login');
formulario.addEventListener('submit', (e) =>{
  swal("Bienvenido!!!!", "Se inicio sesion.");
  e.preventDefault();
});
gsap.from("#play", {duration: 1, y: 300, x:300, x:300, y:300, opacity: 0, scale: 0.5});
gsap.from("#titulo", {duration: 1, y: -300, opacity: 0, scale: 0.5});
gsap.from("#precio", {duration: 3, y: 300, x:-300, opacity: 0, scale: 0.5, ease: "bounce"});
}
