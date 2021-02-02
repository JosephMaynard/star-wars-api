import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPerson } from '../../types';

export interface ICrewAndPassengersReducer {
  crew: IPerson[];
  passengers: IPerson[];
  maxCrew: number;
  maxPassengers: number;
}

export const initialState: ICrewAndPassengersReducer = {
  crew: [],
  passengers: [],
  maxCrew: 4,
  maxPassengers: 6,
};

const crewAndPassengers = createSlice({
  name: 'people',
  initialState,
  reducers: {
    clearCrewAndPassengers: () => initialState,
    addCrewMember: (state, action: PayloadAction<IPerson>) => {
      if (state.crew.length < state.maxCrew) {
        state.crew.push(action.payload);
      }
      state.passengers = state.passengers.filter(
        (passenger): boolean => passenger.url !== action.payload.url
      );
    },
    addPassenger: (state, action: PayloadAction<IPerson>) => {
      if (state.passengers.length < state.maxPassengers) {
        state.passengers.push(action.payload);
      }
      state.crew = state.crew.filter(
        (crewMember): boolean => crewMember.url !== action.payload.url
      );
    },
    removeCrewMemberOrPassenger: (state, action: PayloadAction<IPerson>) => {
      state.crew = state.crew.filter(
        (crewMember): boolean => crewMember.url !== action.payload.url
      );
      state.passengers = state.passengers.filter(
        (passenger): boolean => passenger.url !== action.payload.url
      );
    },
  },
});

export const {
  clearCrewAndPassengers,
  addCrewMember,
  addPassenger,
  removeCrewMemberOrPassenger,
} = crewAndPassengers.actions;

export default crewAndPassengers;
