import React from 'react';
import { Link } from 'react-router-dom';


const Modal = ({payment}) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <div className='w-16 h-16'>
            <img 
            className='w-full h-full'
            src="https://i.ibb.co.com/mC5NTCC/Group.png"
            alt="" />
          </div>
          <h3 className="font-bold text-xl mt-3">Payment Successfull.</h3>
          <p className="py-2 font-bold text-base">Thanks for purchaseing</p>
          <p className='font-bold text-base'>Total:{payment}$</p>
          <div className="modal-action">
            <form method="dialog">
              <Link 
              to="/"
              className="btn w-full">Close</Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;