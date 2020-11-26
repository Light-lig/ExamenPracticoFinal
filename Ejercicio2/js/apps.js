
$("#form-registro").on("submit",function(event){
    event.preventDefault();
    swal("Good job!", "Has creado tu cuenta con exito", "success");
    document.getElementById("form-registro").reset();
 });
