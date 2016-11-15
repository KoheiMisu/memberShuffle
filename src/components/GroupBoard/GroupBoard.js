import React, {PropTypes} from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import html2canvas from 'html2canvas';
import 'whatwg-fetch';
import * as asyncModule from '../../util/asyncModule';
import Group from './Group';



const style = {
    paddingLeft: 50,
    display: 'flex'
};

const groupStyle = {
    display: 'flex',
    flexWrap: 'wrap',
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
        this.state = {sliderVal: 2, isCreate: false};
    }

    handleSlider = (event, value) => {
        this.setState({sliderVal : value});
    };

    handleCreateGroup = () => {
        this.props.createGroup(this.state.sliderVal);
        this.setState({isCreate: true});
    };

    handleCapture = () => {
        const element = document.getElementById('groups');
        const target = document.getElementById('download');
        html2canvas(element).then(function(canvas) {
            const imgData = canvas.toDataURL();
            target.href = imgData;
            target.click();
        });
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
                        <a id="download" href="#" download="capture.png"></a>
                        {(() => {
                            if (this.state.isCreate)
                                return <RaisedButton
                                        label="Save Capture !"
                                        fullWidth={true}
                                        style={{marginTop: 10}}
                                        icon={<FileFileDownload />}
                                        onClick={this.handleCapture}
                                    />;
                        })()}
                    </Card>
                </div>
                <div style={groupStyle} id="groups">
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