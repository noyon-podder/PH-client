import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

const PHSelect = ({ label, name, options }: TSelectProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select
          style={{ width: "100%" }}
          {...field}
          options={options}
          size="large"
        />
        {error && (
          <small style={{ color: "red", marginTop: "2px", display: "block" }}>
            {error.message}
          </small>
        )}
      </Form.Item>
    )}
  />
);

export default PHSelect;