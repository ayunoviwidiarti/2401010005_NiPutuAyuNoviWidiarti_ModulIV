import { createContext, useState } from 'react';

export const BiodataContext = createContext({
  biodata: null,
  setBiodata: () => {},
});

export function BiodataProvider({ children }) {
  const [biodata, setBiodata] = useState(null);

  return (
    <BiodataContext.Provider value={{ biodata, setBiodata }}>
      {children}
    </BiodataContext.Provider>
  );
}