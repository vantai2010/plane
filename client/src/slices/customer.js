import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: 'customer',
    initialState: {
        CUS_ID: '',
        CUS_NAME: '',
        CUS_PHONE: ''
    },
    reducers: {
        changeCustomer(state, action){
            return state = {...state, ...action.payload}
        }
    }
})

const {actions, reducer} = customerSlice
export const {changeCustomer} = actions
export default reducer

