import React from 'react'
import ReactDOM from "react-dom";
import './App.css'

export const Modal = ({show, closeModal}) => {

    const modal = (
        <>
          <div className={show ? "overlay" : "hide"} onClick={closeModal} />
            <div className={show ? "modal" : "hide"}>
                <h1>Modal</h1>
            </div>
        </>
      )
      return ReactDOM.createPortal(
        modal, document.getElementById('modal-root')
     );
}


