import React, {useState, useEffect} from 'react'
import { Card } from './Card'
import { Modal } from './Modal'
import './App.css'

const DUMMY_DATA = [
  {type: "bank-draft", title: "Bank Draft", position: 0, image: "https://picsum.photos/200/300"}, 
  {type: "bill-of-lading", title: "Bill of Lading", position: 1, image: "https://picsum.photos/200/300"},
  {type: "invoice", title: "Invoice", position: 2, image: "https://picsum.photos/200/300"}, 
  {type: "bank-draft-2", title: "Bank Draft 2", position: 3, image: "https://picsum.photos/200/300"}, 
  {type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4, image: "https://picsum.photos/200/300"}
]

export const CardContainer = () => {
    const [documents, setDocuments] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const [draggedItem, setDraggedItem] = useState(null)

    const [show, setShow] = useState(false)

    const [selectedImage, setSelectedImage] = useState('')

    const getDocuments = () => {
      return fetch('http://localhost:8002/documents/').then(response => response.json())
    }

    const postDocument = (data) => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
     
      fetch("http://localhost:8002/documents/", options)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    const populateCards = () => {
      DUMMY_DATA.forEach((card) => {
        postDocument(card)
      })
    }

    useEffect(() => {
      getDocuments().then(documents => setDocuments(documents), [])
    })

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl)
        setShow(true)
    }

    const closeModal = () => setShow(false)

    const onDragStart = (e, index) => {
        setDraggedItem(documents[index])
        e.dataTransfer.effectAllowed = 'move'
      }

    const onDragOver = (index) => {
        const draggedOverItem = documents[index];

        if (draggedItem === draggedOverItem) {
          return;
        }

        let items = documents.filter(document => document !== draggedItem);

        items.splice(index, 0, draggedItem);
    
        setDocuments(items)
    }

    const onDragEnd = () => {
        setDraggedItem(null)
    }

    return(
        <div>
            <Modal closeModal={closeModal} show={show} selectedImage={selectedImage}/>
            <h1 className='title'>Documents</h1>
            <div className='card-container'>
                {documents.map(({type, title, position, image}) =>
                    <div
                      key={type}
                      draggable
                      onDragStart={event => onDragStart(event, position)}
                      onDragOver={() => onDragOver(position)}
                      onDragEnd={onDragEnd}
                      onClick={() => {openModal(image)}}
                    > 
                      <Card
                        isLoading={isLoading} 
                        title={title}
                        position={position}
                        image={image}    
                      />
                    </div>
                )}
            </div>
            <button className='button'onClick={populateCards}>POPULATE CARDS</button>
        </div>
)
}
