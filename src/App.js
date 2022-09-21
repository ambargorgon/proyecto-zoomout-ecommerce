import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter} from "react-router-dom";
import CartProvider from "./context/CartContext";
import { products } from "./mock/products";

// import {collection, addDoc} from 'firebase/firestore'
// import {db} from './firebaseConfig'
// const ref = collection(db, "products")

// products.map((prod)=>addDoc(ref, prod ))




const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
