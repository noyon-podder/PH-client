import { Table, TableColumnsType } from "antd";
import { useGetAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

type TFacultyData = {
  name: string;
};

const AcademicFaculty = () => {
  const { data: facultyData, isFetching } =
    useGetAcademicFacultyQuery(undefined);

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TFacultyData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      // filters: [
      //   {
      //     text: "Autumn",
      //     value: "Autumn",
      //   },
      //   {
      //     text: "Summer",
      //     value: "Summer",
      //   },
      //   {
      //     text: "Fall",
      //     value: "Fall",
      //   },
      // ],
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

export default AcademicFaculty;
