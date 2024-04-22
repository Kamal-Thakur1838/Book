import React from "react";

const Cards = ({item}) => {

  return (
    <>
      <div className="mt-4 my-3" >
        <div className="card w-80 bg-base-100 shadow-xl mt-5 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border duration-200">
          <figure>
            <img
              src={item.image} alt="Shoes"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-red-400 ">{item.category}</div>
            </h2>
            <p> {item.title} </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline"> ${item.price} </div>
              <div className="badge badge-outline hover:bg-red-400 duration-200 hover:text-white px-5 py-4 ">Buy Now: </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
