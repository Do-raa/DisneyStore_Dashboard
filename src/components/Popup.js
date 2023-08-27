import React from 'react';
import './Popup.css'; // Import your CSS for styling

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        {/* Popup content goes here */}
        <h1 className='text-teal-500 mb-6 text-xl font-semibold'>Warning !</h1>
        <p>Are you sure you want to delete this product?</p>
        <div className='mt-6'>
            <button className='mr-6 h-6 bg-gray-100 rounded-md ring ring-lime-500 ring-offset-2 px-2' onClick={props.onApprove}>Yes</button>
            <button className='h-6 bg-gray-100 rounded-md ring ring-red-400 ring-offset-2 px-2' onClick={props.onReject}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
