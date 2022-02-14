import axios from 'axios';
import * as actions from '../api';

const api =
  ({ dispatch }: { dispatch: any }) =>
  (next: any) =>
  async (action: any) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    console.log('starting 2');

    next(action);

    try {
      const response = await axios.request({
        baseURL:
          'https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public',
        url,
        method,
        data
      });

      console.log(response.data);
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error: any) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
