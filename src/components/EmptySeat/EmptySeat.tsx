import React from 'react';

import './styles/index.scss';

const EmptySeat: React.FC = (): JSX.Element => (
  <li className="EmptySeat">
    <span className="EmptySeat_label">Empty Seat</span>
  </li>
);

export default EmptySeat;
