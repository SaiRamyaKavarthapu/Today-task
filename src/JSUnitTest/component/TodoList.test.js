import { shallow } from "enzyme";
import TodoList from '../../components/TodoList';

describe('<TodoList />', () => {
    it('should render properly', () => {
        const wrapper = shallow(<TodoList data={[]} />);
        expect(wrapper).toMatchSnapshot(); //Snapshots allows to test if the component renders correctly
    });
    it('should test <TodoList> component with list of todos', () => {
        const wrapper = shallow(
            <TodoList data={['Doing Exercise', 'Wake up early']} />
        );
        expect(wrapper.find('.list').exists()).toBe(true);
    });
});