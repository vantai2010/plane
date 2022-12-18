import { createSlice } from "@reduxjs/toolkit";

const planeSlice = createSlice({
    name: 'plane',
    initialState: {
        PLANE_CODE: '',
        CHAIR_FREE: '',
        CHAIR_BOOKED: ''
    },
    reducers: {
        changePlane(state, action){
            return state = {...state, ...action.payload}
        }
    }
})

const {actions, reducer} = planeSlice
export const { changePlane } = actions
export default reducer

