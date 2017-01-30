import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

// Custom components
import SubmitButton from './components/submit_button.jsx';
import FormSelectOptions from './components/form_selection_options.jsx';
import QueryText from './components/query_text.jsx';
import QueryModel from './model/query.jsx';


export default class App extends Component {

    constructor(props) {
        super(props);

        // TODO|VM| Use immutable data to avoid changing state without setState();
        this.state = {
            query: new QueryModel()
        };

        this.submit = this.submit.bind(this);
    }

    submit () {
        let query = this.state.query;
        this.setState({
            query: query
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <Card className="body_container">
                    <CardText>
                        <div>
                            <h1> Query builder</h1>
                            <FormSelectOptions query={this.state.query} />
                            <Divider />
                            <SubmitButton submit={this.submit} />
                            <QueryText query={this.state.query} />
                        </div>
                    </CardText>
                </Card>
            </MuiThemeProvider>
        );
    }
};
