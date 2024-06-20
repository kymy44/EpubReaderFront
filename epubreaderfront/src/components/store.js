//store.js
import { create } from "zustand";

const useStore = create((set) => ({
	isOpen: true,
	toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),

	url: "http://127.0.0.1:8000/media/files/b4cfb987-2716-4e0c-84b3-535895b77c49.epub",
	setUrl: (newUrl) => set((state) => ({ url: state.FileBaseUrl + newUrl })),
	FileBaseUrl: "http://127.0.0.1:8000",
	setFileBaseUrl: (newFileBaseUrl) => set({ FileBaseUrl: newFileBaseUrl }),

	token: "",
	setToken: () => set((state) => ({ token: !state.token })),
}));

export default useStore;
