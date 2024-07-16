import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { monthOptions } from "../../../constants/global";
import { semesterOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((item) => ({
  value: String(currentYear + item),
  label: String(currentYear + item),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  const academicSemesterSchema = z.object({
    name: z.string({ required_error: "This field is required" }),
    year: z.string({ required_error: "This field is required" }),
    startMonth: z.string({ required_error: "This field is required" }),
    endMonth: z.string({ required_error: "This field is required" }),
  });

  return (
    <Row justify={"center"} align={"middle"}>
      <Col lg={8}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect label="Name" name="name" options={semesterOptions} />
          <PHSelect label="Year" name="year" options={yearOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAcademicSemester;
