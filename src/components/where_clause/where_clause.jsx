import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import ConditionRow from './condition_row.jsx';

// TODO |VM| Redundant component, remove it
export default class WhereClause extends Component {

    constructor (props) {
        super(props);
        this.state = {
            conditions: props.conditions
        };
    }

    render () {
        return (
            <div>
                <Paper className="clause_group" zDepth={1} rounded={false}>
                    <ConditionRow conditions={ this.props.conditions }/>
                </Paper>
            </div>
        );
    }

};
