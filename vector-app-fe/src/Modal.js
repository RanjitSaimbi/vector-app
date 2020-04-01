import React, { useEffect } from 'react'
import ReactDOM from "react-dom";
import './App.css'

export const Modal = ({show, closeModal, selectedImage}) => {

    const escHandler = ({ key }) => {
        if (key === 'Escape') {
          closeModal()
        }
      }

    useEffect(() => {
        window.addEventListener('keydown', escHandler)
        return () => {
          window.removeEventListener('keydown', escHandler)
        };
      }, [])

    const modal = (
        <>
          <div className={show ? "overlay" : "hide"} onClick={closeModal} />
            <div className={show ? "modal" : "hide"}>
            <img 
                src={selectedImage} 
            />
            </div>
        </>
      )
      return ReactDOM.createPortal(
        modal, document.getElementById('modal-root')
     );
}


