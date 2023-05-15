import React from 'react';

import './styles.scss';

import {Modal} from "../../components/modal/modal";
import {Products} from "../products";
import {Routes, Route} from "react-router-dom";
export function App() {
    const modules = ['products', 'news'];

    return (
        <>
        <div className='app'>
            <div className='app__modules'>
                {
                    modules && modules.map(module =>
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
        </>
      );

  // return React.createElement('div', {}, [
  //     e('h1', {className: 'font-bold', key: 1}, `TEST, ${count}`),
  //     e('button', {className: 'py-2 px-4 border', key: 2, onClick: () => {
  //         setCount(count + 1);
  //         console.log('clicked', count);
  //         }}, 'click')
  // ]);
}


export default App;
