import React ,{ useState } from 'react';
import jQuery from 'jquery';
import  { Component } from "react";
import data from "../Myproducts/productss"
import Product from './product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = ({ cart, setcart }) => {
  
  const [products] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [clickedProduct, setClickedProduct] = useState({});
  const [scrolledProductId, setScrolledProductId] = useState(null);
  
  const handleScroll = (index) => {
    setScrolledProductId(products[index].id);
  };
  const addItem = (productId) => {
    const product = products.find((e) => e.id === productId);
    if (product) {
      setcart([...cart, product]);
    }
  };

  const removeCart = (productid) => {
    setcart(cart.filter((c) => c.id!== productid));
  };

  const removeItem = (productId) => {
    removeCart(productId);
  };

  const settings = {
    className: "center",
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    speed: 500,
    centerPadding: 60,
  
    

    cssOverride: {
      '.slick-dots': {
        display: 'block',
      },
      
    },


    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  
  return (
    <>
       
       <div id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="true">

      <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {require("../assets/01.webp")} class="d-block w-100" alt="..."/>
 
    </div>
    <div className="carousel-item">
      <img src={require("../assets/02.webp")} class="d-block w-100" alt="..."/>

    </div>
    <div className="carousel-item">
      <img src={ require("../assets/03.webp")} class="d-block w-100" alt="..."/>

    </div>
  </div>
  
</div>


<div className="container-fluid">
  <div className="slider-container">
    <Slider {...settings} afterChange={handleScroll} autoplay={true} autoplaySpeed={2000}>
      {products.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6">
          <div className={`card mb-3 m-3 ${product.id === scrolledProductId? 'crolled-card' : ''}`}>
            <img src={product.image} className="card-img" alt="Product Image" />
            <img src={require("../assets/100_original (1).jpg")} className="logo-image" alt="Logo Image" style={{
              width: 80,
              height: 80,
              position: 'absolute',
              top: -20,
              right: 10,
            }} />
            <div className="card-body">
              <div className="row">
                <h5 className="card-title col-6">{product.name}</h5>
                <span className="price-tag col-6">Rs{product.price}</span>
              </div>
              <div className="offer-badge">
                <span className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-alt" />
                  <i className="fa fa-star" />
                </span>
              </div>
              <p className="card-text">{product.description}</p>
              {cart.includes(product)? (
                <button
                  onClick={() => removeItem(product.id)}
                  className="btn sliderbtn2 btn-block"
                >
                  Remove from Cart
                </button>
              ) : (
                <button 
                  onClick={() => addItem(product.id)}
                  className="btn sliderbtn1 btn-block"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
    
<div className="container  mt-5">
  <div className="row justify-content-center mb-2">
    <div className="col-md-8 col-lg-6 col-xl-6 col-sm-10 col-12">
      <div className="input-group">
        <input
          type="text"
          className="form-control ps-4"
          placeholder="Search your Dessert here..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </div>
  </div>
</div>


        
        <div className="container">
          <div className="row">
            {searchTerm.length > 0 &&
              products.map((e) =>
                e.name.toLowerCase().includes(searchTerm.toLowerCase())? (
                  <div key={e.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                    <div className="card mb-3">
                      <img src={e.image} className="card-img-top" alt="Product Image" />
                      <div className="card-body">
                        <h5 className="card-title">{e.name}</h5>
                        <p className="card-text">Product Price: Rs{e.price}</p>
                        {cart.some((c) => c.id === e.id)? (
                          <button
                            onClick={() => removeItem(e.id)}
                            className="btn btn-danger sliderbtn2 btn-block"
                          >
                            Remove from Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addItem(e.id)}
                            className="btn btn-primary sliderbtn1 btn-block"
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
          </div>
        </div>

        <div className="container">
          <div className="row">
          
            {products.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <Product product={product} cart={cart} setcart={setcart} />
              </div>
            ))}  
          </div>
        </div>






        <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12">
      <center><p>&copy; 2024 <span style={{color:"orange",fontSize:"27px"}}>Sweet Haven</span> All rights reserved.</p></center> 
      </div>
   
    </div>
  </div>
</footer>
      
    </>
  );
};

export default Home;