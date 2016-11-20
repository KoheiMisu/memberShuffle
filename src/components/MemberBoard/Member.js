import React, { PropTypes } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import {DeleteButtonContainer} from './Button';


export default class Member extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    handleToggle = (event, value) => {
        this.props.changePresent(this.props.member);
    };

    render () {
        return (
            <TableRow>
                <TableRowColumn>
                    {this.props.member.name}
                </TableRowColumn>
                <TableRowColumn>
                    <Toggle
                        label=""
                        toggled={this.props.member.present}
                        onToggle={this.handleToggle}
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <DeleteButtonContainer
                        member={this.props.member}
                    />
                </TableRowColumn>
            </TableRow>
        );
    }

}