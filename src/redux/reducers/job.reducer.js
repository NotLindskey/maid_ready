export default function jobs(state=[], action){
    switch(action.type){
        case "SET_JOBS":
            return action.payload;
        case "RESET_JOBS":
            return [];
        case "RESET":
            return [];
        default:
            return state;
    }
}