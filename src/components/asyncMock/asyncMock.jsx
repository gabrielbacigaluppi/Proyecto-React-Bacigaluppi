const ecommerceProducts = [
    {
      id: 1,
      title: "Camiseta",
      price: 19.99,
      description: "Una cómoda camiseta de algodón",
      image: "https://afaar.vtexassets.com/arquivos/ids/156022/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_01_laydown.jpg?v=638133089958370000",
      stock: 10,
      category: "Ropa"
    },
    {
      id: 2,
      title: "Pantalones",
      price: 39.99,
      description: "Pantalones elegantes para ocasiones formales",
      image: "https://http2.mlstatic.com/D_NQ_NP_729627-MLA53269627205_012023-O.webp",
      stock: 5,
      category: "Ropa"
    },
    {
      id: 3,
      title: "Zapatos",
      price: 59.99,
      description: "Zapatos de cuero duraderos y con estilo",
      image: "https://http2.mlstatic.com/D_NQ_NP_929339-MLA42214885837_062020-O.webp",
      stock: 8,
      category: "Calzado"
    },
    {
      id: 4,
      title: "Bolso",
      price: 29.99,
      description: "Un elegante bolso para complementar tu look",
      image: "https://nikearprod.vtexassets.com/arquivos/ids/490288/DA1746_010_A.jpg?v=638150956487270000",
      stock: 3,
      category: "Accesorios"
    },
    {
      id: 5,
      title: "Reloj",
      price: 99.99,
      description: "Un reloj moderno y sofisticado",
      image: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2023/01/18/16740587264944.jpg",
      stock: 2,
      category: "Relojes"
    },
    {
      id: 6,
      title: "Gafas de Sol",
      price: 24.99,
      description: "Gafas de sol con protección UV",
      image: "https://m.media-amazon.com/images/I/41xblYxoXOL.jpg",
      stock: 15,
      category: "Accesorios"
    },
    {
      id: 7,
      title: "Chaqueta",
      price: 79.99,
      description: "Chaqueta impermeable para días lluviosos",
      image: "https://m.media-amazon.com/images/I/61KrhhwsGZL._AC_UF894,1000_QL80_.jpg",
      stock: 6,
      category: "Ropa"
    },
    {
      id: 8,
      title: "Billetera",
      price: 14.99,
      description: "Billetera de cuero con múltiples compartimentos",
      image: "https://piet.com.ar/wp-content/uploads/PIET-Billetera-Euro-3.0-03.jpg",
      stock: 9,
      category: "Accesorios"
    },
    {
      id: 9,
      title: "Vestido",
      price: 49.99,
      description: "Un elegante vestido para ocasiones especiales",
      image: "https://d2r9epyceweg5n.cloudfront.net/stores/893/445/products/vestido-silvia-01r1-363996caff2216358916548079056851-1024-1024.jpg",
      stock: 4,
      category: "Ropa"
    },
    {
      id: 10,
      title: "Mochila",
      price: 34.99,
      description: "Mochila resistente y espaciosa",
      image: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf86fa191/products/JS_TYP7-54M/JS_TYP7-54M-1.JPG",
      stock: 7,
      category: "Accesorios"
    },
    {
      id: 11,
      title: "Botas",
      price: 69.99,
      description: "Botas de invierno para mantener los pies calientes",
      image: "https://sarkanyar.vtexassets.com/arquivos/ids/160858/Vtex-2FSARKANY-20win-2023-2F80-20--20POUR-20NG-2FIMG_0337rew.jpg?v=638119869750830000",
      stock: 3,
      category: "Calzado"
    },
    {
      id: 12,
      title: "Blusa",
      price: 29.99,
      description: "Blusa de tela suave y ligera",
      image: "https://media.glamour.mx/photos/6190700aa6e030d6480f9137/master/w_1600%2Cc_limit/228024.jpg",
      stock: 11,
      category: "Ropa"
    },
    {
      id: 13,
      title: "Cartera",
      price: 19.99,
      description: "Cartera con diseño elegante y funcional",
      image: "https://http2.mlstatic.com/D_NQ_NP_957805-MLA54133978692_032023-O.webp",
      stock: 6,
      category: "Accesorios"
    },
    {
      id: 14,
      title: "Sandalias",
      price: 29.99,
      description: "Sandalias cómodas y frescas para el verano",
      image: "https://http2.mlstatic.com/D_NQ_NP_719500-MLA51061177733_082022-O.webp",
      stock: 9,
      category: "Calzado"
    },
    {
      id: 15,
      title: "Pulsera",
      price: 9.99,
      description: "Pulsera de diseño moderno y ajustable",
      image: "https://stylewatch.vtexassets.com/arquivos/ids/219460/Pulsera_Swarovski_SV5636447_01.jpg?v=637981728296130000",
      stock: 15,
      category: "Accesorios"
    },
    {
      id: 16,
      title: "Sudadera",
      price: 39.99,
      description: "Sudadera con capucha y bolsillos",
      image: "https://desakato.es/wp-content/uploads/2021/12/Sudadera-Animales_web_both.jpg",
      stock: 5,
      category: "Ropa"
    },
    {
      id: 17,
      title: "Gorra",
      price: 14.99,
      description: "Gorra deportiva con diseño transpirable",
      image: "https://www.goorinbros.com.ar/media/catalog/product/cache/8/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/o/gorra-goorin-baseball-the-panther-101-0381-blk-2-min_1.jpg",
      stock: 12,
      category: "Accesorios"
    },
    {
      id: 18,
      title: "Zapatos Deportivos",
      price: 79.99,
      description: "Zapatos deportivos para correr y hacer ejercicio",
      image: "https://pocholin.shop/cdn/shop/products/1_efabdf6b-3834-4529-a258-6786af1abf3e.jpg?v=1678370381",
      stock: 8,
      category: "Calzado"
    },
    {
      id: 19,
      title: "Blazer",
      price: 59.99,
      description: "Blazer elegante para reuniones de negocios",
      image: "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/7045_3_1660660015.jpeg?itok=s24TLnKs",
      stock: 3,
      category: "Ropa"
    },
    {
      id: 20,
      title: "Bufanda",
      price: 19.99,
      description: "Bufanda suave y abrigada para el invierno",
      image: "https://http2.mlstatic.com/D_NQ_NP_664271-MLA49657796450_042022-O.webp",
      stock: 10,
      category: "Accesorios"
    }
  ];
  
function getData(){
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(ecommerceProducts);
        }, 1000);
    })
}

export function getProductsData(idURL){

    return new Promise((resolve,reject)=>{
        const productsRequested = ecommerceProducts.find((item) => item.id === parseInt(idURL));

        setTimeout(() => {
            resolve(productsRequested)
        }, 1000);

    })
}

export function getCategoryData(categoryURL){
    return new Promise((resolve,reject) =>{
        const categoryRequested = ecommerceProducts.filter((item) => {
            return item.category ===categoryURL
        })

        setTimeout(() => {
            resolve(categoryRequested)
        }, 1000);
    })

}


export default getData;