import {REGISTER, FAILD_REGISTER} from '../types'
import axios from 'axios';

export const auth = (type,values) => async dispatch =>{
    try{
        const auth = await axios.post(`http://localhost:1234/api/${type}`, values);
        dispatch({type: REGISTER, payload:auth.data});
    }
    catch(ex){
        dispatch({type: FAILD_REGISTER, payload: ex.message});
    }
}
