import { createContext, useContext } from "react";

interface DocsNav {
  /** Smooth-scrolls to a section id on the current page and syncs the hash. */
  navigateTo: (id: string) => void;
}

const DocsNavContext = createContext<DocsNav>({ navigateTo: () => {} });

export const DocsNavProvider = DocsNavContext.Provider;
export const useDocsNav = () => useContext(DocsNavContext);
