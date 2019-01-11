import * as actions from "./usersActions";
import * as Api from "../../api/Api";
import merge from "deepmerge";

//removing Duplicate Objects
function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

export const fetchUsers = props => async (dispatch, getState) => {
  try {
    const countUsers = getState().users.countUsers;
    const oldUsers = getState().users.users;

    if (
      (Number(countUsers) > 0 &&
        Number(countUsers) === Object.keys(oldUsers).length) ||
      Object.keys(oldUsers).length >= props.limitUsers + props.offsetUsers
    ) {
      return;
    }

    dispatch(actions.fetchUsersStart());
    const res = await Api.User.fetchUsersLimit(
      props.limitUsers,
      props.offsetUsers
    );
    const count = await Api.User.getCountUsers();
    const result = merge(oldUsers, res.data);
    const users = removeDuplicates(result, "id");

    dispatch(
      actions.fetchUsersOK({
        users: users,
        count: Number(count.data.count)
      })
    );
  } catch (e) {
    dispatch(actions.fetchUsersError(e.message));
  }
};

export const deleteUser = deleteId => async dispatch => {
  try {
    dispatch(actions.deleteUserStart());
    await Api.User.deleteUser(deleteId);
    const count = await Api.User.getCountUsers();
    dispatch(
      actions.deleteUserOk({
        deleteId,
        count: Number(count.data.count)
      })
    );
  } catch (e) {
    dispatch(actions.deleteUserError(e.message));
  }
};

export const updateUser = newProduct => async dispatch => {
  try {
    dispatch(actions.updateUserStart());

    delete newProduct["created_at"];
    delete newProduct["updated_at"];

    const { data } = await Api.User.updateUser(newProduct.id, newProduct);

    dispatch(
      actions.updateUserOk({
        data
      })
    );
  } catch (e) {
    dispatch(actions.updateUserError(e.message));
  }
};
