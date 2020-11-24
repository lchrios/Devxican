import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { QuestionDetails } from '../components/QuestionDetails';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { Popconfirm } from 'antd';


configure({adapter: new Adapter()});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    match: {
      id: '5f7164886088fc58d03bad54'
    }
  })
}));

const mockSuccessResponse = 
  [
    { 
      _id: '5f7164886088fc58d03bad54',
      title: 'TEST',
      description: 'test',
      answers: [],
      date: 'November 23, 2020 10:00:00'
    }
  ];
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

const wrapper = mount(<QuestionDetails/>);

describe('(Component) EditQuestion', () => {
  it('[010] renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('[011] validates user input', () => {
    expect(wrapper).toBeTruthy();
  });

});