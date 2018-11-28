import {REGISTER, FAILD_REGISTER} from '../types';

const initailState = {
    success:true,
    dataUser:null
}

export default function(state = initailState, action){
    switch(action.type){
        case REGISTER:{
            return Object.assign({}, state,{success: true, dataUser: action.payload});
        }
        case FAILD_REGISTER:{
            return Object.assign({}, state, {success: false, dataUser: action.payload});
        }
        default:{
            return state;
        }
    }
}