import React from 'react';
import {useNavigate} from 'react-router-dom';

import './styles.scss';

type ModulesType = {
    id: number;
    name: string;
    title: string;
    icon: string;
    path: string;
    // color?: string;
};

const modules: ModulesType[] = [
    {
        id: 0,
        name: 'products',
        title: 'Products',
        icon: 'i-box',
        path: '/products'
    },
    {
        id: 1,
        name: 'news',
        title: 'News',
        icon: 'i-globe',
        path: '/news'
    },
    {
        id: 2,
        name: 'chat',
        title: 'Chat',
        icon: 'i-whatsapp',
        path: '/chat'
    }
];

export function Menu() {

    const navigate = useNavigate();

    const openModule = (path: string) => {
        console.log('click!', path);
        navigate(path);
    };

    return (
        <div className='menu'>
            {
                modules.map(module =>
                    <div className={`module module__${module.name}`} onClick={() => {openModule(module.path)}} key={module.id}>
                        <div className='module__title'>
                            <span >{module.title}</span>
                        </div>
                        <i className={`module__icon icon ${module.icon}`}></i>
                    </div>
                )
            }
        </div>
    );
}
