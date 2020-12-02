import React from 'react';
import ReactDOM from 'react-dom';
import s from './Modal.module.css';
import {CloseOutlined} from '@ant-design/icons';

const Modal = ({children, open, onClose}) => {

    if (!open) return null

    return ReactDOM.createPortal(
        <div className={s.Modal}>
            <div className={s.closeArea} onClick={onClose}/>
            <div className={s.modalContent}>
                <CloseOutlined className={s.closeModal} onClick={onClose}/>
                {children}
            </div>
        </div>,
        document.getElementById('root')
    );

};

export default Modal;