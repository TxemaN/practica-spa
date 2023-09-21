

export const logReducer = (state, action) => {
  
    switch (action.type) {
        case 'logged':
            return {
               
                estado: action.payload.estado, 
                userName: action.payload.userName 
            };
        case 'logged-out':
            return {
                
                estado: action.payload.estado,
                userName: action.payload.userName 
            };
        default:
            return state;
}
}

