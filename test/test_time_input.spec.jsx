import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import TimeInput from '../src/components/time_input.jsx';
import Query from '../src/model/query.jsx';
import TextField from 'material-ui/TextField';


describe('<TimeInput/>', function () {
    it('Should Not allow empty inputs ', function () {
        let query = new Query();
        const wrapper = shallow(<TimeInput query={query} />);

        wrapper.find("#startTime").simulate('change', {target: {value: 1234 }});
        expect(wrapper.state('startTime').error).to.equal(false);
    });

    it('should have two inputs', function () {
        const wrapper = shallow(<TimeInput/>);
        expect(wrapper.find(TextField)).to.have.length(2)
    });
});

