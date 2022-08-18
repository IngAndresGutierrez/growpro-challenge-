/* import external modules */
import { createSlice } from '@reduxjs/toolkit'

/** @description This is a user slice
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name userSlice
 *  @returns {Component} Returns the user slice
 **/

const initialState = {
  user: { name: 'Andres' },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user
    },
  },
})

export const { setUser } = userSlice.actions
export const getUserState = (state) => state.user

export default userSlice.reducer
