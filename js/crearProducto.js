import { eliminarProducto } from "./eliminarProducto.js";

function crearProducto() {
    let producto = document.getElementById('products');

    fetch("http://localhost:3001/products")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                let svg = document.createElement('img');
                svg.src = '../img/btn-borrar.svg';

                let productHTML = `
                    <div class="cart" id="${element.id}">
                        <img src="${element.img}" alt="img-producto">
                        <p>${element.name}</p>
                        <div class="price">
                            <p>$ ${element.price}</p>
                        </div>
                    </div>
                `;

                let div = document.createElement('div');
                div.innerHTML = productHTML;
                div.querySelector('.price').appendChild(svg);
                

                producto.appendChild(div);

                svg.addEventListener('click', (event) => {
                    event.preventDefault(); 
                    eliminarProducto(element.id);
                });
            });
        })
        .catch(error => console.error("Error:", error));
}


crearProducto();

export { crearProducto };
