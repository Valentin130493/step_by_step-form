import { FC, ReactNode, useEffect, useState } from "react";
import { Button, Form, Modal, Row } from "antd";
import {
  clearUserFormData,
  setCurrentStep,
  setUserData,
} from "../../../store/slices/formDataSlice.ts";
import { useAppDispatch, useAppSelector } from "../../../store";
import { useBreakpoints } from "../../../hooks/useBreakpoints.ts";
import {
  JobInfoFormValues,
  LoanInfoFormValues,
  UserInfoFormValues,
} from "../types.ts";
import { useNavigate } from "react-router";
import { useSendData } from "../hooks/useSendData.ts";
import { ModalFinalText } from "../ui/modalFinalText.tsx";

interface Props {
  name: string;
  navigateTo: string;
  children?: ReactNode;
}

export const CustomForm: FC<Props> = ({ name, navigateTo, children }) => {
  const { currentStep, steps, userFormData } = useAppSelector(
    (state) => state.formData,
  );
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formValues = Form.useWatch([], form);
  const { sendData } = useSendData();

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
    form.setFieldsValue(userFormData);
  }, [form, formValues]);

  const { isTablet, isMobile } = useBreakpoints();

  const isFirstStep = currentStep === 0;
  const finalStep = currentStep === steps;
  const handlePrevStep = () => {
    navigate(-1);
    dispatch(setCurrentStep(currentStep - 1));
  };

  const handleSubmit = async (
    values: UserInfoFormValues | JobInfoFormValues | LoanInfoFormValues,
  ) => {
    if (finalStep) {
      dispatch(setUserData(values));
      dispatch(setCurrentStep(currentStep + 1));
      await sendData({
        firstName: userFormData?.firstName,
        lastName: userFormData?.lastName,
      });
      setOpen(true);
    } else {
      dispatch(setUserData(values));
      dispatch(setCurrentStep(currentStep + 1));
      navigate(navigateTo);
    }
  };
  const handleClose = () => {
    setOpen(false);
    navigate(navigateTo);
    dispatch(setCurrentStep(0));
    dispatch(clearUserFormData({}));
  };

  return (
    <>
      <Form
        style={{ width: isMobile ? 300 : isTablet ? 400 : 450 }}
        form={form}
        layout="vertical"
        name={name}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        {children}
        <Row
          style={{ width: "100%" }}
          justify={isFirstStep ? "end" : "space-between"}
        >
          {currentStep > 0 && (
            <Button type="default" onClick={handlePrevStep}>
              Previous
            </Button>
          )}

          <Button type="primary" htmlType={"submit"} disabled={!submittable}>
            {currentStep < steps ? "Next" : "Apply"}
          </Button>
        </Row>
      </Form>
      <Modal open={open} footer={<></>} onCancel={handleClose}>
        <ModalFinalText />
      </Modal>
    </>
  );
};
