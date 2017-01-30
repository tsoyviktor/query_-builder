import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const buttonStyle = {
    margin: 12,
    align: 'center'
};

export default (props) => (
    <div>
        <RaisedButton
            label="Generate Query"
            labelPosition="before"
            primary={true}
            style={buttonStyle}
            onClick={props.submit}
        />
    </div>
);
