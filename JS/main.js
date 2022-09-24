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

const desplegarCarrito = document.querySelector(".productosEnElCarrito");

const carrito = [];

  articulos.forEach((producto) => {
    const div = document.createElement('div');
    div.classList.add('producto');

    // Quera abreviarlo asi pero no me funcionabam en que me estoy equivocando?

    // let {sku,descripcion,precio,rubro,img} = item;

    // div.innerHTML = `
    // <img src="../Imagenes/repuestoMuestra.jpg" alt="Imagen de ${descripcion}">
    // <h3>${descripcion}</h3>
    // <p>$${precio}</p>
    // <button id="agregar${sku}">Agregar</button>
    // `
    
    div.innerHTML = `
    <img src="../Imagenes/repuestoMuestra.jpg" alt="Imagen de ${producto.descripcion}">
    <h3>${producto.descripcion}</h3>
    <p>$${producto.precio}</p>
    <button id="agregar${producto.sku}">Agregar</button>
    `
    encontrado.appendChild(div);

    const boton = document.getElementById(`agregar${producto.sku}`);

    boton.addEventListener("click", () => {

      agregarAlCarrito(producto.sku);
      console.log(producto.sku);
    })

  })

  const agregarAlCarrito = (prodId) => {
    

    

    const item = articulos.find((prod) => prod.sku === prodId);
    carrito.push(item);
    console.log(carrito);
    

    const itemCarrito = document.createElement('p');

      itemCarrito.innerHTML = `
      
      Usted tiene 1 unidad de ${item.descripcion} que tiene un valor de $${item.precio}
      `
      desplegarCarrito.appendChild(itemCarrito);

    
  }

 
  