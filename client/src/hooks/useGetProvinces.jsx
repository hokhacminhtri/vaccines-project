import { useEffect, useState } from 'react';
import addressApi from '../apis/addressApi';

export default function useGetProvinces() {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const provinceList = await addressApi.getAllProvinces();
        if (isSub) {
          setProvinces([...provinceList]);
        }
      } catch (error) {
        throw Error(error);
      }
    })();

    return () => (isSub = false);
  }, []);

  return provinces;
}
