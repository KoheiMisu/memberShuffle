import React from 'react';
import MemberBoard from '../../components/MemberBoard/MemberBoard';
import GroupBoard from '../../components/GroupBoard/GroupBoard';
import { connect } from 'react-redux';
import { addMember, fetchMember, divideMember } from '../../redux/actions/actions'


const style = {
    paddingTop: 30,
    display: 'flex',
};

export default class Shuffle extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.addMember = this.addMember.bind(this);
        this.createGroup = this.createGroup.bind(this);
        this.props.dispatch(fetchMember());
    }

    addMember (name) {
        this.props.dispatch(addMember(name));
    }

    createGroup (groupCount) {
        this.props.dispatch(divideMember(groupCount, this.props.members));
    }

    render () {
        return (
            <div>
                <div style={style}>
                    <MemberBoard addMember={this.addMember} members={this.props.members}/>
                    <GroupBoard createGroup={this.createGroup} groups={this.props.groups}/>
                </div>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addMember(name) {
//             dispatch(addMember(name));
//         }
//     }
// }


function mapStateToProps(state) {
    return {
        members: state.members,
        groups: state.groups
    };
}

export default connect(mapStateToProps)(Shuffle);