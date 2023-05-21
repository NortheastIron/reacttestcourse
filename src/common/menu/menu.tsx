import React from 'react';

import './styles.scss';

type ModulesType = {
    id: number;
    name: string;
    title: string;
    icon: string;
    // color?: string;
};

const modules: ModulesType[] = [
    {
        id: 0,
        name: 'products',
        title: 'Products',
        icon: 'i-box'
    },
    {
        id: 1,
        name: 'news',
        title: 'News',
        icon: 'i-globe'
    },
    {
        id: 2,
        name: 'chat',
        title: 'Chat',
        icon: 'i-whatsapp'
    }
];

export function Menu() {
    return (
        <div className='menu'>
            {
                modules.map(module =>
                    <div className={`module module__${module.name}`} key={module.id}>
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
