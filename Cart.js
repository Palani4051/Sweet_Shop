import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Cart = ({ cart, setCart, Data }) => {
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState(cart);
  const [Msg, setMsg] = useState(false);
  const [Msg1, setMsg1] = useState(false);

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + parseInt(curr.price) * curr.quantity, 0));
  }, [products]);

  const handleQuantityChange = (id, operation) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          let newQuantity = product.quantity;
          if (operation === 'increment') {
            newQuantity += 1;
          } else if (operation === 'decrement' && product.quantity > 1) {
            newQuantity -= 1;
          }
          return {...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };
  
  const notify = () => {
    if (Object.values(Data).some(data => data !== undefined && data !== null)) {
      toast.success('Your order placed successfully!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: 'green',
          color: '#fff',
        },
      });
      setMsg1(true);
    } else {
      setMsg(true);
    }
  };
console.log(Data.address)
  return (
    <div className="container">


<div className="row mt-5">
  {products.map((product) => (
    <div className="col-md-4 col-sm-6 mb-3" key={product.id}>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="Product Image" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            <span className="price">Rs :{product.price}</span>
          </p>
          <div className="d-flex justify-content-between mb-2">
            <button className='addbtn ' onClick={() => handleQuantityChange(product.id, 'increment')}>Add 1+</button>
            <button className='removebtn ms-4' onClick={() => handleQuantityChange(product.id, 'decrement')} disabled={product.quantity <= 1}>Reduce 1-</button>
          </div>
          <div className="d-flex justify-content-between">
            <span>Quantity - </span>
            <span>
              <span className="badge badge-danger bg-success ms-1 ms-0 p-2">{product.quantity}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="cart-container text-center">
  <div className="cart-header">
    <h1>Total Amount : Rs:{total}</h1>
  </div>
  <div className="cart-body">
    {cart.length > 0 && (
      <button onClick={notify} className=" sliderbtn1 p-2 text-center">
        Place Your Order
      </button>
    )}
    <ToastContainer />
    {Msg && <h1 className='acco'>Please create an account first!!.</h1>}
    {Msg1 && (
      <h1 className='avail'>
        Please be available at the given address. Your order will be there in 10 minutes.
        <p>Address is 
          <h1>{Data.address? Data.address : '2/67,Rasampalayam,Keelsathampur,Namakkal.'}</h1></p>
      </h1>
    )}
  </div>
  <div className="cart-footer">
    {cart.length ==0 ? (
       <h2 className="text-center">Please place your order from menus!!!!!....</h2>
    ) : (
      <h2>Enjoy Your Sweets!!</h2>
    )}
  </div>
</div>
      
    </div>
  );
};

export default Cart;