import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

// Define a type for the slice state

type cartItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
};

interface CounterState {
  quantity: number;
  items: cartItem[];
}

// Define the initial state using that type
const initialState: CounterState = {
  quantity: 0,
  items: [
    {
      quantity: 0,
      id: 1,
      name: 'Book',
      price: 10.99,
      imgUrl: '/imgs/book.jpg',
    },
    {
      quantity: 0,
      id: 2,
      name: 'Computer',
      price: 1199,
      imgUrl: '/imgs/computer.jpg',
    },
    {
      quantity: 0,
      id: 3,
      name: 'Banana',
      price: 1.05,
      imgUrl: '/imgs/banana.jpg',
    },
    {
      quantity: 0,
      id: 4,
      name: 'Car',
      price: 14000,
      imgUrl: '/imgs/car.jpg',
    },
  ],
};

// function increaseCartQuantity(id: number) {
//   setCartItems((currItems) => {
//     if (currItems.find((item) => item.id === id) == null) {
//       return [...currItems, { id, quantity: 1 }];
//     } else {
//       return currItems.map((item) => {
//         if (item.id === id) {
//           return { ...item, quantity: item.quantity + 1 };
//         } else {
//           return item;
//         }
//       });
//     }
//   });
// }

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.quantity += 1;
    },
    decrementQuantity: (state: CounterState, action: PayloadAction<number>) => {
      const newArr = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      state.items = newArr;
    },

    incrementQuantity: (state: CounterState, action: PayloadAction<number>) => {
      const newArr = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      state.items = newArr;
    },
  },
});

export const { increment, decrementQuantity, incrementQuantity } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.quantity;

export default cartSlice.reducer;
