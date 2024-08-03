import { AnyObject } from "antd/es/_util/type";

export interface FormDataState {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  workplace: string;
  creditAmount: number;
  creditTerm: number;
}

export interface FormState {
  steps: number;
  currentStep: number;
  userFormData: FormDataState | AnyObject;
}
