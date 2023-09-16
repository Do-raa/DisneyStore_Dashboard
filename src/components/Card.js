import React, { useState } from 'react';
import Popup from './Popup';


const Card = (props) => {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const approvedPopup = () => {
    props.getProductId(props.product.id)
    setPopupOpen(false)
  };

  const refusedPopup = () => {
    setPopupOpen(false)
  };

  return (
    <div className="w-80 h-96 rounded-lg overflow-hidden shadow-md shadow-teal-100 m-3">
      <img
        src={props.product.file.data}
        alt={props.product.file.name}
        className="w-full h-1/2"
      />
      <div className="card-body px-6 py-4 font-mono bg-white h-1/2">
        <h3 className="card-title font-bold text-xl mb-2 h-1/6 ">
          {props.product.name}
        </h3>
        <p className="card-description text-gray-500 text-base h-2/6 overflow-clip">
          {props.product.description}
        </p>
        <div className="mt-1">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 h-1/6">
            {props.product.price}
          </span>
        </div>
        <div className="flex justify-center h-2/6 my-3">
          <button className="h-8 bg-gray-100 rounded-md ring ring-red-500 ring-offset-2 px-2 py-1" onClick={openPopup}>
            Remove
          </button>

          {isPopupOpen && (
            <Popup
              onApprove={approvedPopup}
              onReject={refusedPopup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
