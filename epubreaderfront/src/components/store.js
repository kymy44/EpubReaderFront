//store.js
import { create } from "zustand";

const useStore = create((set) => ({
	isOpen: false,
	toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

	url: "http://127.0.0.1:8000/media/files/b4cfb987-2716-4e0c-84b3-535895b77c49.epub",
	setUrl: (newUrl) => set({ url: newUrl }),
}));

export default useStore;
