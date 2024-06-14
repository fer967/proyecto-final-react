
const products = [
    {
        id:1,
        title:'guitarra',
        price:'3000',
        category:'cuerdas',
        description:'acustica',
        stock:'5',
        image:''
    },
    {
        id:2,
        title:'bateria',
        price:'2000',
        category:'percusion',
        description:'acustica',
        stock:'4',
        image:''
    },
    {
        id:3,
        title:'flauta',
        price:'1000',
        category:'vientos',
        description:'traversa',
        stock:'7',
        image:''
    },
    {
        id:4,
        title:'piano',
        price:'5000',
        category:'teclados',
        description:'de cola',
        stock:'2',
        image:''
    },
    {
        id:5,
        title:'bajo',
        price:'2500',
        category:'cuerdas',
        description:'electrico',
        stock:'5',
        image:''
    },
    {
        id:6,
        title:'bombo',
        price:'1500',
        category:'percusion',
        description:'leguero',
        stock:'4',
        image:''
    },
    {
        id:7,
        title:'trompeta',
        price:'3000',
        category:'vientos',
        description:'piccolo',
        stock:'6',
        image:''
    },
    {
        id:8,
        title:'teclado',
        price:'4000',
        category:'teclados',
        description:'midi',
        stock:'3',
        image:''
    },
];

export const getProducts = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};

export const getCategory = (category)=>{
    return products.filter((prod)=>prod.category==category);
};






/*export const getBooks = async () => {
    const respuesta = await fetch('https://api.itbook.store/1.0/new' );
    const data = await respuesta.json();
    console.log(data)   //---- OK ----
    return data;
};*/


