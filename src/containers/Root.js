import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Common/Header';
import Shuffle from './Shuffle/Shuffle';

export default class Root extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render () {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Shuffle />
                </div>
            </MuiThemeProvider>
        );
    }

}

// Wrap the component to inject dispatch and state into it
export default connect()(Root);
