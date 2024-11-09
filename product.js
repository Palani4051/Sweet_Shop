import React from 'react'

const Product = ({product,cart,setcart}) => {

  const addCart=()=>{

    setcart([...cart,product])
   
  };
  const removeCart=()=>{
    setcart(cart.filter((c)=>c.id !==product.id ))
  };
  
  
  
  
    return (
       
        
    
           
            
              <div class="card mb-3 ">
                <img src={product.image} class="card-img-top" alt="Product Image"/>
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">
                    <span class="price">Rs{product.price}</span>
                  </p>
                  <span className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-alt" />
                  <i className="fa fa-star" />
                </span>
                  <p class="card-text">{product.description}</p>
                 
                  {cart.includes(product) ? (
                    <button onClick={removeCart} class="btn sliderbtn2 btn-block">Remove from Cart</button>
                  ) : (
                    <button onClick={addCart} class="btn sliderbtn1 btn-block">Add to Cart</button>
                  )}
                </div>
              </div>
            
  )
}

export default Product