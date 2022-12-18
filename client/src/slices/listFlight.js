import { createSlice } from "@reduxjs/toolkit";

const listFlightSlice = createSlice({
    name: 'listFlight',
    initialState: [],
    reducers: {
        changeListFlight(state, action){
            return state = action.payload
        }
    }
})

const {actions, reducer} = listFlightSlice
export const {changeListFlight} = actions
export default reducer

