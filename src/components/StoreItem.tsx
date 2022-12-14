import React, { useEffect, useState } from 'react';
import type { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../feature/cartSlice';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

const StoreItem: React.FC<StoreItemProps> = ({
  id,
  name,
  price,
  imgUrl,
  quantity,
}) => {
  const items = useSelector((state: RootState) => state.cart.items);

  const Check = () => {
    items.forEach((item: any) => {
      if (item.quantity === 1) console.log(item.quantity);
    });
  };

  const dispatch = useDispatch();
  return (
    <div className='flex flex-col'>
      ``
      <img
        src={imgUrl}
        alt=''
        className='object-cover h-[200px] w-[400px] ml-2'
      />
      <div className='flex justify-between m-3 p-2 font-medium '>
        <h1>{name}</h1>

        <h1>{price}</h1>
      </div>
      {quantity === 0 ? (
        <>
          <button
            className='h-full mx-4 my-3 rounded-md bg-blue-400'
            onClick={() => {
              dispatch(incrementQuantity(id));
            }}
          >
            Buy
          </button>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center'>
          <div className='flex  font-bold'>
            <button
              className='bg-yellow-200 py-1 px-9 mx-3 rounded-full'
              onClick={() => {
                dispatch(decrementQuantity(id));
              }}
            >
              -
            </button>
            <span>1</span>
            <button
              className='bg-yellow-200 py-1 px-9 mx-3 rounded-full'
              onClick={() => {
                dispatch(incrementQuantity(id));
              }}
            >
              +
            </button>
          </div>
          <button className='bg-red-700 m-4 w-[260px] rounded-full '>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default StoreItem;
