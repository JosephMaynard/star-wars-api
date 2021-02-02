import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPerson } from '../../types';

export type TCurrentLocation = 'search' | 'crew' | 'passengers';

export interface ICrewAndPassengersReducer {
  modalOpen: boolean;
  person?: IPerson;
  currentLocation?: TCurrentLocation;
}

export const initialState: ICrewAndPassengersReducer = {
  modalOpen: false,
  person: undefined,
  currentLocation: undefined,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        person: IPerson;
        currentLocation: TCurrentLocation;
      }>
    ) => {
      state.modalOpen = true;
      state.person = action.payload.person;
      state.currentLocation = action.payload.currentLocation;
    },
    closeModal: () => initialState,
  },
});

export const { openModal, closeModal } = modal.actions;

export default modal;
