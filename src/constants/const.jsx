const ATTRIBUTES = [
    "time",
    "source_vn",
    "destination_vn",
    "source_port",
    "destination_port",
    "traffic"
];

const OPERATORS = [
    '=',
    '!='
];

const REMOVE = '#EF9A9A';
const ADD = '#90CAF9';

let constants = {
    ATTRIBUTES: ATTRIBUTES,
    OPERATORS: OPERATORS,
    COLORS: {
        REMOVE: REMOVE,
        ADD: ADD
    }
};

export default constants;
