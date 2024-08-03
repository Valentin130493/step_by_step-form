import { FC } from "react";
import { Slider, Form } from "antd";
import { amountMarks, termsMarks } from "../../../static/sliderMarks.ts";

export const CreditInfoFields: FC = () => {
  return (
    <>
      <Form.Item
        label="Credit amount"
        name="creditAmount"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Slider marks={amountMarks} min={200} max={1000} step={100} />
      </Form.Item>
      <Form.Item
        label="Credit Term in days"
        name="creditTerm"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Slider marks={termsMarks} min={10} max={30} step={1} />
      </Form.Item>
    </>
  );
};
