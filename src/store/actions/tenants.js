import { FETCH_TENANTS, FAILD_FETCH_TENANTS } from './../types';
import axios from 'axios';

export const fetchTenants = () => async dispatch => {
    try {
        const tenants = await axios.get('http://localhost:1234/api/tenants');
        dispatch({ type: FETCH_TENANTS, payload: tenants.data });
    }
    catch (ex) {
        dispatch({ type: FAILD_FETCH_TENANTS, payload: ex.message });
    }
}

export const crudOnTenant = (tenant, type) => async dispatch => {
    try {
        const tenants = null;
        switch (type) {
            case 'post':{
                tenants = await axios.post('http://localhost:1234/api/tenants', tenant);
                break;
            }
            case 'put':{
                tenant = await axios.put('http://localhost:1234/api/tenants',tenant);
                break;
            }
            case 'delete':{
                tenant = await axios.delete(`http://localhost:1234/api/tenants/${tenant}`);
                break;
            }
        }
        dispatch({ type: FETCH_TENANTS, payload: tenants.data });
    }
    catch (ex) {
        dispatch({ type: FAILD_FETCH_TENANTS, payload: ex.message });
    }
}
