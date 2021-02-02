import { configureStore } from '@reduxjs/toolkit';

import search from './search';
import crewAndPassengers from './crewAndPassengers';
import modal from './modal';

const reducer = {
  search: search.reducer,
  crewAndPassengers: crewAndPassengers.reducer,
  modal: modal.reducer,
};

const store = configureStore({ reducer });

export type TState = ReturnType<typeof store.getState>;

export default store;
