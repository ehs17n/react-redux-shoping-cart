import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

// Define a type for the slice state
interface CounterState {
 quantity: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state: CounterState) => {
      state.quantity += 1;
    },
    decrement: (state: CounterState) => {
      state.quantity -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.quantity += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.quantity;

export default cartSlice.reducer;
