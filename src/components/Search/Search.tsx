import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchPeople } from '../../store/search';
import { openModal } from '../../store/modal';
import { TState } from '../../store';
import Person from '../Person/Person';

import './styles/index.scss';

const Search: React.FC = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect((): void => {
    dispatch(searchPeople({}));
  }, []);

  const { results, count, next, previous, crew, passengers } = useSelector(
    (state: TState) => ({
      ...state.search,
      ...state.crewAndPassengers,
    })
  );

  const peopleOnShip = useMemo(
    (): string[] =>
      [...crew, ...passengers].map((person): string => person.url),
    [crew, passengers]
  );

  return (
    <div className="Search">
      <h3 className="Search_title">Search</h3>
      <div className="Search_inputGroup">
        <input
          className="Search_input"
          type="text"
          value={searchTerm}
          onChange={(e): void => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          className="Search_clearSearch"
          type="button"
          onClick={(): void => {
            setSearchTerm('');
            dispatch(searchPeople({}));
          }}
        >
          X
        </button>
        <button
          className="Search_searchButton"
          type="button"
          onClick={(): void => {
            dispatch(searchPeople({ searchTerm }));
          }}
        >
          Search
        </button>
      </div>
      <div className="Search_count">{count} results</div>
      {(next || previous) && (
        <div className="Search_pagination">
          <button
            className="Search_pagination_button"
            type="button"
            onClick={(): void => {
              dispatch(searchPeople({ url: previous }));
            }}
            disabled={previous === null}
          >
            {'<'}
          </button>
          <span className="Search_pagination_label">
            Page{' '}
            {previous === null ? 1 : Number(previous.split('page=')[1]) + 1} of{' '}
            {Math.ceil(count / 10)}
          </span>
          <button
            className="Search_pagination_button"
            type="button"
            onClick={(): void => {
              dispatch(searchPeople({ url: next }));
            }}
            disabled={next === null}
          >
            {'>'}
          </button>
        </div>
      )}
      <ul className="Search_results">
        {results.map(
          (person): JSX.Element => (
            <Person
              key={person.url}
              onClick={(): void => {
                dispatch(openModal({ person, currentLocation: 'search' }));
              }}
              person={person}
              disabled={peopleOnShip.indexOf(person.url) !== -1}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default Search;
