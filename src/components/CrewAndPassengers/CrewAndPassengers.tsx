import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModal, TCurrentLocation } from '../../store/modal';
import { TState } from '../../store';
import { IPerson } from '../../types';

import PersonList from '../PersonList/PersonList';

import './styles/index.scss';

export interface IProps {
  launch: () => void;
}

const CrewAndPassengers: React.FC<IProps> = ({
  launch,
}: IProps): JSX.Element => {
  const dispatch = useDispatch();
  const { crew, passengers, maxPassengers, maxCrew } = useSelector(
    (state: TState) => state.crewAndPassengers
  );

  const personOnClick = (
    person: IPerson,
    currentLocation: TCurrentLocation
  ): void => {
    dispatch(openModal({ person, currentLocation }));
  };

  return (
    <div className="CrewAndPassengers">
      <PersonList
        title="Crew"
        people={crew}
        maxPeople={maxCrew}
        personOnClick={(person: IPerson): void => personOnClick(person, 'crew')}
      />
      <PersonList
        title="Passengers"
        people={passengers}
        maxPeople={maxPassengers}
        personOnClick={(person: IPerson): void =>
          personOnClick(person, 'passengers')
        }
      />
      <button
        className="CrewAndPassengers_launchButton"
        type="button"
        onClick={launch}
        disabled={
          passengers.length !== maxPassengers || crew.length !== maxCrew
        }
      >
        Launch
      </button>
    </div>
  );
};

export default CrewAndPassengers;
