import React from 'react';

import './styles/index.scss';

export interface IProps {
  reset: () => void;
}

const Launch: React.FC<IProps> = ({ reset }: IProps): JSX.Element => {
  return (
    <div className="Launch">
      <div className="Launch_stars Launch_stars_1" />
      <div className="Launch_stars Launch_stars_2" />
      <div className="Launch_stars Launch_stars_3" />
      <div className="Launch_stars Launch_stars_4" />
      <h1 className="Launch_text">Launch!</h1>
      <div className="Launch_overlay" onAnimationEnd={reset} />
    </div>
  );
};

export default Launch;
