import {useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    //setModalIsOpen is a function to set the value of modalIsOpen

    function clickResponse(){
        setModalIsOpen(true);
    }
    function disableModalandBackdrop(){
        setModalIsOpen(false);
    }
    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={clickResponse}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onCancel={disableModalandBackdrop} onConfirm={disableModalandBackdrop}/> : null}
            {modalIsOpen ? <Backdrop onClickResponse={disableModalandBackdrop}/> : null}
        </div>
    );
}

export default Todo;