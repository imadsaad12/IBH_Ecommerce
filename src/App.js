import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import axios from 'axios';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (
    //   error.response &&
    //   error.response.status === codes.UNAUTHORIZED &&
    //   window.location !== LOGIN
    // ) {
    //   localStorage.setItem("isSessionExpired", JSON.stringify(true));
    //   logout();
    // }
    // return Promise.reject(error);
  }
);

export default App;
