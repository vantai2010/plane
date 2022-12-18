import { createSlice } from "@reduxjs/toolkit";

const autherialSlice = createSlice({
    name: 'autherial',
    initialState: {
        isAutherialed: false,
    },
    reducers: {
        changeAutherial(state, action){
            return state = {...state, ...action.payload}
        }
    }
})

const {actions, reducer} = autherialSlice
export const {changeAutherial} = actions
export default reducer

