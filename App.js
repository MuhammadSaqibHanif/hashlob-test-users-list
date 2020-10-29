import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/store/index';

import ShowList from './src/screens/showList/index';

const store = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ShowList />
      </Provider>
    </>
  );
};

export default App;
