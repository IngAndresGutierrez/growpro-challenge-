/* import external modules */
import { createSlice } from '@reduxjs/toolkit'

/** @description This is a commons slice
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name commonsSlice
 *  @returns {Component} Returns the commons slice
 **/

const initialState = {
  handleSnackbar: { message: '', status: false, severity: 'success' },
  disableRentButton: true,
}

const commonsSlice = createSlice({
  name: 'commons',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.handleSnackbar = action.payload.handleSnackbar
    },
    setDisableRentButton: (state, action) => {
      state.disableRentButton = action.payload.disableRentButton
    },
  },
})

export const { setSnackbar, setDisableRentButton } = commonsSlice.actions
export const getCommonsState = (state) => state.commons

export default commonsSlice.reducer
