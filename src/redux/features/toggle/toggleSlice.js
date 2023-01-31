import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDark: true,
  isModalOpen: false
}

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleDark: (state, action) => {
      state.isDark = !state.isDark
      // console.log(document.documentElement)

      if (!state.isDark) {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    },
    toggleModal: (state, action) => 
    {
      state.isModalOpen = !state.isModalOpen;
      // console.log(state.isModalOpen);
    },
  },
})

export const { toggleDark, toggleModal } = toggleSlice.actions

export default toggleSlice.reducer
