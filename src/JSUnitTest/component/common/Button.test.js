import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Submit from '../../../components/common/Button';

describe('Testing common buttoncomponent', () => {
  it('should render my common button', () => {
    const onButtonClick  = sinon.spy();
    const button = shallow((<Submit onClick={onButtonClick }></Submit>));
    button.find('button').simulate('click');
    expect(onButtonClick.calledOnce).toBe(true)
  });
});