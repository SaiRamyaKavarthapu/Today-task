import { shallow } from 'enzyme';
import Edit from '../../components/Edit';

describe('<Edit />', () => {
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
        task: "",
        deleteItem: fn => fn,
        saveItem: fn => fn,
        editInput: fn => fn,
    }
    it('testing onSubmit method', () => {
        const value = {
            target: {
                editInput: "testing changes"
            }
        }
        console.log('editInput')
        const wrapper = shallow(<Edit {...props} />)
        wrapper.instance().onSubmit(value);
        // expect(wrapper.exists()).toBe(true);
    });
    it('testing onEditClick method', () => {
        const value = {
            target: {
                show: true
            }
        }
        const wrapper = shallow(<Edit {...props} />)
        wrapper.instance().onEditClick(value);
        expect(wrapper.state('editing')).toEqual(true);
    });
    it('testing onCancelClick method', () => {
        const value = {
            target: {
                show: true
            }
        }
        const wrapper = shallow(<Edit {...props} />)
        wrapper.instance().onCancelClick(value);
        expect(wrapper.state('editing')).toEqual(false);
    });
    it('testing saveclick method', () => {
        const value = {
            preventDefault: fn => fn
        }
        const wrapper = shallow(<Edit {...props} />);
        wrapper.instance().onSaveClick(value);
        expect(wrapper.state('show')).toEqual(true);
    });
    it('renders inputfield for handleModal', () => { //36
        const wrapper = shallow(<Edit {...props} />);
        expect(wrapper.find(`[id="modal-text"]`).simulate('hide', { target: { show: true } }));
        expect(wrapper.state('show')).toEqual(true);
    });

    it('renders button for handleModal', () => { //50
        const wrapper = shallow(<Edit {...props} />);
        expect(wrapper.find(`[id="cancel-button"]`).simulate('click', { target: { editing: true } }));
        expect(wrapper.state('show')).toBe(true);
    });

    it('renders for edit input', () => { //42
        const wrapper = shallow(<Edit {...props} />);
      const editinput = wrapper.find(`[id="edit-text"]`).simulate('change', { target: { editInput: "editing done" } });
       expect(editinput.exists()).toBe(true);
    });

    it('renders for handleEdit', () => { //28
        const wrapper = shallow(<Edit {...props} />);
       const handleeditbutton = wrapper.find(`[id="Enter-randomtext"]`).simulate('click', { target: { show: true, editing: true } });
        expect(handleeditbutton.exists()).toBe(true);  
    });
});
