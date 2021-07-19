import * as React from 'react';
import { IContext } from '@space/typings';
import DashboardActions from './DashboardActions';
import { shallow } from 'enzyme';

describe('Loader', () => {
    const setup = props => {
        const component = shallow(<DashboardActions {...props} />);
        return {
            component,
        };
    };

    it('should set passed ctx prop value', () => {
        const ctx = 'dash-butoons';
        const { component } = setup({ ctx });
        expect(component.find('div').first().prop('className')).toBe(ctx);
    });

    it('should display dashboard', () => {
        const { component } = setup();
        expect(component.find('[className="dash-buttons"]')).toHaveLength(1);
    });
});