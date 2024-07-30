import { useParams } from "react-router-dom";
import { useSingleStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { Col, Divider, Row } from "antd";

const StudentDetails = () => {
  const { studentId } = useParams();

  const { data, isLoading } = useSingleStudentQuery(studentId);

  const student = data?.data;

  console.log(data);

  return (
    <>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <div
          style={{
            maxWidth: "800px",
            border: "1px solid #e3e3e3",
            padding: "15px",
            margin: "0 auto",
          }}
        >
          <Divider>Personal Info</Divider>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Name: </Col>
            <Col span={12}>{student?.fullName}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Roll No: </Col>
            <Col span={12}>{student?.id}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Email: </Col>
            <Col span={12}>{student?.email}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Contact No: </Col>
            <Col span={12}>{student?.contactNo}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Emergency Contact No: </Col>
            <Col span={12}>{student?.emergencyContactNo}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Present Address: </Col>
            <Col span={12}>{student?.presentAddress}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Permanent Address: </Col>
            <Col span={12}>{student?.permanentAddress}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Blood Group: </Col>
            <Col span={12}>{student?.bloogGroup}</Col>
          </Row>
          <Divider>Guardian Info</Divider>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Father's Name: </Col>
            <Col span={12}>{student?.guardian?.fatherName}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Father Occupation: </Col>
            <Col span={12}>{student?.guardian?.fatherOccupation}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Father Contact No: </Col>
            <Col span={12}>{student?.guardian?.fatherContactNo}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Mother's Name: </Col>
            <Col span={12}>{student?.guardian?.motherName}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Mother Occupation: </Col>
            <Col span={12}>{student?.guardian?.motherOccupation}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}>Mother Contact No: </Col>
            <Col span={12}>{student?.guardian?.motherContactNo}</Col>
          </Row>
          <Divider>Local Guardian Info</Divider>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}> Name: </Col>
            <Col span={12}>{student?.localGuardian?.name}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}> Occupation: </Col>
            <Col span={12}>{student?.localGuardian?.occupation}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}> Contact No: </Col>
            <Col span={12}>{student?.localGuardian?.contactNo}</Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col span={12}> Address: </Col>
            <Col span={12}>{student?.localGuardian?.address}</Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default StudentDetails;
