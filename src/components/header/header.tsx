import React from "react";

import './styles.scss';

interface IHeaderProps {
    title: string;
}

export function Header({title}: IHeaderProps) {
    return (
        <div className='header'>
            <i className='icon i-left'></i>
            <div className='title'>
                <span>{title}</span>
            </div>
        </div>
    );
}
