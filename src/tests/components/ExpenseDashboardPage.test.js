import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDasboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly' , () => {
    
    const wrapper = shallow(<ExpenseDasboardPage />);
    expect(wrapper).toMatchSnapshot();
})