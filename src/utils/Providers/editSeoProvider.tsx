import React, { createContext, useState, ReactNode } from 'react';

interface EditSeoContextProps {
  pageContent: string | undefined;
  setPageContent: (content: string) => void;
}

export const EditSeoContext = createContext<EditSeoContextProps | undefined>(undefined);

// export const EditSeoProvider = ({ children }: { children: ReactNode }) => {
//   const [pageContent, setPageContent] = useState<string | undefined>(undefined);

//   return (
//     <EditSeoContext.Provider value={{ pageContent, setPageContent }}>
//       {children}
//     </EditSeoContext.Provider>
//   );
// };