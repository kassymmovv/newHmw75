import axios from 'axios'
export const MESSAGE_SUCCESS = 'ORDER_SUCCESS';
export const MESSAGE_SUCCESS_DEC = 'ORDER_SUCCESS_DEC';
export const messageSuccessDec = (file) => ({type:MESSAGE_SUCCESS_DEC,file});
export const messageSuccess = (file) => ({type:MESSAGE_SUCCESS,file});

export const getFile = file => {

    return async dispatch =>{
      const  response = await axios.post("http://localhost:8000/encode",file);
        dispatch(messageSuccess(response.data.message))
    }
};
export const decodeFile = file => {
    return async (dispatch, getState) => {
        file.message = getState().coded;
        const response = await axios.post('http://localhost:8000/decode',file);
        dispatch(messageSuccessDec(response.data))
    }
};