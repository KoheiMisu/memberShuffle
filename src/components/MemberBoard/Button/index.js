import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionTypes from '../../../redux/actions/actions';
import {DeleteButton} from './Delete';

function mapStateToProps(state, props) {
    return {
        member: props.member
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteMember: bindActionCreators(actionTypes.deleteMember, dispatch)
    };
}

const DeleteButtonContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteButton);

export {
    DeleteButtonContainer
};