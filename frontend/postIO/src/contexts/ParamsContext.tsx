import { createContext } from 'react';

const ParamsContext = createContext<{ categoryId?: string }>({});

const ParamsProvider = ({ children }: { children: React.ReactNode }) => {
  const categoryId = location.pathname.split('/')[2];
  return <ParamsContext.Provider value={{ categoryId }}>{children}</ParamsContext.Provider>;
};

export { ParamsContext, ParamsProvider };
