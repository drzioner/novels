import { createStore } from 'global-hook-store';

const GlobalState = createStore(
  {
    auth: localStorage.getItem('auth') || 'login',
    novels: [],
    covers: [],
    errors: [],
    novel: {},
    showMenu: false,
  },
  {
    setShowMenu: ({ showMenu, ...state }) => ({
      ...state,
      showMenu: !showMenu,
    }),
    logout: ({ auth, ...state }) => ({
      ...state,
      auth: 'login',
      showMenu: false,
      removeItem: localStorage.removeItem('auth'),
    }),
  },
);

export default GlobalState;
