import React, { useEffect } from 'react'
import Modal from 'react-modal'
import './style.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "transparent",
        border:0,
    },
    overlay: {
        zIndex: 999
    }
};
Modal.setAppElement("#root")
const Loading = ({ showModal }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        setIsOpen(showModal)
    }, [showModal])

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
            >
                <div className="loadingio-spinner-spinner-9imn5s7chxa"><div className="ldio-j67u4r6yeqp">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div></div>
            </Modal>
        </>
    )
}

export default Loading