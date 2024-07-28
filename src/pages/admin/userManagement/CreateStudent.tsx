import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions } from "../../../constants/global";

const student = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",

    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);

    const formData = new FormData();

    formData.append("data", JSON.stringify(data));

    console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Row gutter={8}>
            <Divider>Personal Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput name="name.firstName" type="text" label="First Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput name="name.middleName" type="text" label="Middle Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput name="name.lastName" type="text" label="Last Name" />
            </Col>

            <Col span={24} md={12} lg={8}>
              <PHInput name="gender" type="text" label="Gender" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput name="dateOfBirth" type="text" label="Date Of Birth" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHSelect
                options={bloodGroupOptions}
                name="bloogGroup"
                label="Blood Group"
              />
            </Col>
          </Row>

          <Row gutter={8}>
            <Divider>Contact Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput name="email" type="email" label="Email" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput name="contactNo" type="text" label="Contact No" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="emergencyContactNo"
                type="text"
                label="Emergency Contact No"
              />
            </Col>

            <Col span={24} md={12} lg={8}>
              <PHInput
                name="presentAddress"
                type="text"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="permanentAddress"
                type="text"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Row gutter={8}>
            <Divider>Guardian</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="guardian.fatherName"
                type="text"
                label="Father's Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="guardian.fatherOccupation"
                type="text"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="guardian.fatherContactNo"
                type="text"
                label="Father Contact No"
              />
            </Col>

            <Col span={24} md={12} lg={8}>
              <PHInput
                name="guardian.motherName"
                type="text"
                label="Mother's Name"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="guardian.motherOccupation"
                type="text"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="guardian.motherContactNo"
                type="text"
                label="Mother Contact No"
              />
            </Col>
          </Row>

          <Row>
            <Divider>Local Guardian</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput name="localGuardian.name" type="text" label="Name" />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="localGuardian.occupation"
                type="text"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="localGuardian.contactNo"
                type="text"
                label="Contact No"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="localGuardian.address"
                type="text"
                label="Address"
              />
            </Col>
          </Row>

          <Row gutter={8}>
            <Divider>Academic Info</Divider>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="admissionSemester"
                type="text"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={12} lg={8}>
              <PHInput
                name="academicDepartment"
                type="text"
                label="Academic Department"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
