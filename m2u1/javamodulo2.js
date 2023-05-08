function contarCaracteres() {
    var texto = document.getElementById("texto").value;
    var cantidad = document.getElementById("cantidad");
    cantidad.innerHTML = texto.length;
}//innerhtml sirve para modificar un elemento html