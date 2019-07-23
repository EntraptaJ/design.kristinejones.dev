// UI/ui/Components/Layout/Nav/useNav.tsx
import React, { useState, createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface NavContextType {
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextType>({
  navOpen: false,
  setNavOpen: () => {}
});

export const useNavContext = (initial: boolean) => {
  const [navOpen, setNavOpen] = useState<boolean>(initial);
  return { navOpen, setNavOpen };
};

export const useNav = () => {
  const { navOpen, setNavOpen } = useContext(NavContext);
  const openNav = () => setNavOpen(true);
  const closeNav = () => setNavOpen(false);
  const toggleNav = () => setNavOpen(open => !open);
  return { navOpen, openNav, closeNav, toggleNav };
};
