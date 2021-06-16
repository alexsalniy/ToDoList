import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogined: false
    },
    reducers: {
        toggleLogined(state) {
            state.isLogined = !state.isLogined
        }
    }
}) 

export const { toggleLogined } = authSlice.actions
export const selectAuth = state => state.auth.isLogined
export default authSlice.reducer