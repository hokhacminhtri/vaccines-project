import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { UserContext } from '../contexts/userContext';

export default function HomePage() {
  const [vaccines, setVaccines] = useState([]);
  const { onChangeIsAuth } = useContext(UserContext);

  return (
    <>
      <Navbar />
    </>
  );
}
