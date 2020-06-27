import { useEffect, useCallback } from 'react';
import useState from 'global-hook-store';

import GlobalState from '../Components/GlobalState';

export default function useFetch(request, item) {
  const { state, setState } = useState(GlobalState);

  const fetchApi = (request) => {
    fetch(request)
      .then((response) => response.json())
      .then((data) => {
        let valueItem = data.response.data === false ? [] : data.response.data;
        let valueAuth =
          data.response.require === 'authorization' ? 'login' : state.auth;
        if (valueAuth === 'login') {
          localStorage.removeItem('auth');
        }
        setState({ ...state, auth: valueAuth, [item]: valueItem });
      })
      .catch((err) => {
        setState({ ...state, errors: err });
      });
  };

  const initFetch = useCallback(() => {
    fetchApi(request);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initFetch();
  }, [initFetch]);
}
