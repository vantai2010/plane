import { createSlice } from "@reduxjs/toolkit";

const listPlaneSlice = createSlice({
    name: 'listPlane',
    initialState: [],
    reducers: {
        changeListPlane(state, action){
            return state = action.payload
        }
    }
})

const {actions, reducer} = listPlaneSlice
export const {changeListPlane} = actions
export default reducer

