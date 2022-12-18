import { createSlice } from "@reduxjs/toolkit";

const listCustomerSlice = createSlice({
    name: 'listCustomer',
    initialState: [],
    reducers: {
        changeListCustomer(state, action){
            return state = action.payload
        }
    }
})

const {actions, reducer} = listCustomerSlice
export const {changeListCustomer} = actions
export default reducer

