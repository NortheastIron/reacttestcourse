import React, {createElement as e, useState} from 'react';

function App() {
    const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto max-w-2xl pt-10">
        <h1>Hello React</h1>
    </div>
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
