import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const userAdmin = JSON.parse(localStorage.getItem("admin"));
const adminToken = userAdmin.access_token;

export const getMembers = createAsyncThunk(
  "members/getMembers",
  async (_, { rejectWithValue }) => {
    try {
      const respnse = await axios.get(
        "https://klabattendees.herokuapp.com/api/memberInfo",
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      return respnse.data;
    } catch (error) {
      if (!error) {
        return rejectWithValue(error);
      }

      return rejectWithValue(error.respnse.data);
    }
  }
);

export const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
  },

  extraReducers: {
    [getMembers.pending]: (state) => {
      state.status = "loading";
    },
    [getMembers.fulfilled]: (state, { payload }) => {
      (state.status = "success"), (state.members = payload);
      console.log(payload);
    },
    [getMembers.rejected]: (state, { payload }) => {
      (state.status = "failed"),
      (state.error = payload.error || payload.toString());
    },
  },
});

export const membersSelector = (state) => state.members;
export default membersSlice.reducer;
