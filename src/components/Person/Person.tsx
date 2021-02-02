import React from 'react';
import { IPerson } from '../../types';

import './styles/index.scss';
export interface IProps {
  person: IPerson;
  onClick: () => void;
  disabled?: boolean;
}

const Person: React.FC<IProps> = ({ person, onClick, disabled }: IProps) => {
  return (
    <li className={`Person${disabled ? ' Person_disabled' : ''}`}>
      <button
        className="Person_button"
        type="button"
        onClick={onClick}
        disabled={disabled}
      >
        <span className="Person_inner">
          <span className="Person_imageWrapper">
            <img
              className="Person_image"
              src={`/images/people/${person.url.slice(28, -1)}.jpg`}
            />
          </span>
          <span className="Person_text">
            <p className="Person_name">{person.name}</p>
            <p className="Person_info">
              Gender: <b>{person.gender}</b> Birth Year:{' '}
              <b>{person.birth_year}</b>
            </p>
          </span>
        </span>
      </button>
    </li>
  );
};

export default Person;
