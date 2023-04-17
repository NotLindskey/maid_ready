const suggestionsReducer = (state = [], action) => {
    switch(action.type){
        case 'SAVE_SUGGESTIONS':
            return action.payload;
        default:
            return state;
    }
}

export default suggestionsReducer;