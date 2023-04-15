const adminsReducer = (state = [], action) => {
    switch(action.type){
        case 'SAVE_ADMINS':
            return action.payload;
        default:
            return state;
    };
}

export default adminsReducer;