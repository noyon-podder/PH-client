import { Button, Modal, Table } from "antd";

import {
  useAddFacultiesMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagement";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement.api";
import { TFaculty } from "../../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";

type TActionItem = {
  key: string;
  title: string;
  code: string;
};
const Courses = () => {
  // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

  const { data: courses, isFetching } = useGetAllCoursesQuery(undefined);

  const tableData = courses?.data?.map(({ _id, title, prefix, code }) => ({
    key: _id,
    title,
    code: `${prefix}${code}`,
  }));

  const columns = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },
    {
      title: "Credits",
      key: "credits",
      dataIndex: "credits",
    },
    {
      title: "Action",
      key: "*",
      render: (item: TActionItem) => {
        console.log("action item", item);
        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];

  return (
    <Table
      columns={columns}
      loading={isFetching}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

const AddFacultyModal = ({ facultyInfo }: { facultyInfo: TActionItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultyData } = useGetAllFacultiesQuery(undefined);
  const [addFaculties] = useAddFacultiesMutation();

  const facultyOption = facultyData?.data.map((item: TFaculty) => ({
    value: item._id,
    label: item.fullName,
  }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const facultyData = {
      courseId: facultyInfo.key,
      data,
    };

    console.log(facultyData);

    addFaculties(facultyData)
      .unwrap()
      .then((res) => {
        console.log(res);
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Button onClick={showModal}>Add Faculties</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            mode="multiple"
            name="faculties"
            label="Faculty"
            options={facultyOption}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
