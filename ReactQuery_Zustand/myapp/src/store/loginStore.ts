import { create } from 'zustand'

type TUseLoginState = {
  openModal: boolean
  setOpenModal: () => void
  setCloseModal: () => void
}

export const useLogin = create<TUseLoginState>()((set) => ({
  openModal: false,
  setOpenModal: () => set((state) => ({ ...state, openModal: true })),
  setCloseModal: () => set((state) => ({ ...state, openModal: false })),
}))
