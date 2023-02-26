import { shallow } from 'enzyme';
import App from '../../components/App'

describe('rendering my component', () => {
  let props = {
    task: "",
    deleteItem: fn => fn,
    saveItem: fn => fn,
    findItem: fn => fn
  }
  it('should test App component with default state of empty array', () => {
    const wrapper = shallow(<App data={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call addItem method', () => {
    const value = {
      target: {
        item: "Create new Item"
      }
    }
    const wrapper = shallow(<App />);
    wrapper.instance().addItem(value);
    wrapper.setState({
      data: { task: "task1" }
    })
    expect(wrapper.state('data')).toEqual({ task: "task1"});
  });
  it('should call saveItem method', () => {
    const oldItem =  ['task1', 'task2']
    const newItem = [{ selectedItem: "task1added" }, "task2added"]
    const wrapper = shallow(<App {...props} />);
    wrapper.setState({
      data: [{ task: "Selected Item" }]
    })
    wrapper.instance().saveItem(oldItem, newItem);
    expect(wrapper.state('data')).toEqual([{ task: "Selected Item" }]);
  });

  it('should call deleteItem method', () => {
    const item = ["Selected item","Another selected item"]
    const wrapper = shallow(<App {...props} />);
    wrapper.setState({
      data:[{task:"Selected Item"}]
    })
     wrapper.instance().deleteItem(item);
     expect(wrapper.state('data')).toEqual([]);
  });
});