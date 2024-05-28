import { createContext, useContext } from 'react';

const RouteContext = createContext<string | undefined>(undefined);

export const useRoute = () => useContext(RouteContext);

export default RouteContext;