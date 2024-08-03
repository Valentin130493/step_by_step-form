import { FC } from "react";
import { Form, Input, Select } from "antd";
import { getSelectOptions } from "../../helpers/getSelectOptions.ts";
import { genderOptions } from "../../../static/genderOptions.ts";

export const UserInfoFields: FC = () => {
  return (
    <>
      <Form.Item
        label="Phone number"
        name={"phone"}
        rules={[
          { required: true, message: "This field is required" },
          {
            pattern: /^[0-9]{4}-[0-9]{3}-[0-9]{3}$/,
            message: "Format of number needs to be 0XXX-XXX-XXX",
          },
          {
            max: 12,
          },
        ]}
      >
        <Input type={"tel"} placeholder={"0XXX-XXX-XXX"} />
      </Form.Item>
      <Form.Item
        label="First name"
        name={"firstName"}
        rules={[
          {
            required: true,
            message: "This field is required",
          },
          {
            pattern: /^[a-zA-Zа-яА-ЯёЁ-]+$/,
            message:
              "First name cannot contain numbers or special characters (except hyphen)",
          },
        ]}
      >
        <Input autoComplete="off" placeholder={"John"} />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name={"lastName"}
        rules={[
          {
            required: true,
            message: "This field is required",
          },
          {
            pattern: /^[a-zA-Zа-яА-ЯёЁ-]+$/,
            message:
              "Last name cannot contain numbers or special characters (except hyphen)",
          },
        ]}
      >
        <Input autoComplete="off" placeholder={"Smith"} />
      </Form.Item>
      <Form.Item
        label="Gender"
        name={"gender"}
        rules={[{ required: true, message: "This field is required" }]}
      >
        <Select
          options={getSelectOptions(genderOptions)}
          placeholder={"Select your gender"}
        />
      </Form.Item>
    </>
  );
};
