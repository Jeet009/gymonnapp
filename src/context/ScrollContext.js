import React, {createContext, useState} from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = props => {
  const [isScrolling, setIsScrolling] = useState();

  const handleScrollingState = data => {
    setIsScrolling(data);
  };

  const contextProps = {
    isScrolling,
    handleScrollingState,
  };

  return (
    <ScrollContext.Provider value={contextProps}>
      {props.children}
    </ScrollContext.Provider>
  );
};
