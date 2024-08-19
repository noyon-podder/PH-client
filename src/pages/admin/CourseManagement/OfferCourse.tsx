import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import PHInput from "../../../components/form/PHInput";
import { useState } from "react";
import { useGetAllRegisterSemestersQuery } from "../../../redux/features/admin/courseManagement";

type TAcademicFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

const OfferCourse = () => {
  const [id, setId] = useState("");
  const { data: academicFacultyData } = useGetAcademicFacultyQuery(undefined);
  const { data: regestratingSemesterData } =
    useGetAllRegisterSemestersQuery(undefined);

  console.log(regestratingSemesterData);

  const semesterRegistrationOptions = regestratingSemesterData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.academicSemester.name,
    })
  );
  const academicFacultyOptions = academicFacultyData?.data?.map(
    (item: TAcademicFaculty) => ({
      value: item._id,
      label: item.name,
    })
  );

  const handelSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(" i am click", data);
  };

  return (
    <Flex justify={"center"} align={"middle"}>
      <Col lg={8}>
        <PHForm
          onSubmit={handelSubmit}
          // resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelectWithWatch
            onValueChange={setId}
            label="Semester Registration"
            name="semesterRegistration"
            options={semesterRegistrationOptions}
          />
          <PHSelectWithWatch
            onValueChange={setId}
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />
          <PHInput disabled={!id} name="test" type="text" label="TEst" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
