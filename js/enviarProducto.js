function enviarProducto() {
    let form = document.querySelector('form');
    let nombreProducto = form.querySelector('#nameProductForm');
    let precioProducto = form.querySelector('#priceProductForm');
    let imgProducto = form.querySelector('#imgProductForm');
    let enviar = form.querySelector('#btnSend');
    let limpiar = form.querySelector('#btnClean');

   
    precioProducto.addEventListener('input', function () {
      
        let price = this.value;

        if (price.length > 5) {
            this.value = price.slice(0, 13);
        }

    });
   
    enviar.addEventListener('click', function (event) {
        event.preventDefault(); 

        let nombre = nombreProducto.value;
        let precio = parseFloat(precioProducto.value);
        let img = imgProducto.value;

        if (nombre.trim() === '' || isNaN(precio) || img.trim() === '') {
            alert('Por favor completa todos los campos');
            return;
        }

        let nuevoProducto = {
            name: nombre,
            price: precio,
            img: img
        };

        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoProducto) 
        };

        fetch("http://localhost:3001/products", options)
            .then(response => {
                if (!response.ok) {
                    throw new Error("La solicitud no fue exitosa");
                }
                return response.json();
            })
            .then(data => {
                console.log("Producto añadido:", data);
            })
            .catch(error => {
                console.error("Error al realizar la solicitud:", error);
            });
    });

    limpiar.addEventListener('click', function (event) {
        event.preventDefault()
        nombreProducto.value = '';
        precioProducto.value = '';
        imgProducto.value = '';
    });
}

enviarProducto()

export { enviarProducto};
