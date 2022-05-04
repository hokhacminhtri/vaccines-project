import React from 'react';
import addressApi from '../apis/addressApi';

const addrContextDefaultVal = {
  provinces: [],
};

const AddressContext = React.createContext(addrContextDefaultVal);

const AddressContextProvider = (props) => {
  const [value, setValue] = React.useState(addrContextDefaultVal);

  // get all provinces
  React.useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        const apiRes = await addressApi.getAllProvinces();
        if (apiRes.status === 200 && isSub) {
          setValue({ ...value, provinces: apiRes.data });
        }
      } catch (error) {
        throw Error(error);
      }
    })();

    return () => (isSub = false);
  }, []);

  const renderValue = value;
  return (
    <AddressContext.Provider value={renderValue}>
      {props.children}
    </AddressContext.Provider>
  );
};

export { AddressContext };
export default AddressContextProvider;
