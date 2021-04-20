import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import createStore from '@redux/create';
import AppInit from './AppInit';

const App: React.FC = () => {
  return (
    <Provider store={createStore()}>
      <PersistGate persistor={persistStore(createStore())} loading={null}>
        <AppInit />
      </PersistGate>
    </Provider>
  );
};

export default App;
