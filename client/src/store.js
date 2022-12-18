import {configureStore} from '@reduxjs/toolkit'
import customerSlice from './slices/customer'
import planeSlice from './slices/plane'
import flightSlice from './slices/flight'
import ticketSlice from './slices/ticket'
import autherialSlice from './slices/autherial'
import listFlightSlice from './slices/listFlight'
import listCustomerSlice from './slices/listCustomer'
import listPlaneSlice from './slices/listPlane'
import listTicketSlice from './slices/listTicket'

export const store = configureStore({
    reducer: {
        customer: customerSlice,
        plane: planeSlice,
        flight: flightSlice,
        ticket: ticketSlice,
        listFlight: listFlightSlice,
        autherial: autherialSlice,
        listCustomer: listCustomerSlice,
        listPlane: listPlaneSlice,
        listTicket: listTicketSlice
    }
})

