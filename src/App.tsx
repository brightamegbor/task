import React from 'react';
import 'assets/css/App.css';
import { Provider } from 'react-redux';
import configStore from 'store/configure_store';
import Home from 'components/home';

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
