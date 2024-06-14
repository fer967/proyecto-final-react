// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0okrkEeQ9n-749VmQ0-UXJ9qkWnivZXk",
    authDomain: "react-ecommerce-5928d.firebaseapp.com",
    projectId: "react-ecommerce-5928d",
    storageBucket: "react-ecommerce-5928d.appspot.com",
    messagingSenderId: "354280047629",
    appId: "1:354280047629:web:1e1f95995c1f5fcad5c144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);   // accedo a db

export const db=getFirestore(app);




// ---- Comienzo a trabajar ---- (ejemplo profe Lau)  
/*const db = getFirestore(app);

export async function getProducts(){
    const response = await getDocs(collection(db,'products'));
    // response es un QuerySnapshot ( no es array pero se puede iterar)
    const listaProds = [];
    response.forEach((docu) => listaProds.push({id:docu.id, ...docu.data()}))
    return listaProds;
}

export async function filterProdsByPrice(maxPrice){
    const q = query(collection(db, 'products'), where('price','<',maxPrice));
    const response = await getDocs(q);
    const listaFiltro = [];
    response.forEach(docu => listaFiltro.push({id:docu.id, ...docu.data()}));
    return listaFiltro;
}

// enviar una nueva orden de pedido
export async function addOrder(order){
    // la coleccion a la que quiero acceder
    const ordersCollection = collection(db, 'orders');
    // llamada -- (devuelve docRef)
    const docRef = await addDoc(ordersCollection, order);
    console.log('doc Ref generado:' + docRef),
    console.log('id generado:' + docRef.id);
    return docRef.id;
}

// actualizar un producto
export async function updateProduct(id, toUpdate){
    const productDoc = doc(db, 'products', id);
    try{
        await updateDoc(productDoc, toUpdate);
    } 
    catch(error){
        console.log('error' + error);
    }
} */