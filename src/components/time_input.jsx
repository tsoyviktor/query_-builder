import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const style = {};
const ERROR_MSG = "Time field is required";

export default class TimeStamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: props.query,
            startTime: {
                value: '',
                error: false
            },
            stopTime: {
                value: '',
                error: false
            },
        };

        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleStopTimeChange = this.handleStopTimeChange.bind(this);
    }

    handleStartTimeChange = (event) => {
        let query = this.state.query;
        query.start_time = parseInt(event.target.value);

        this.setState({
            startTime: {
                value: query.start_time
            },
            query: query
        });
        this.validate(event);
    };

    handleStopTimeChange = (event) => {
        let query = this.state.query;
        query.end_time = parseInt(event.target.value);

        this.setState({
            stopTime: {
                value: query.end_time,
            },
            query: query
        });
        this.validate(event);
    };

    validate (event) {
        let key = event.target.id;
        if (event.target.value.length === 0) {
            let obj = {};
            obj[key] = {};
            obj[key].error = true;
            this.setState(obj);
        }
    }

    render() {
        return (
            <div className="number_inputs container_row">
                <div>
                    <TextField
                        floatingLabelText="Start Time"
                        onChange={this.handleStartTimeChange}
                        type="number"
                        value={this.state.startTime.value}
                        style={style}
                        id="startTime"
                        errorText={this.state.startTime.error ? ERROR_MSG : ''}
                    />
                </div>
                <div>
                    <TextField
                        floatingLabelText="End Time"
                        onChange={this.handleStopTimeChange}
                        type="number"
                        errorText={this.state.stopTime.error ? ERROR_MSG : ''}
                        style={style}
                        id="stopTime"
                    />
                </div>
            </div>
        );
    }
}
