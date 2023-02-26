import React from 'react';
import { shallow } from 'enzyme';
import TodoInput from '../../../components/common/InputField';

describe("testing common input", () => {
    it("should render my component", () => {
        const wrapper = shallow(<TodoInput />);
        const commonInput = (wrapper.find('input'))
        expect(commonInput.exists()).toBe(true);
    });
});