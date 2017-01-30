import React, {Component} from 'react';

import Divider from 'material-ui/Divider';
import SelectDBTable from './table_selector.jsx';
import TimeInput from './time_input.jsx';
import AttributeSelection from './attributes_selection.jsx';
import WhereClause from './where_clause/where_clause.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ConditionClause from '../model/condition_clause.jsx';
import constants from '../constants/const.jsx';


export default class FormSelectOptions extends Component {

    constructor(options) {
        super(options);

        // set default where clause
        this.state = {
            query: options.query,
            clauses: [[new ConditionClause()]]
        };

        this.handleAddStatement = this.handleAddStatement.bind(this);
        this.handleDelStatement = this.handleDelStatement.bind(this);
    }

    handleAddStatement () {
        let query = this.state.query;
        query.where_clause.push([new ConditionClause()]);
        this.setState({
            query: query
        });
    }

    handleDelStatement (event) {

        let target = event.target.children.length > 0 ?
            event.target.children[0] : event.target;
        let index = parseInt(target.dataset.index);
        let query = this.state.query;

        if (query.where_clause.length > 1) {
            query.where_clause.splice(index, 1);
            this.setState({
                query: query
            });
        }
    }

    renderWhereClauses() {
        return (
            this.state.query.where_clause.map(function(conditions, i) {
                return (<div key={i}>
                    <WhereClause conditions={conditions}/>
                    <FloatingActionButton
                        className="or_condition"
                        backgroundColor={constants.COLORS.ADD }
                        onClick={this.handleAddStatement}
                    >
                        <span>OR</span>
                    </FloatingActionButton>

                    <FloatingActionButton
                        className="or_condition"
                        backgroundColor={constants.COLORS.REMOVE }
                        onClick={this.handleDelStatement}
                    >
                        <span data-index={i}>
                            Del
                        </span>
                    </FloatingActionButton>

                </div>)
            }.bind(this))
        )
    }

    render() {
        return (
            <div className="selection_options">
                <Divider />
                <div className="container_row">
                    <div className="c_element">
                        <h3 className="block_header">Table Name used for the query</h3>
                        <SelectDBTable query={this.state.query} />
                    </div>

                    <div className="c_element">
                        <h3 className="block_header">Start time and End time are valid UNIX Epoch time</h3>
                        <TimeInput query={this.state.query}/>
                    </div>
                </div>
                <div className="container_row">
                    <div className="c_element">
                        <h3 className="block_header">Options for select fields</h3>
                        <AttributeSelection query={this.state.query} />
                    </div>
                    <div className="c_element clause_container">
                        <h3 className="block_header"> Where clause</h3>
                        {this.renderWhereClauses()}
                    </div>
                </div>
            </div>
        );
    }
};
