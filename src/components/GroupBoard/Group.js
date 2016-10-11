import React from 'react';
import Card from 'material-ui/Card';



const style = {
    paddingTop: 20,
    paddingLeft: 50,
    display: 'flex'
};

const colors = [
    '#b2dfdb',
    '#F8BBD0',
    '#E1BEE7',
    '#FFCDD2',
    '#D1C4E9',
    '#BBDEFB',
    '#B3E5FC',
    '#B2EBF2',
    '#B2DFDB',
    '#C8E6C9',
    '#DCEDC8',
    '#F0F4C3',
    '#D7CCC8',
    '#F5F5F5',
];

export default class Group extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render () {
        let members = [];
        for (let i=0; i < this.props.group.length; i++) {
            members.push(<p key={i}><span style={{paddingLeft: 10}}>{this.props.group[i].name}</span></p>);
        }

        let colorIndex = Math.floor( Math.random() * (colors.length) );

        return (
            <div>
                <div style={style}>
                    <Card style={{width: 100, backgroundColor: colors[colorIndex]}}>
                        <div>
                            {members}
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

}