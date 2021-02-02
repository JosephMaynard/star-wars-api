import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addCrewMember,
  addPassenger,
  removeCrewMemberOrPassenger,
} from '../../store/crewAndPassengers';

import { closeModal } from '../../store/modal';

import { TState } from '../../store';

import './styles/index.scss';

const Modal: React.FC = (): JSX.Element | null => {
  const dispatch = useDispatch();

  const {
    modalOpen,
    person,
    currentLocation,
    crew,
    maxCrew,
    passengers,
    maxPassengers,
  } = useSelector((state: TState) => ({
    ...state.modal,
    ...state.crewAndPassengers,
  }));

  return !modalOpen ||
    person === undefined ||
    currentLocation === undefined ? null : (
    <div className="Modal">
      <div className="Modal_background" />
      <div className="Modal_inner">
        <div className="Modal_imageWrapper">
          <img
            className="Modal_image"
            src={`/images/people/${person.url.slice(28, -1)}.jpg`}
          />
        </div>
        <div className="Modal_text">
          <p className="Modal_name">{person.name}</p>
          <p className="Modal_info">
            Gender: <b>{person.gender}</b>
          </p>
          <p className="Modal_info">
            Birth Year: <b>{person.birth_year}</b>
          </p>
          <p className="Modal_info">
            Height: <b>{person.height}</b>
          </p>
          <p className="Modal_info">
            Mass: <b>{person.mass}</b>
          </p>
          <p className="Modal_info">
            Hair colour: <b>{person.hair_color}</b>
          </p>
          <p className="Modal_info">
            Skin Colour: <b>{person.skin_color}</b>
          </p>
          <p className="Modal_info">
            Eye colour: <b>{person.eye_color}</b>
          </p>
        </div>
        <div className="Modal_buttons">
          {currentLocation !== 'crew' && crew.length !== maxCrew && (
            <button
              className="Modal_button"
              type="button"
              onClick={(): void => {
                dispatch(addCrewMember(person));
                dispatch(closeModal());
              }}
            >
              Add to crew
            </button>
          )}
          {currentLocation !== 'passengers' &&
            passengers.length !== maxPassengers && (
              <button
                className="Modal_button"
                type="button"
                onClick={(): void => {
                  dispatch(addPassenger(person));
                  dispatch(closeModal());
                }}
              >
                Add to passengers
              </button>
            )}
          {currentLocation !== 'search' && (
            <button
              className="Modal_button"
              type="button"
              onClick={(): void => {
                dispatch(removeCrewMemberOrPassenger(person));
                dispatch(closeModal());
              }}
            >
              Remove from ship
            </button>
          )}
          <button
            className="Modal_button"
            type="button"
            onClick={(): void => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
