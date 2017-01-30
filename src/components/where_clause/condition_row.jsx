import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import constants from '../../constants/const.jsx';
import ConditionRowInputs from './condition_row_inputs.jsx';
import ConditionClause from '../../model/condition_clause.jsx';


export default class ConditionRow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            conditions: props.conditions
        };
        this.addCondition = this.addCondition.bind(this);
        this.removeCondition = this.removeCondition.bind(this);
    }

    addCondition () {
        let conditions = this.state.conditions;
        conditions.push(new ConditionClause());
        this.setState({
            conditions: conditions
        });
    }

    removeCondition (event) {
        // For now keep at least one condition in the list to simplify UI
        if (this.state.conditions.length > 1) {
            let target = event.target.children.length > 0 ?
                event.target.children[0] : event.target;
            let index = parseInt(target.dataset.index);
            let conditions = this.state.conditions;

            conditions.splice(index, 1);
            this.setState({
                conditions: conditions
            });
        }
    }

    getConditionRows () {
        return this.state.conditions.map( (condition, i) =>
            <div key={i} className="container_row">
                <ConditionRowInputs condition={condition} />
                <RaisedButton
                    onClick={this.addCondition}
                    className="and_condition"
                    backgroundColor={constants.COLORS.ADD }
                >
                    AND
                </RaisedButton>
                <RaisedButton
                    onClick={this.removeCondition}
                    className="and_condition"
                    backgroundColor={constants.COLORS.REMOVE }
                >
                    <span
                        data-index={i}
                    >
                        Del
                    </span>
                </RaisedButton>
            </div>
        );
    }

    render () {
        return (
            <div>
                {this.getConditionRows()}
            </div>
        );
    }
}
