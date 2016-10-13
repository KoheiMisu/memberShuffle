import React, { PropTypes } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';

const styles = {
    toggle: {
        marginBottom: 16,
    }
};

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
                        style={styles.toggle}
                        onToggle={this.handleToggle}
                    />
                </TableRowColumn>
            </TableRow>
        );
    }

}