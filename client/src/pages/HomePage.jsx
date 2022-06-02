import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { UserContext } from '../contexts/userContext';

export default function HomePage() {
  const [vaccines, setVaccines] = useState([]);
  const { onChangeIsAuth } = useContext(UserContext);

  return (
    <>
      <Header />
    </>
  );
}
