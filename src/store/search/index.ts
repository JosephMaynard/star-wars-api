import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IPerson, IPeopleResponce } from '../../types';

export interface IPersonReducer {
  loading: boolean;
  error: boolean;
  results: IPerson[];
  count: number;
  next: string | null;
  previous: string | null;
}

const initialState: IPersonReducer = {
  loading: true,
  error: false,
  results: [],
  count: 0,
  next: null,
  previous: null,
};

export interface ISearchPeopleOptions {
  url?: string | null;
  searchTerm?: string;
}

export const searchPeople = createAsyncThunk(
  'people/searchPeople',
  async ({ url, searchTerm }: ISearchPeopleOptions) => {
    let peopleResponse: IPeopleResponce = await fetch(
      url
        ? url
        : `https://swapi.dev/api/people/${
            searchTerm ? `?search=${searchTerm}` : ''
          }`
    ).then((response) => response.json());
    return peopleResponse;
  }
);

const search = createSlice({
  name: 'people',
  initialState,
  reducers: {
    clearPeople: (state) => initialState,
  },
  extraReducers: {
    [searchPeople.pending.toString()]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [searchPeople.fulfilled.toString()]: (
      state,
      action: PayloadAction<IPeopleResponce>
    ) => {
      state.loading = false;
      state.error = false;
      state.results = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
  },
});

export default search;
