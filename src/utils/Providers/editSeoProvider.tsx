import React, { createContext, useState, ReactNode } from 'react';

interface PageContent {
  readPage : string;
  filePath : string;
}


interface EditSeoContextProps {
  pageContent: PageContent | undefined;
  setPageContent: (content: PageContent) => void;
  message? : string
}

export const EditSeoContext = createContext<EditSeoContextProps | undefined>(undefined);
