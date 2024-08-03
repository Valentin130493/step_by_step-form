import { FC } from "react";
import { Row, Typography } from "antd";
import { useAppSelector } from "../../../store";

export const ModalFinalText: FC = () => {
  const formData = useAppSelector((state) => state.formData.userFormData);
  return (
    <Row style={{ minHeight: 150 }} align={"middle"}>
      <Typography.Paragraph
        style={{ fontSize: 18, margin: 0 }}
      >{`Congratulations, ${formData?.firstName} ${formData?.lastName}. You have been approved credit in ${formData?.creditAmount}$ for ${formData?.creditTerm} days.`}</Typography.Paragraph>
    </Row>
  );
};
