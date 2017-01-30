import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import constants from '../constants/const.jsx';

const style = {
    width: 'auto',
    display: 'inline-box'
};


export default class Attributes extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            query: props.query
        };
        this.onCheck = this.onCheck.bind(this);
    }

    onCheck (event) {
        let value = event.target.value;
        let query = this.state.query;
        let fields = query.select_fields;

        if (fields.includes(value)) {
            // Remove one from the list in case checkbox is unchecked
            fields.splice(fields.indexOf(value), 1);
        } else {
            fields.push(value);
        }
        this.setState({
            query: query
        });
    }

    getErrorMsg () {
        if (this.state.query.select_fields.length === 0) {
            return (
                <div className="error">
                    At least one attribute has to be selected
                </div>
            )
        }
        return '';
    }

    render () {
        return (
            <div
                className="attributes"
                onClick={this.onCheck}
            >
                {this.getErrorMsg()}
                {
                    constants.ATTRIBUTES.map(
                        (attr, index) =>
                            <Checkbox value={attr} key={attr} label={attr} style={style}/>
                    )
                }
            </div>
        );
    }
};
