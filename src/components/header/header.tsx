import React from 'react';
import {useNavigate} from 'react-router-dom';

import './styles.scss';

export interface IHeaderConfig {
    title: string;
    backLink: string;
}

interface IHeaderProps {
    headerConfig: IHeaderConfig;
}

export function Header({headerConfig}: IHeaderProps) {

    const navigate = useNavigate();

    function onBackClick() {
        navigate(headerConfig.backLink);
    }

    return (
        <div className='header'>
            <i className='icon i-left' onClick={onBackClick}></i>
            <div className='title'>
                <span>{headerConfig.title}</span>
            </div>
        </div>
    );
}
