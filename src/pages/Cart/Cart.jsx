import './cart.css';


const Cart = ({cartData, setCartData, addCart}) =>{
    const minusCart = (obj) =>{
        if (obj.count > 1 ){
            obj.count--;
            setCartData([...cartData])
        }else{
            setCartData(cartData.filter(item=>{
                return item.id !==obj.id
            }));
        }
    }
    const deleteCart = (obj) =>{
        setCartData()(cartData.filter(item=>{
            return item.id !==obj.id
        }));
    }

    return (
        <section className="cart">
        <div className="container">
            <p>total: <b>${
                cartData.reduce((acc,rec)=>{
    return acc + rec.price * rec.count
                              
                }, 0).toFixed(2)
                }</b> </p>
            {
                cartData.map(item=>{
                    return <div key={item.id} className="cart-item">
                        <div className="cart-item-ledt">
                            <img src={item.image}  alt="" />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                       <div className="cart-item-right">
                        <div>
                            <button onClick={()=>{
                                minusCart(item);
                            }}>-</button>
                            <span>{item.count}</span>
                            <button onClick={()=>{
                                addCart(item);
                            }}>+</button>
                        </div>
                        <p>price: ${(item.price * item.count).toFixed(2)}</p>
                        <button onClick={()=>{

                            deleteCart(item);
                        }}>delete</button>
                       </div>

                    </div>
                })
            }
        </div>
        </section>
    )
}


export  default Cart;

