import React from 'react';
import './styles.scss';

export enum ModalActionsEnum {
    close = 'close'
}

export interface IModalProps {
    children: React.ReactNode;
    title: string;
    actionWatch: (action: string) => void;
    disabled?: boolean;
}

export function Modal({children, title, actionWatch, disabled = false}: IModalProps) {

    function onClose() {
        if (!disabled) {
            actionWatch('close');
        }
    }


    return (
        <>{/*это фрагмент ... чтобы объединить теги ..реактовская тема*/}
            <div className='modal__hide'></div>
            <div className='modal__message'>
                <div className='modal__message__header'>
                    <span className='modal__message__header__title'>{title}</span>
                    <i className={`icon i-cancel ${disabled ? 'disabled' : ''}`} onClick={onClose}></i>
                </div>
                <div className='modal__message__content'>
                    {children}
                </div>
            </div>
        </>
    );
}
