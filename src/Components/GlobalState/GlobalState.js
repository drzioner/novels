import { createStore } from 'global-hook-store';
import { Base64 } from 'js-base64';

const GlobalState = createStore(
  {
    auth: localStorage.getItem('auth') || 'login',
    user: localStorage.getItem('user')
      ? JSON.parse(Base64.decode(localStorage.getItem('user')))
      : {},
    novels: [],
    covers: [],
    errors: [],
    novel: {},
    showMenu: false,
    showProfile: false,
    colorTheme: localStorage.getItem('color') || 'light',
  },
  {
    setShowMenu: ({ showMenu, ...state }) => ({
      ...state,
      showMenu: !showMenu,
    }),
    setShowProfile: ({ showProfile, ...state }) => ({
      ...state,
      showProfile: !showProfile,
    }),
    logout: ({ auth, ...state }) => ({
      ...state,
      auth: 'login',
      user: {},
      showMenu: false,
      showProfile: false,
      removeAuth: localStorage.removeItem('auth'),
      removeUser: localStorage.removeItem('user'),
    }),
  },
);

export default GlobalState;
