import { create } from "zustand";
import { Data } from "../../data";
export const useStore = create((set) => ({
  viewProducts: Data,
  products: Data,
  cartItem: [],
  cartSize: 0,
  category:"",
  setCartItem: (cartItems) => set({ cartItem: cartItems }),
  setCartSize: (size) => set({ cartSize: size }),
  setProducts: (updatedProducts) => set({ products: updatedProducts }),
  setViewProducts: (updatedViewProducts) => set({ viewProducts: updatedViewProducts }),
  setCategory: (showingCategory) => set({ category: showingCategory }),
}));

// Selector functions
export const useCartItem = () => useStore((state) => state.cartItem);
export const useCartSize = () => useStore((state) => state.cartSize);
export const useProducts = () => useStore((state) => state.products);
export const useViewProducts = () => useStore((state) => state.viewProducts);
export const useCategory = () => useStore((state) => state.category);
export const useSetCategory = () => useStore((state) => state.setCategory);
export const useSetCartItem = () => useStore((state) => state.setCartItem);
export const useSetCartSize = () => useStore((state) => state.setCartSize);
export const useSetProducts = () => useStore((state) => state.setProducts);
export const useSetViewProducts = () => useStore((state) => state.setViewProducts);
