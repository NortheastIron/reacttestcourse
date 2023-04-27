import React from "react";
import './styles.scss';

interface IModalProps {
    children: React.ReactNode;
    title: string;
    actionWatch: any;
}

export function Modal({children, title, actionWatch}: IModalProps) {

    function onClose() {
        actionWatch('close');
    }


    return (
        <>{/*это фрагмент ... чтобы объединить теги ..реактовская тема*/}
            <div className='modal__hide'></div>
            <div className='modal__message'>
                <div className='modal__message__header'>
                    <span className='modal__message__header__title'>{title}</span>
                    <i className='icon i-cancel' onClick={onClose}></i>
                </div>
                <div className='modal__message__content'>
                    {children}
                </div>
            </div>
        </>
    );
}
