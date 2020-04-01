import React, {useState} from 'react'
import { Card } from './Card'
import { Modal } from './Modal'
import './App.css'

export const CardContainer = () => {
    const [documents, setDocuments] = useState([
        {type: "bank-draft", title: "Bank Draft", position: 0, image: "https://media3.giphy.com/media/rwCX06Y5XpbLG/giphy.webp?cid=ecf05e47789800f0997937d5c085e483134697bace71b5bd&rid=giphy.webp"}, 
        {type: "bill-of-lading", title: "Bill of Lading", position: 1, image: "https://media2.giphy.com/media/mlvseq9yvZhba/giphy.webp?cid=ecf05e47789800f0997937d5c085e483134697bace71b5bd&rid=giphy.webp"},
        {type: "invoice", title: "Invoice", position: 2, image: "https://media0.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.webp?cid=ecf05e47789800f0997937d5c085e483134697bace71b5bd&rid=giphy.webp"}, 
        {type: "bank-draft-2", title: "Bank Draft 2", position: 3, image: "https://media0.giphy.com/media/RhrAmVUHxjTQvEPBWi/giphy.webp?cid=ecf05e47789800f0997937d5c085e483134697bace71b5bd&rid=giphy.webp"}, 
        {type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4, image: "https://media1.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.webp?cid=ecf05e47f18aea03357b5e437eab9726a2edb67fba4e5301&rid=giphy.webp"}
    ])

    const [isLoading, setIsLoading] = useState(false)

    const [draggedItem, setDraggedItem] = useState(null)

    const [show, setShow] = useState(false)

    const [selectedImage, setSelectedImage] = useState('')

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
                      draggable
                      onDragStart={event => onDragStart(event, position)}
                      onDragOver={() => onDragOver(position)}
                      onDragEnd={onDragEnd}
                      onClick={() => {openModal(image)}}
                    > 
                      <Card
                        isLoading={isLoading} 
                        key={type}
                        title={title}
                        position={position}
                        image={image}    
                      />
                    </div>
                )}
            </div>
        </div>
)
}
