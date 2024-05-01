import { createSlice } from "@reduxjs/toolkit"

export const domain = createSlice({
    name: 'domain',
    initialState: {
        isInLandingPage: true
    },

    reducers: {
        changeDomain: (state) => {
            state.isInLandingPage = !state.isInLandingPage
        }
    }
})

export const {changeDomain} = domain.actions
export default domain.reducer