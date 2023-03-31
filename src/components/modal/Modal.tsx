import React from "react";
import './styles.scss';

export function Modal() {
    return (
        <>{/*это фрагмент ... чтобы объединить теги ..реактовская тема*/}
            <div className='modal__hide'></div>
            <div className='modal__message left-1/2 -translate-x-1/2'><h1>Modal</h1></div>
        </>
    );
}
