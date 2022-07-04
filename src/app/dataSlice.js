import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    fetchUsers: (state, action) => {
      return {
        users: action.payload,
      };
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
      alert("User added")
    },
    editUser: (state, action) => { 
      state.users = state.users.map((user) =>
        user.user_id === action.payload.user_id
          ? { ...action.payload.userNewData }
          : user
      );
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user) => user.user_id !== action.payload
      );
    },
  },
});

export const {
  setLoading,
  fetchUsers,
  deleteUser,
  addUser,
  editUser,
} = dataSlice.actions;

export default dataSlice.reducer;
