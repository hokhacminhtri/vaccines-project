import React, { useState } from 'react';

const userContextDefaultValue = {
  username: '',
  isAuth: true,
  onChangeIsAuth: () => {},
};

const UserContext = React.createContext(userContextDefaultValue);

const UserContextProvider = (props) => {
  const [value, setValue] = useState(userContextDefaultValue);

  const onChangeIsAuth = (newIsAuth = false) => {
    setValue({ ...value, isAuth: newIsAuth });
  };

  const fullValue = { ...value, onChangeIsAuth };

  return (
    <UserContext.Provider value={fullValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, userContextDefaultValue };
export default UserContextProvider;
