import { create } from "zustand";

type SearchStore = {
  isOpen: boolean;
  opOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

export const useSearch = create<SearchStore>((set, get) => ({
  isOpen: false,
  opOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggle: () => set({ isOpen: !get().isOpen }),
}));
