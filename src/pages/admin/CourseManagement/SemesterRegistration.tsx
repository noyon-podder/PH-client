import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterStatusOptions } from "../../../constants/semester";
import { toast } from "sonner";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";
import { useAddRegisterSemesterMutation } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";

const SemesterRegistration = () => {
  const { data: academicSemester } = useGetAllSemesterQuery([
    {
      name: "sort",
      value: "year",
    },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} - ${item.year}`,
  }));

  const [addRegisterSemester] = useAddRegisterSemesterMutation();

  const handelSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    // semester data for send redux api
    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    console.log(semesterData);

    try {
      console.log(semesterData);
      const res = (await addRegisterSemester(semesterData)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester Created", { id: toastId });
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col lg={8}>
        <PHForm
          onSubmit={handelSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />
          <PHSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <PHInput type="text" name="minCredit" label="Min Credit" />
          <PHInput type="text" name="maxCredit" label="Max Credit" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default SemesterRegistration;
