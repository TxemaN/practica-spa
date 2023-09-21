

export const logReducer = (state, action) => {
  
    switch (action.type) {
        case 'logged':
            return {
                ...state,
                estado: action.payload.estado, 
                userName: action.payload.userName 
            };
        case 'logged-out':
            return {
                ...state,
                estado: 'logged-out',
                userName: null 
            };
        default:
            return state;
}
}

