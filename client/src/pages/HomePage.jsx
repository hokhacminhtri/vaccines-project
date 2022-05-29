import React, { useContext, useEffect, useState } from 'react';
import vaccineApi from '../apis/vaccineApi';
import Navbar from '../components/Navbar';
import Vaccine from '../components/Vaccine';
import { UserContext } from '../contexts/userContext';
import Footer from '../components/Footer';


export default function HomePage() {
  const [vaccines, setVaccines] = useState([]);
  const { onChangeIsAuth } = useContext(UserContext);

  useEffect(() => {
    (async function () {
      const vaccineList = await vaccineApi.getAllVaccines({});
      setVaccines([...vaccineList.data]);
    })();
    return () => {};
  }, []);

  return (
    <>
      <button onClick={() => onChangeIsAuth(false)}>Đăng xuất</button>
      <Navbar />
      {vaccines.map((vaccine, index) => (
        <Vaccine key={index} name={vaccine.name} price={vaccine.price} />
      ))}
      <Footer/>
    </>
  );
}
