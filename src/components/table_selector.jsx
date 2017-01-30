import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// tables should be fetched from the API
const default_tables = [
    'traffic_table'
];

const style = {
};

export default class SelectDBTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: props.query,
            value: null
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount () {
        let db_tables = this.props.db_tables || default_tables;
        this.setState({
            db_tables: db_tables
                .map((name, index) => <MenuItem key={index} value={name} primaryText={name} />)
        });
    }

    handleChange (event, index, value) {
        let query = this.state.query;
        query.table_name = value;
        this.setState({
            query: query,
            value: value
        });
        console.log(query)
    }


    render() {

        return (
            <div>
                <SelectField
                    floatingLabelText="DB table"
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={style}
                >
                    {this.state.db_tables}
                </SelectField>
            </div>
        );
    }
};
