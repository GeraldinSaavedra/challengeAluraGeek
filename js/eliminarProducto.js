function eliminarProducto(productId) {
    // Enviar una solicitud DELETE al servidor para eliminar el producto
    fetch(`http://localhost:3001/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log("El producto ha sido eliminado");
            // Eliminar el producto del DOM
            let productToRemove = document.getElementById(productId);
            productToRemove.remove();
        } else {
            console.error("Error al eliminar el producto:", response.status);
        }
    })
    .catch(error => console.error("Error:", error));
}


export { eliminarProducto };