import { createSlice } from "@reduxjs/toolkit"

export const apps = createSlice({
    name: 'apps',
    initialState: {
        currentPage: 'Home',
        isNavExpand: false,
        isClickMenu: false
    },

    reducers: {
        changContainer: (state, action) => {
            state.currentPage = action.payload
        },

        expanNav: (state, action) => {
            state.isNavExpand = action.payload
            state.isClickMenu = true
        }
    }
})

export const {changContainer, expanNav} = apps.actions
export default apps.reducer