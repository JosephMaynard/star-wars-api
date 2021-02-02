import React from 'react';

import { IPerson } from '../../types';

import Person from '../Person/Person';
import EmptySeat from '../EmptySeat/EmptySeat';

import './styles/index.scss';

export interface IProps {
  title: string;
  people: IPerson[];
  maxPeople: number;
  personOnClick: (person: IPerson) => void;
}

const PersonList: React.FC<IProps> = ({
  title,
  people,
  maxPeople,
  personOnClick,
}: IProps): JSX.Element => (
  <div className="PersonList">
    <h3 className="PersonList_title">
      {title}
      <span className="PersonList_total">
        ( {people.length} of {maxPeople} )
      </span>
    </h3>
    <ul className="PersonList_ul">
      {people.map(
        (person): JSX.Element => (
          <Person
            key={person.url}
            person={person}
            onClick={(): void => personOnClick(person)}
          />
        )
      )}
      {Array.from(new Array(maxPeople - people.length)).map(
        (_, index): JSX.Element => (
          <EmptySeat key={`empty-seat-${title}-${index}`} />
        )
      )}
    </ul>
  </div>
);

export default PersonList;
