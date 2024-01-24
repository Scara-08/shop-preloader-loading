import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./pages/Cart/Cart";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header"
import "./style.css";
import { useState } from "react";
import Category from "./pages/category/category";



const App = () => {
const [cartData,setcartData] = useState([])

const addCart = (obj)=>{
    const idx = cartData.findIndex(item =>{
        return obj.id ===item.id
    });


    if(idx < 0){
        setcartData([
            {
                ...obj,
                count: 1
            },
            ...cartData
        ])
    }else {
        cartData[idx].count = cartData[idx].count + 1 ; 
        setcartData([...cartData]); 
    
    }
}



    return (
        <div>
           < BrowserRouter>
             <Header/>

          < Routes>
          <Route path='/' element={<Home addCart={addCart} />} />
          <Route path="/cart" element={<Cart 
          cartData={cartData}
          setcartData={setcartData}
          addCart={addCart}
          />}/>
          <Route path="/product/:id" element={<Detail addCart={addCart}/>}/>
          <Route path='/category/:category' element={<Category addCart={addCart} />} />
          
          </ Routes>


           </ BrowserRouter>
            
        </div>
    );
}

export default App;
