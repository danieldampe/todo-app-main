import { create } from 'zustand'

export const Filter = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed'
} as const

interface State {
  filter: keyof typeof Filter
}

interface Action {
  change: (filterValue: State['filter']) => void
}

export const useFilterStore = create<State & Action>((set) => ({
  filter: 'ALL',
  change: (filterValue) => set(() => ({ filter: filterValue }))
}))
