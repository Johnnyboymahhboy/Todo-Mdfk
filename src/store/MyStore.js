import { create } from 'zustand';

export const MyStore = create((set) => ({
  
  // STATES //
  item: [],
  // FUNCTIONS
  AddData: (input) => set((state) => ({item: [...state.item,  input ]})),
  RemoveData: (id) => set((state) => ({item: state.item.filter(data => data.id !== id)})),
  Update: (id, inputUpdate) => set((state) => ({
    item: state.item.map(data => {
      return data.id === id ? {...data, Name: inputUpdate} : data
    })
  }))
}))

