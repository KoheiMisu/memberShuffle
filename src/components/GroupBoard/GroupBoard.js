import React, {PropTypes} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import Group from './Group';



const style = {
    paddingLeft: 50,
    display: 'flex'
};

const groupStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 0
};

const textStyle = {
    color: '#4689FF',
    fontSize: 20
};

const cardStyle = {
    width: 500,
};

const inputStyle = {
    paddingLeft: 24,
    paddingTop: 10,
};

export default class GroupBoard extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {sliderVal: 2};
    }

    handleSlider = (event, value) => {
        this.setState({sliderVal : value});
    };

    handleCreateGroup = (event, value) => {
        this.props.createGroup(this.state.sliderVal);
    };

    render () {
        return (
            <div>
                <div style={style}>
                    <Card style={cardStyle}>
                        <CardHeader
                            title="Determine the number of people"
                        />
                        <div style={inputStyle}>
                            <Slider
                                min={1}
                                max={10}
                                step={1}
                                value={this.state.sliderVal}
                                onChange={this.handleSlider}
                                style={{width: 400}}
                            />
                            <p>
                                <span>{'One group will be composed of '}</span>
                                <span style={textStyle}>{this.state.sliderVal}</span>
                                <span>{' person'}</span>
                            </p>
                        </div>
                        <RaisedButton
                            label="Create Group !"
                            primary={true}
                            fullWidth={true}
                            onClick={this.handleCreateGroup}
                        />
                    </Card>
                </div>
                <div style={groupStyle}>
                    {this.props.groups.map((group, key) =>
                        <Group key={key} group={group}/>
                    )}
                </div>
            </div>
        );
    }

}

Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
};