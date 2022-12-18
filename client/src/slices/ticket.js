import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
        TIK_CODE: '',
        CUS_ID: '',
        PLANE_CODE: '',
        CHAIR_CODE: '',
        TIK_RANK: '',
    },
    reducers: {
        changeTicket(state, action){
            return state = {...state, ...action.payload}
        }
    }
})

const {actions, reducer} = ticketSlice
export const {changeTicket} = actions
export default reducer

