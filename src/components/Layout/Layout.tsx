import React from 'react';

import './styles/index.scss';

import StarWarsLogo from './StarWarsLogo';

export interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }: IProps): JSX.Element => (
  <div className="Layout">
    <header className="Layout_header">
      <StarWarsLogo />
      <h1 className="Layout_header_title">Crew and Passenger Selector</h1>
    </header>
    <main className="Layout_main">{children}</main>
  </div>
);

export default Layout;
