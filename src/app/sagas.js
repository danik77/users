import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { apiUrl } from "./config";
import {
  fetchUsers,
  deleteUser,
  addUser,
  editUser,
} from "./dataSlice";

function* fetchUsersSaga(action) {
  try {
    const users = yield call(axios.get, apiUrl + "/users");
    yield put(fetchUsers(users.data));
  } catch (e) {
    yield put({ type: "USERS_FETCH_FAILED", message: e.message });
  }
}

function* addUserSaga(action) {
  try {
    const response = yield call(axios.post, apiUrl + "/users", action.payload);
    yield put(addUser(response));
  } catch (e) {
    yield put({ type: "USER_CREATE_FAILED", message: e.message });
  }
}

function* editUserSaga(action) {
  try {
    const response = yield call(
      axios.put,
      apiUrl + "/user/" + action.payload.user_id,
      action.payload.userNewData
    );
    yield put(editUser(action.payload)); 
  } catch (e) {
    yield put({ type: "USER_UPDATE_FAILED", message: e.message });
  }
}

function* deleteUserSaga(action) {
  try {
    const response = yield call(
      axios.delete,
      apiUrl + "/user/" + action.payload
    );
    yield put(deleteUser(action.payload));
  } catch (e) {
    yield put({ type: "USER_DELETE_FAILED", message: e.message });
  }
}

function* MainSaga() {
  yield takeEvery("USERS_FETCH_REQUESTED", fetchUsersSaga);
  yield takeEvery("USER_DELETE_REQUESTED", deleteUserSaga);
  yield takeEvery("USER_ADD_REQUESTED", addUserSaga);
  yield takeEvery("USER_EDIT_REQUESTED", editUserSaga);
}

export default MainSaga;
