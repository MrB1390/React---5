import React, { useEffect } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { cardData, increase_quan, remove_prod,decrease_quan } from "../utils/CardSlice";

const Card = () => {
  const dispatch = useDispatch();
  const products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/5/1.jpg",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    }
]
  const val = useSelector((state)=>state.val)
  const totalPrice = useSelector((state) => 
   state.val.reduce((total,data) => total + data.price * (data.quantity || 1), 0)
    )
  const totalCount = useSelector((state) =>
  state.val.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  ));
 
  useEffect(()=>{
    dispatch(cardData(products))
  },[dispatch,val.products])

  const handleIncrease = (id,quantity) =>{
    if (quantity > 0){
           dispatch(increase_quan({id,quantity}));
    }
  }
  const handleDecrease = (id,quantity) =>{
    if (quantity > 1){
      dispatch(decrease_quan({id,quantity}));
    }
  }

  const handleRemove = (id) => {
    dispatch(remove_prod({id}))
  };
  return (
    <div>
      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-bold">Shop Cart</h1>
          <h3 class="fw-normal text-muted mb-3">
            Buy anything you want with Aperture
          </h3>
          <div class="d-flex gap-3 justify-content-center lead fw-normal">
            <img
              src="src\assets\pexels-tyler-lastovich-699122.jpg"
              alt="Shoes Collection"
              width={"80%"}
            />
          </div>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {val.map((item, index) => {
          return (
            <>
              <div>
                <div key={index}>
                  <div class="col">
                    <div class="card card-hei">
                      <div id={`carousel-${index}`} className="carousel slide">
                        <div className="carousel-inner">
                          {item.images.map((image, i) => (
                            <div
                              key={i}
                              className={`carousel-item ${
                                i === 0 ? "active" : ""
                              }`}
                            >
                              <img
                                src={image}
                                className="card-img-top carousel-image"
                                alt={"image"}
                              />
                            </div>
                          ))}
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target={`#carousel-${index}`}
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target={`#carousel-${index}`}
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-center border-top border-bottom border-dark p-2 fw-bold">
                          {item.title}
                        </h5>
                        <p class="card-text text-center fw-bold">
                          {item.description}
                        </p>
                        <p class="card-text text-center text-danger fw-bold">
                          {`Discount : ${item.discountPercentage} % `}
                        </p>
                        <p class="card-text fw-bold">{`Brand : ${item.brand}`}</p>
                        <p class="card-text fw-bold">{`Brand : ${item.category}`}</p>
                        <div className="border-top border-bottom border-dark pt-2 d-flex justify-content-between">
                          <p className="card-text mt-3 fw-bold">Quantity: </p>
                          <div className="border border-dark w-25 mb-2 rounded-2 d-flex justify-content-between">
                            <button
                              className="btn btn-md"
                              onClick={() => {
                                handleDecrease(item.id, item.quantity || 1);
                              }}
                            >
                              -
                            </button>
                            <p className="mt-3"> {item.quantity || 1}</p>
                            <button
                              className="btn btn-md"
                              onClick={() => {
                                handleIncrease(item.id, item.quantity || 1);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="border-bottom border-dark pt-2 d-flex justify-content-between">
                          <p className="fw-bold">Price:</p>
                          <p className="px-5 fw-bold">{item.price || 1}</p>
                        </div>
                        <div className="pt-2 text-center">
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleRemove(item.id);
                            }}
                          >
                            Remove Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <div className="border-bottom border-top border-dark w-75 p-2 mb-2 mt-4 h-75 ">
          <div className="d-flex justify-content-between">
            <p className="text-dark ">Total Quantity : </p>
            <p className="text-dark">{totalCount} </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-dark ">Total Price </p>
            <p className="text-dark"> {totalPrice} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
