window.onload = () => {
swal("Bienvenido!!!!", "Espero disfrute el contenido.");
var formulario  = document.getElementById('login');
formulario.addEventListener('submit', (e) =>{
  swal("Bienvenido!!!!", "Se inicio sesion.");
  e.preventDefault();
});
}
