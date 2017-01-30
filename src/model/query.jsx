import Clause from './condition_clause.jsx';

export default class Query {
    table_name = '';
    start_time = '';
    end_time = '';
    select_fields = [];
    where_clause = [[new Clause()]];
};
