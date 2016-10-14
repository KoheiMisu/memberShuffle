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

        return (
            <div>
                <div style={style}>
                    <Card style={{width: 100, backgroundColor: colors[Math.floor( Math.random() * (colors.length) )]}}>
                        <div>
                            {
                                Array.from(this.props.group).map((member, key) =>
                                    <p key={key}><span style={{paddingLeft: 10}}>{member.name}</span></p>
                                )
                            }
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

}