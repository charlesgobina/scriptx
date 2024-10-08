
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UtilityContext = createContext();

const UtilityProvider = ({ children }) => {

  const [classVal, setClassVal] = useState('');

  const toggleClass = () => {
    setClassVal(classVal === '' ? 'bye' : '');
  }


  return (
    <UtilityContext.Provider value={{classVal, toggleClass }}>
      {children}
    </UtilityContext.Provider>
  );
}


export default UtilityProvider

UtilityProvider.propTypes = {
  children: PropTypes.node.isRequired,

};