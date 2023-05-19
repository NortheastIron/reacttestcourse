import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './styles.scss';
// import {Products} from "../products";
import {MainContainer} from "../main-container";

export function App() {
    // const modules = ['products', 'news'];

    return (
        <>
            <div className='app'>
                <div className='app__header'>
                </div>
                <div className='app__main'>
                    <MainContainer/>
                    {/*{*/}
                    {/*    modules && modules.map((module, index) =>*/}
                    {/*        <div key={index}>*/}

                    {/*        </div>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
            </div>
            {/*<Routes>*/}
            {/*    <Route path='/products'  element={<Products/>}/>*/}
            {/*    <Route path='/news' element={<div>NEWS</div>}/>*/}
            {/*</Routes>*/}
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
