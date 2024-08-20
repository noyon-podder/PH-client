import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  useGetAcademicFacultyQuery,
  useGetAllAcademicDepartmentQuery,
} from "../../../redux/features/admin/academicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import PHInput from "../../../components/form/PHInput";
import { useState } from "react";
import {
  useCreateOfferCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisterSemestersQuery,
  useGetCoursesFacultiesQuery,
} from "../../../redux/features/admin/courseManagement";
import PHSelect from "../../../components/form/PHSelect";
import { weekDaysOptions } from "../../../constants/global";
import PHTimePicker from "../../../components/form/PHTimePicker";
import moment from "moment";
import { toast } from "sonner";
import { TResponse } from "../../../types";

type TAcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");

  const { data: academicFacultyData } = useGetAcademicFacultyQuery(undefined);
  const { data: registerSemesterData } =
    useGetAllRegisterSemestersQuery(undefined);
  const { data: academicDepartmentData } =
    useGetAllAcademicDepartmentQuery(undefined);
  const { data: courseData } = useGetAllCoursesQuery(undefined);

  const { data: facultiesData, isFetching: fetchingFaculties } =
    useGetCoursesFacultiesQuery(courseId, { skip: !courseId });

  const [addOfferCourse] = useCreateOfferCourseMutation();

  const semesterRegistrationOptions = registerSemesterData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );
  const academicFacultyOptions = academicFacultyData?.data?.map(
    (item: TAcademicFaculty) => ({
      value: item._id,
      label: item.name,
    })
  );

  const academicDepartmentOptions = academicDepartmentData?.data.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const courseOptions = courseData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const facultiesOptions = facultiesData?.data?.faculties?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handelSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");

    const offerCourseData = {
      ...data,
      section: Number(data.section),
      maxCapacity: Number(data.maxCapacity),
      startTime: moment(new Date(data.startTime)).format("HH:mm"),
      endTime: moment(new Date(data.endTime)).format("HH:mm"),
    };
    console.log(offerCourseData);

    // api calling
    try {
      console.log(offerCourseData);
      const res = (await addOfferCourse(offerCourseData)) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Offer Course Created", { id: toastId });
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify={"center"} align={"middle"}>
      <Col lg={8}>
        <PHForm
          onSubmit={handelSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Semester Registration"
            name="semesterRegistration"
            options={semesterRegistrationOptions}
          />
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />
          <PHSelect
            label="Academic Department"
            name="academicDepartment"
            options={academicDepartmentOptions}
          />

          <PHSelectWithWatch
            onValueChange={setCourseId}
            label="Course"
            name="course"
            options={courseOptions}
          />
          <PHSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />
          <PHInput type="text" label="Section" name="section" />
          <PHInput type="text" label="Max Capacity" name="maxCapacity" />

          <PHSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />

          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
