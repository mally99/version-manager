import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IConfig } from "../interfaces/configTypes";
import { mockBranches, mockConfig } from "../mockData/mockData";

export interface AppState {
  config: IConfig;
  branches: string[];
}
const initialState: AppState = {
  config: mockConfig,
  branches: mockBranches,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<IConfig>) => {
      state.config = action.payload;
    },
  },
});

export const { setConfig } = appSlice.actions;

export default appSlice.reducer;
