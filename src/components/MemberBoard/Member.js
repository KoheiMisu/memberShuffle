import React, { PropTypes } from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';

const styles = {
    toggle: {
        marginBottom: 16,
    }
};

export default class Member extends React.Component {

    constructor() {
        super();
    }

    render () {
        return (
            <TableRow>
                <TableRowColumn>
                    {this.props.name}
                </TableRowColumn>
                <TableRowColumn>
                    <Toggle
                        label=""
                        defaultToggled={true}
                        style={styles.toggle}
                    />
                </TableRowColumn>
            </TableRow>
        );
    }

}