import React, { createContext } from 'react';
import styled from 'styled-components';
import useState from 'global-hook-store';

import GlobalState from '../GlobalState';

const { Provider } = createContext();

const Layout = styled.div`
  background: ${(props) =>
    props.color
      ? props.theme[props.color].colors.secondary
      : props.theme.light.colors.primary};
  color: ${(props) =>
    props.color
      ? props.theme[props.color].colors.tertiary
      : props.theme.light.colors.tertiary};
  display: flex;
  flex-flow: column nowrap;
  font-size: 120%;
  padding: 2rem 10% 0.5rem;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: all 350ms;
  width: 80%;
  z-index: 20;

  ${(props) =>
    props.left
      ? {
          left: props.showMenu ? '0' : '-100%',
        }
      : {
          right: props.showProfile ? '0' : '-100%',
        }};
  ul {
    font-size: 90%;
    height: 100%;
    list-style: none;
    padding: 0;
    li {
      font-size: 90%;
    }
  }
`;

function LayoutMenu({ children, left }) {
  const { state } = useState(GlobalState);
  return (
    <Provider>
      <Layout
        left={left}
        showMenu={state.showMenu}
        showProfile={state.showProfile}>
        {children}
      </Layout>
    </Provider>
  );
}

export default LayoutMenu;
