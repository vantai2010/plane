import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
    name: 'flight',
    initialState: {
        FLI_CODE: '',
        PLANE_CODE: '',
        FLI_S_PLACE: '',
        FLI_E_PLACE: '',
        FLI_S_DATE: '',
        FLI_E_DATE: ''
    },
    reducers: {
        changeFlight(state, action){
            return state = {...state, ...action.payload}
        }
    }
})

const {actions, reducer} = flightSlice
export const {changeFlight} = actions
export default reducer

