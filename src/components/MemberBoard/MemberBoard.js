import React, { Component, PropTypes } from 'react'
import {Table, TableBody, TableRow, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Card, CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Member from './Member';
import { Page, Row, Column } from 'hedron';

const style = {
    paddingLeft: 50,
    width: 500,
    display: 'flex'
};

const inputStyle = {
    paddingLeft: 24,
    paddingTop: 10,
};


export default class MemberBoard extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    handleAddMember = (event, value) => {
        if (event.which === 13) {
            this.props.addMember(event.target.value);
            event.target.value = '';
        }
    };

    render () {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Lunch Members"
                    />
                    <TextField
                        onKeyPress={this.handleAddMember}
                        hintText="Input And Press Enter!"
                        floatingLabelText="Add Member"
                        errorText={this.props.inputError}
                        style={inputStyle}
                    />
                    <Table>
                        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>absent or present</TableHeaderColumn>
                                <TableHeaderColumn>operation</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            showRowHover={true}
                            displayRowCheckbox={false}
                        >
                            {this.props.members.map((member, key) =>
                                <Member
                                    key={key}
                                    member={member}
                                    changePresent = {this.props.changePresent}
                                />
                            )}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        );
    }
}

MemberBoard.propTypes = {
    addMember: PropTypes.func.isRequired,
};