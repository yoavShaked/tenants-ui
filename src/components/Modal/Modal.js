import React from 'react';
import './style.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
        <section className="modal-main">
        <button className='btn-close' onClick={handleClose}>x</button>
          {children}
        </section>
      </div>
    );
};

export default Modal;