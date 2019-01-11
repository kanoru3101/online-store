import * as Api from "../../api/Api";
import * as actions from "./appActions";

export const init = () => async dispatch => {
  try {
    Api.initApi();
    dispatch(actions.singInStart({}));

    const user = await Api.User.getCurrent();

    dispatch(
      actions.singInOk({
        user: user.data.user
      })
    );
  } catch (e) {
    Api.removeToken(undefined);
    dispatch(
      actions.singInError({
        user: undefined
      })
    );
  }
};

export const setToken = token => async dispatch => {
  Api.setToken(token);
  const user = await Api.User.getCurrent();
  dispatch(
    actions.singInOk({
      user: user.data.user
    })
  );
};

export const removeToken = () => async dispatch => {
  Api.removeToken(undefined);
  dispatch(
    actions.removeToken({
      user: undefined
    })
  );
};
