import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { Row, Steps } from "antd";
import { setAllSteps } from "../../store/slices/formDataSlice.ts";
import { useBreakpoints } from "../../hooks/useBreakpoints.ts";

const steps = [
  {
    title: "Personal info",
  },
  {
    title: "Job info",
  },
  {
    title: "Loan info",
  },
];
export const Header: FC = () => {
  const step = useAppSelector((state) => state.formData.currentStep);
  const dispatch = useAppDispatch();
  const { isMobile } = useBreakpoints();

  useEffect(() => {
    dispatch(setAllSteps(steps.length - 1));
  }, []);

  const items = steps.map((item) => ({
    key: item.title,
    title: isMobile ? "step" : item.title,
  }));
  return (
    <Row style={{ padding: 24, marginBottom: 36 }}>
      <Steps style={{ flexDirection: "row" }} current={step} items={items} />
    </Row>
  );
};
