import { createSlice } from "@reduxjs/toolkit";

interface authSliceTypes {
  authType: string;
}

const initialState: authSliceTypes = {
  authType: "sign-in",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthType: (state, action) => {
      state.authType = action.payload;
    },
  },
});

export default authSlice.reducer;
