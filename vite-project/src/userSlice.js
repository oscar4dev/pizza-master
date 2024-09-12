import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   username: ''
}

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      updateUser (state, action) {
         state.username = action.payload
      }
   }
})

export function getUser (state) {
   return state.user.username
}

export const { updateUser } = userSlice.actions
export default userSlice.reducer