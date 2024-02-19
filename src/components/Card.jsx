import React, { useContext } from "react";
import { providerContext } from "../utils/DataContext";
import "./card.css";

const Card = () => {
  const [data, setData] = useContext(providerContext);
  const totalPrice = data.reduce((total, data) => total + data.price * (data.quantity || 1), 0)
  const totalCount = data.reduce((total, data) => total + (data.quantity || 1 ), 0)
  const handleIncrease = (id,quantity) => {
    setData((prev) => { 
       return prev.map((item) => {
        if(item.id === id) {
            return {...item, quantity: (item.quantity + 1) || (quantity + 1) }
        }
         return item
       })
    })
  }
  const handleDecrease = (id,quantity) => {
    setData((prev) => { 
       return prev.map((item) => {
        if(item.id === id && quantity > 0) {
            return {...item, quantity: (item.quantity - 1) || (quantity - 1) }
        }
         return item
       })
    })
  }
  const handleRemove  = (id) => {
           setData(pval => pval.filter((item,index) => item.id !== id)) 
  }
  return (
    <div>
      <div className="d-flex justify-content-center sticky-top">
      <div className="border border-dark w-75 p-2 bg-dark rounded-2 mb-2 mt-4 h-75 text-center">
            <p className="text-white">Total Price : {totalPrice} </p>
            <p className="text-white">Total Quantity : {totalCount} </p>
      </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {data.map((item, index) => {
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
                        <p class="card-text text-center fw-bold">{item.description}</p>
                        <p class="card-text text-center text-danger fw-bold">
                          {`Discount : ${item.discountPercentage} % `}
                        </p>
                        <p class="card-text fw-bold">{`Brand : ${item.brand}`}</p>
                        <p class="card-text fw-bold">{`Brand : ${item.category}`}</p>
                        <div className="border-top border-bottom border-dark pt-2 d-flex justify-content-between">
                          <p className="card-text mt-3 fw-bold">Quantity: </p>
                          <div className="border border-dark w-25 mb-2 rounded-2 d-flex justify-content-between">
                            <button className="btn btn-md" onClick={() => {handleDecrease(item.id, item.quantity || 1)}}>-</button>
                            <p className="mt-3"> {item.quantity || 1 }</p>
                            <button className="btn btn-md" onClick={() => {handleIncrease(item.id, item.quantity || 1)}}>+</button>
                          </div>
                        </div>
                        <div className="border-bottom border-dark pt-2 d-flex justify-content-between">
                            <p className="fw-bold">Price:</p>
                            <p className="px-5 fw-bold">{item.price || 1}</p>
                        </div>
                        <div className="pt-2 text-center">
                        <button className="btn btn-danger" onClick={() => {handleRemove(item.id)}}>
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
    </div>
  );
};

export default Card;
