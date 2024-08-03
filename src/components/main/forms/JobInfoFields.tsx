import { FC } from "react";

import { Input, Select, Form } from "antd";
import { useProfessionOptions } from "../hooks/useProfessionOptions.ts";

export const JobInfoFields: FC = () => {
  const options = useProfessionOptions();
  return (
    <>
      <Form.Item
        label="Job title"
        name="jobTitle"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Select options={options} placeholder={"Select your job title"} />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Input placeholder={"Enter your address"} />
      </Form.Item>
    </>
  );
};
