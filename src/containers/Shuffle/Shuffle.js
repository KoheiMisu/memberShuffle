import React from 'react';
import MemberBoard from '../../components/MemberBoard/MemberBoard';
import GroupBoard from '../../components/GroupBoard/GroupBoard';
import { connect } from 'react-redux';
import { addMembers, fetchMembers, divideMember, changePresents} from '../../redux/actions/actions'


const style = {
    paddingTop: 30,
    display: 'flex',
};

export class Shuffle extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.addMember = this.addMember.bind(this);
        this.createGroup = this.createGroup.bind(this);
        this.changePresent = this.changePresent.bind(this);
        this.props.dispatch(fetchMembers());
    }

    addMember (name) {
        this.props.dispatch(addMembers(name));
    }

    createGroup (groupCount) {
        this.props.dispatch(divideMember(groupCount, this.props.members));
    }

    changePresent (member) {
        this.props.dispatch(changePresents(member));
    }

    render () {
        return (
            <div>
                <div style={style}>
                    <MemberBoard
                        addMember={this.addMember}
                        changePresent={this.changePresent}
                        members={this.props.members}
                        inputError={this.props.inputError}
                    />
                    <GroupBoard
                        createGroup={this.createGroup}
                        groups={this.props.groups}
                    />
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
        groups: state.groups,
        inputError: state.inputError
    };
}

export default connect(mapStateToProps)(Shuffle);