import React from 'react';
import ReactDom from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Layout} from 'components/Layout';

import {initStore, history} from './store';

const {store, persistor} = initStore()

ReactDom.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Layout/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
);
