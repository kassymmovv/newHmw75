import {MESSAGE_SUCCESS, MESSAGE_SUCCESS_DEC} from "../actions/action";

const initialState = {
    files:[],
    decode:[],
    coded: ''
};
const getFile = (state = initialState,action) => {
 switch (action.type) {
     case MESSAGE_SUCCESS:
         return{
             ...state,
            coded:action.file, files: action.file
         };
     case MESSAGE_SUCCESS_DEC:
         return {
                ...state,
             decode:action.file
         };

     default:
         return state
 }
};
export default getFile