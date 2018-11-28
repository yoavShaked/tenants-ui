import {FAILD_FETCH_TENANTS, FETCH_TENANTS} from '../types';

const initalState = {
    success:true,
    tenants:[]
}

export default function(state = initalState, action){
    switch(action.type){
        case FETCH_TENANTS:{
            return Object.assign({}, state, {success: true, tenants: [...action.payload]});
        }
        case FAILD_FETCH_TENANTS:{
            return Object.assign({}, {success: false, tenants:[...state.tenants] });
        }
        default:{
            return state;
        }
    }
}