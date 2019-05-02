import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {Video} from '../Component/Video';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Video />, div);
  ReactDOM.unmountComponentAtNode(div);
});


// describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });


// describe('App component', () => {
//   // it('starts with a count of 0', () => {
//     // it('increments count by 1 when the increment button is clicked', () => {
//     //   const wrapper = shallow(<App />);
//     //   const incrementBtn = wrapper.find('button.increment');
//     //   incrementBtn.simulate('click');
//     //   const text = wrapper.find('p').text();
//     //   expect(text).toEqual('Count: 2');
      
//   });
// });
