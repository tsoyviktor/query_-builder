import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import constants from '../../constants/const.jsx';

const INCORRECT_ATTR_NAME = 'Please select from available attribute';
const INCORRECT_ATTR_VALUE = 'Attribute Value cannot be empty!';

const style = {
    operator: {
        width: '75px',
        top: '16px',
        margin: '0 10px',
        paddingLeft: '10px',
        textAlign: 'center',
        border: '1px solid cadetblue'
    }
};

export default class ConditionRowInputs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            condition: props.condition,
            attrNameError: false,
            attrValError: false
        };
        this.state.condition.operator = this.state.condition.operator || constants.OPERATORS[0];

        this.state.availableAttributes =
            props.attributes !== undefined ? props.attributes : constants.ATTRIBUTES;

        // Bind to the context
        this.handleOperator = this.handleOperator.bind(this);
        this.handleAttributeValue = this.handleAttributeValue.bind(this);
        this.validateAttrName = this.validateAttrName.bind(this);
        this.validateAttrValue = this.validateAttrValue.bind(this);
        this.handleAttrName = this.handleAttrName.bind(this);
    }

    handleOperator (event, index, value) {
        let condition = this.state.condition;
        condition.operator = value;
        this.setState({
            condition: condition
        });
    }

    handleAttrName (attributeName) {
        debugger;
        this.validateAttrName(attributeName);
        let condition = this.state.condition;
        condition.name = attributeName;
        this.setState({
            condition: condition
        });
    }

    handleAttributeValue (event) {
        this.validateAttrValue(event.target.value);
        let condition = this.state.condition;
        condition.value = event.target.value.trim();

        this.setState({
            condition: condition
        });
    }

    validateAttrName (value) {
        this.setState({
            attrNameError: !this.state.availableAttributes.includes(value.trim())
        });
    }

    validateAttrValue (value) {
        this.setState({
            attrValError: value.trim().length === 0
        });
    }

    render () {
        return (
            <div>
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={this.state.availableAttributes}
                    openOnFocus={true}

                    floatingLabelText="attribute"
                    floatingLabelFixed={true}
                    onUpdateInput={this.handleAttrName}
                    type="text"
                    onBlur={this.validateAttrName}
                    errorText={this.state.attrNameError ? INCORRECT_ATTR_NAME : ''}

                />

                <SelectField
                    className="operator"
                    autoWidth={true}
                    value={this.state.condition.operator}
                    fullWidth={false}
                    style={style.operator}
                    onChange={this.handleOperator}
                >
                    {
                        constants.OPERATORS.map(
                            (op, i) => <MenuItem primaryText={op} value={op} key={i}/>)
                    }
                </SelectField>

                <TextField
                    floatingLabelText="value"
                    floatingLabelFixed={true}
                    onChange={this.handleAttributeValue}
                    onBlur={this.validateAttrValue}
                    type="text"
                    value={this.state.condition.value}
                    errorText={this.state.attrValError ? INCORRECT_ATTR_VALUE : ''}
                />
            </div>
        );
    }
}