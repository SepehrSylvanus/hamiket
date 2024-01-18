
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Users } from "../../../types";

export const usersSlice = createSlice({
  name: "users",
  initialState: [] as Users[],
  reducers: {
    addUser: (state, action: PayloadAction<Users>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
