import { createSlice } from "@reduxjs/toolkit";
import { FormState } from "../types.ts";
import { CURRENT_STEP, FORM_DATA } from "../../static/storage.ts";

const step = sessionStorage.getItem(CURRENT_STEP);
const formData = sessionStorage.getItem(FORM_DATA);
const initialState: FormState = {
  steps: 0,
  currentStep: step ? JSON.parse(step) : 0,
  userFormData: formData ? JSON.parse(formData) : {},
};

export const formDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.userFormData = { ...state.userFormData, ...payload };
      sessionStorage.setItem(FORM_DATA, JSON.stringify(state.userFormData));
    },
    setAllSteps: (state, { payload }) => {
      state.steps = payload;
    },
    setCurrentStep: (state, { payload }) => {
      state.currentStep = payload;
      sessionStorage.setItem(CURRENT_STEP, JSON.stringify(payload));
    },
    clearUserFormData: (state, { payload }) => {
      state.userFormData = payload;
      sessionStorage.clear();
    },
  },
});

export const { setUserData, setAllSteps, setCurrentStep, clearUserFormData } =
  formDataSlice.actions;

export default formDataSlice.reducer;
