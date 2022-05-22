import React, { useEffect, useState } from 'react';
import accountApi from '../apis/accountApi';
import { ACCESS_TOKEN_LS_KEY } from '../constants';

const userContextDefaultValue = {
  username: '',
  isAuth: false,
  onChangeIsAuth: (isAuth) => {},
  onChangeValue: (newValue) => {},
};

const UserContext = React.createContext(userContextDefaultValue);

const UserContextProvider = (props) => {
  const [value, setValue] = useState(userContextDefaultValue);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_LS_KEY);
    if (accessToken) {
      accountApi.getCheckToken(accessToken).then((response) => {
        const { data, status } = response;
        if (status === 200) {
          onChangeValue({ isAuth: true, username: data.username });
        }
      });
    }
    return () => {};
  }, []);

  const onChangeIsAuth = (newIsAuth = false) => {
    setValue({ ...value, isAuth: newIsAuth });
  };

  const onChangeValue = (newValue) => setValue({ ...value, ...newValue });

  const fullValue = { ...value, onChangeIsAuth, onChangeValue };

  return (
    <UserContext.Provider value={fullValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, userContextDefaultValue };
export default UserContextProvider;
