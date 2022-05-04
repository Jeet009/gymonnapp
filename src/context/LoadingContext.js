import React, {createContext, useState} from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = props => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingState = data => {
    setIsLoading(data);
  };

  const contextProps = {
    isLoading,
    handleLoadingState,
  };

  return (
    <LoadingContext.Provider value={contextProps}>
      {props.children}
    </LoadingContext.Provider>
  );
};
