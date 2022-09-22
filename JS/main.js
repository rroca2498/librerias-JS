const articulos  = [
    {sku: 1, descripcion: "bujia K4M Megane", precio:910 , rubro: "encendido" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 2, descripcion: "manija interior Logan", precio: 3800, rubro: "accesorios" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 3, descripcion: "kit cremallera embrague R21", precio: 1010, rubro:"accesorios" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 4, descripcion: "pata caja R19", precio: 4840, rubro: "motor" , img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 5, descripcion: "ruleman delantero SNR", precio: 7500, rubro: "rodamiento", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 6, descripcion: "ruleman trasero SKF", precio: 6950, rubro: "rodamiento", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 7, descripcion: "bieleta Suran", precio: 2870, rubro: "suspension", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 8, descripcion: "amortiguador delantero Duster", precio: 15640, rubro: "suspension", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 9, descripcion: "antena universal", precio: 1500, rubro: "accesorios", img: "../Imagenes/repuestoMuestra.jpg"},
    {sku: 10, descripcion: "cables de bujia K7M", precio: 11200, rubro: "encendido", img: "../Imagenes/repuestoMuestra.jpg"}
];

const encontrado = document.querySelector("#listaProductos");

const buscador = document.querySelector("#buscador");

const buscar = document.querySelector("#buscar");

  function imprimir(repuesto){
    let codigo = "";

    let contador = 0;

    for (const item of repuesto){

        codigo= `<div class="col-3 producto text-center">

        <img src="${item.img}" alt="Imagen de ${item.descripcion}">

        <p>${item.descripcion}</p>

        <p class="precio">${item.precio}</p>

        <input type="number" id="cantidad${contador}">

        <button type="submit" id="agregar${contador}">Agregar</button>

    </div>
        
        
        `;

      encontrado.innerHTML += codigo;

        contador++;

    }
}

function busqueda(productos,palabra){

  return productos.filter(el =>
  {
    return el.descripcion.includes(palabra);
  });
}

buscar.addEventListener("click", ()=>
  {
    encontrado.innerHTML = "";
    let nuevaBusqueda = busqueda(articulos,buscador.value.toLowerCase());
    imprimir(nuevaBusqueda);
    console.log(nuevaBusqueda);
  }
)

