import React from 'react';
import { useSelector } from 'react-redux';
import StoreItem from './components/StoreItem';

import { RootState } from './store/store';

function App() {
    const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className='App'>
      <div className='flex justify-between'>
        <nav>
          <ul className='flex space-x-3 m-5 p-3 font-sans font-bold'>
            <li>Home</li>

            <li>Post</li>

            <li>Hey</li>
          </ul>
        </nav>
        <div className='m-5 mr-12 h-[50px] w-[50px] border rounded-full border-black justify-center items-center relative '>
          <h1 className='absolute left-[19px] top-[10px]'>0</h1>
        </div>
      </div>
      <main className='grid grid-cols-3 justify-center items-center'>
        {items.map((storeItem) => (
          <StoreItem {...storeItem}></StoreItem>
        ))}
      </main>
    </div>
  );
}

export default App;
