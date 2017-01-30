import React from 'react';
import Paper from 'material-ui/Paper';

import JSONRender from 'react-json-pretty';
import '../../node_modules/react-json-pretty/JSONPretty.monikai.styl';


export default class QueryText extends React.Component {

    render() {
        return (
            <Paper className="result_query" zDepth={2}>
                <h3 className="block_header"> Generated query </h3>
                <div>
                    <JSONRender json={this.props.query}/>
                </div>
            </Paper>
        );
    }
}
