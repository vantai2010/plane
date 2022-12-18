import { createSlice } from "@reduxjs/toolkit";

const listTicketSlice = createSlice({
    name: 'listTicket',
    initialState: [],
    reducers: {
        changeListTicket(state, action){
            return state = action.payload
        }
    }
})

const {actions, reducer} = listTicketSlice
export const {changeListTicket} = actions
export default reducer

