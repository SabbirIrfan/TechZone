import { create } from 'zustand';

export const useStore = create((set) => ({
  cartItem: [],
  cartSize: 0,
  setCartItem: (cartItems) => set({ cartItem: cartItems }),
  setCartSize: (size) => set({ cartSize: size })
}));

// Selector functions
export const useCartItem = () => useStore((state) => state.cartItem);
export const useCartSize = () => useStore((state) => state.cartSize);
export const useSetCartItem = () => useStore((state) => state.setCartItem);
export const useSetCartSize = () => useStore((state) => state.setCartSize);
