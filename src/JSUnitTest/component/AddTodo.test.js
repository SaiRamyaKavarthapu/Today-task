import { shallow } from 'enzyme';
import AddTodo from '../../components/AddTodo';

describe('passing props', () => {
    let props = {
        data: {
            text: "What's the plan for today?",
            sub: "Todo-List",
            addButton: "AddTask",
            editButton: "Edit",
            delButton: "Delete",
            modalPopup: "Edit Task",
            placeholder: "Enter your task ",
            cancelButton: "Close",
            saveButton: "Save",
        },
        addItem: fn => fn
    }
    it('renders if classname exists or not', () => {
        const wrapper = shallow(<AddTodo {...props} />);
        expect(wrapper.find(".textField").exists()).toBe(true);
    });
    it('test onSubmit', () => {
        const value = {
            target: {
                value: 'task1'
            }
        }
        const wrapper = shallow(<AddTodo />);
        wrapper.instance().onSubmit(value);
        expect(wrapper.state('newInputItem')).toEqual('task1');
    });
    it('renders inputfield for onSubmit', () => {
        const wrapper = shallow(<AddTodo {...props} />);
        const input = wrapper.find(`[id="Enter-Text"]`).simulate('change', { target: { newItemInput: "Hello" } });
        expect(input).toEqual({});
    });
    it('renders inputfield for handleOnCreate', () => {
        const wrapper = shallow(<AddTodo {...props} />);
        const inputfield = wrapper.find(`[id="submit-click"]`).simulate('click', { target: { newItemInput: "Hello" }, preventDefault: fn => fn });
        expect(inputfield.exists()).toBe(true)
        expect(wrapper.state('newInputItem')).toEqual('');
    });
});