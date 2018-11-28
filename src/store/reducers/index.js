import {combineReducers} from 'redux';
import auth from './auth';
import tenants from './tenants';

const root = combineReducers({
    auth,
    tenants
});

export default root;