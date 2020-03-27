import React, {useState} from 'react';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import sinon from 'sinon';
import {shallow} from 'enzyme';
import {Radio} from 'antd';

import RadioGroup from "./radioGroup";

Enzyme.configure({adapter: new Adapter()});

describe('<RadioGroup />', () => {
    const radioStyle = {
        display: "block",
        height: "30px",
        lineHeight: "30px"
    };

    const options = [{label: 'first option', value: 1}, {label: 2, value: 2}, {label: 3, value: 3}];
    it('renders three <Radio/> components', () => {
        const wrapper = shallow(<RadioGroup
            options={options}/>);
        expect(wrapper.find(Radio)).toHaveLength(options.length);
    });

    it('renders an `first option`', () => {
        const wrapper = shallow(<RadioGroup options={options}/>);
        expect(wrapper.contains(<Radio key={0} value={options[0].value} style={radioStyle}>
            {options[0].label}
        </Radio>)).toBeTruthy();
    });

    it('simulates change events', () => {
        const setOptionValue = jest.fn();
        const event = {target: {name: "sample", value: 1}};
        const wrapper = shallow(<RadioGroup options={options} setOptionValue={setOptionValue}/>);
        wrapper.simulate('change', event);
        expect(setOptionValue).toHaveBeenCalledWith(1);
    });
});
