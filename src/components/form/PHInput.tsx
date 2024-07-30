import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input
              status={error ? "error" : undefined}
              type={type}
              id={name}
              {...field}
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
