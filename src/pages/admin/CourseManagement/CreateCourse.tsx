import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import PHInput from "../../../components/form/PHInput";

import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";

const CreateCourse = () => {
  const { data: courses, isLoading } = useGetAllCoursesQuery(undefined);
  const [addCourse] = useAddCourseMutation();

  const preRequisiteCoursesOptions = courses?.data?.map((item) => ({
    value: item._id,
    label: `${item.title}`,
  }));

  const handelSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    // semester data for send redux api
    const courseData = {
      title: data.title,
      prefix: data.prefix,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data.preRequisiteCourses?.map((item) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };

    try {
      console.log(courseData);
      const res = (await addCourse(courseData)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Course Created", { id: toastId });
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
          <PHInput type="text" name="title" label="Title" />
          <PHInput type="text" name="prefix" label="Prefix" />
          <PHInput type="text" name="code" label="Code" />
          <PHInput type="text" name="credits" label="Credits" />
          <PHSelect
            mode="multiple"
            name="preRequisiteCourses"
            label="preRequisiteCourses"
            options={preRequisiteCoursesOptions}
            disabled={isLoading}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateCourse;
