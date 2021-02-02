import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Search from './components/Search/Search';
import Layout from './components/Layout/Layout';
import CrewAndPassengers from './components/CrewAndPassengers/CrewAndPassengers';
import Modal from './components/Modal/Modal';
import Launch from './components/Launch/Launch';

import { clearCrewAndPassengers } from './store/crewAndPassengers';

function App() {
  const dispatch = useDispatch();
  const [view, setView] = useState<'addPeople' | 'launch'>('addPeople');
  const launch = (): void => {
    setView('launch');
    dispatch(clearCrewAndPassengers());
  };
  return view === 'launch' ? (
    <Launch
      reset={(): void => {
        setView('addPeople');
      }}
    />
  ) : (
    <>
      <Layout>
        <Search />
        <CrewAndPassengers launch={launch} />
      </Layout>
      <Modal />
    </>
  );
}

export default App;
