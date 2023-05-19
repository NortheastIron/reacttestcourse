import React from 'react';

import './styles.scss';

type ModulesType = {
    id: number;
    name: string;
    title: string;
    // color?: string;
};

const modules: ModulesType[] = [
    {
        id: 0,
        name: 'products',
        title: 'Products'
    },
    {
        id: 1,
        name: 'news',
        title: 'News',

    }
];

export function Menu() {
    return (
        <div className='menu'>
            {
                modules.map(module =>
                    <div className={`module module__${module.name}`} key={module.id}>
                        <span className='module__title'>{module.name}</span>
                        <span className='module__icon'>ICON</span>
                    </div>
                )
            }
        </div>
    );
}
