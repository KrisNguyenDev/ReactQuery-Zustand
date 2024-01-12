import { create } from 'zustand'
type State = {
  openModal: boolean
}

type Action = {
  setOpenModal: () => void
  setCloseModal: () => void
}

export const useLogin = create<State & Action>((set) => ({
  openModal: false,
  setOpenModal: () => set(() => ({ openModal: true })),
  setCloseModal: () => set(() => ({ openModal: false })),
}))
