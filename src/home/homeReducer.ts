import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

export interface homeReducerState {
  selectedItem: string;
}

const initialState = {
  selectedItem: "",
} as homeReducerState;

export type Action = { type: "SELECTED_ITEM"; payload: string };

export const counterSlice = createSlice({
  name: "homePageReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setItem: (state, action: PayloadAction<string>) => {
      state.selectedItem = action.payload
    },
  },
});

export const { setItem } = counterSlice.actions;

export const getselectedItem = (state: RootState) =>
  state.homePageStore.selectedItem;

export default counterSlice.reducer;
