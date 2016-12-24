import React from 'react';
import MemberBoard from '../../components/MemberBoard/MemberBoard';
import GroupBoard from '../../components/GroupBoard/GroupBoard';
import { connect } from 'react-redux';
import { addMembers, fetchMembers, divideMember, changePresents} from '../../redux/actions/actions';
import { Page, Row, Column } from 'hedron';


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
                    <Row>
                        <Column sm={6}>
                            <MemberBoard
                                addMember={this.addMember}
                                changePresent={this.changePresent}
                                members={this.props.members}
                                inputError={this.props.inputError}
                            />
                        </Column>
                        <Column sm={6}>
                            <GroupBoard
                                createGroup={this.createGroup}
                                groups={this.props.groups}
                            />
                        </Column>
                    </Row>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        members: state.members,
        groups: state.groups,
        inputError: state.inputError
    };
}

export default connect(mapStateToProps)(Shuffle);