import { createSlice } from "@reduxjs/toolkit"

export const user = createSlice({
    name: 'user',
    initialState: {
        username: 'User123',
        id: 1,
        avatar: 'src/assets/avatar/dashaTaran.jpg'
    },

    reducers: {
    }
})

export const {} = user.actions
export default user.reducer