import React from "react";
import './styles.scss';

interface ModalProps {
    children: React.ReactNode;
    title: string;
}

export function Modal({children, title}: ModalProps) {
    return (
        <>{/*это фрагмент ... чтобы объединить теги ..реактовская тема*/}
            <div className='modal__hide'></div>
            <div className='modal__message'>
                <h1 className='modal__message__title'>{title}</h1>

                {children}
            </div>
        </>
    );
}
