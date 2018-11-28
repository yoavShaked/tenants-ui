import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTenants} from '../../store/actions/tenants';

class TenantsTable extends Component {
    componentDidMount(){
        this.props.fetchTenants();
        console.log(this.props.tenants);
    }
    render() {

        return (
            <div>
                <table>
                    <thead>Tennats</thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        fetchTenants,
    }, dispatch);
}

function mapStateToProps(state){
    return{
        tenants: state.tenants
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantsTable);