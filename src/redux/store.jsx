import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import selectedItemReducer from "./selectedItemSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    selectedItem: selectedItemReducer,
  },
});

export default store;