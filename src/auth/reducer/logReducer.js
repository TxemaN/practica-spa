import React from 'react'

export const logReducer = (state, action) => {
    switch (action.type) {

    
        case 'logged':
            console.log(state, action.payload)
            return  action.payload
           

            case 'logged-out':
                console.log(action.payload)
                return  action.payload
        default:
            return state

    }
}
