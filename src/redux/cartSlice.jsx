import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0, // ✅ to track total items for Navbar badge
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalPrice += item.price;
      state.totalQuantity += 1; // ✅ increase overall cart count
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === itemId);

      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity; // ✅ reduce total items
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === itemId);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
        state.totalQuantity += 1; // ✅ also increase total quantity
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalPrice -= existingItem.price;
        state.totalQuantity -= 1; // ✅ decrease total quantity
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.totalQuantity = 0; // ✅ reset total items
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;