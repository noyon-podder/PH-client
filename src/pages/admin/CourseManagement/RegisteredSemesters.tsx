import { Button, Dropdown, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import {
  useGetAllRegisterSemestersQuery,
  useUpdateRegisterSemesterMutation,
} from "../../../redux/features/admin/courseManagement";
import moment from "moment";
import { TResponse, TSemester } from "../../../types";
import { useState } from "react";
import { toast } from "sonner";

type TTableData = Pick<TSemester, "startDate" | "endDate" | "status">;

const items = [
  {
    label: "Upcoming",
    key: "UPCOMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const RegisteredSemesters = () => {
  // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);

  const [semesterId, setSemesterId] = useState("");
  const { data: semesterRegistrationData, isFetching } =
    useGetAllRegisterSemestersQuery(undefined);

  const [updateSemesterRegistration] = useUpdateRegisterSemesterMutation();

  const tableData = semesterRegistrationData?.data?.map(
    ({
      _id,
      academicSemester,
      startDate,
      endDate,
      maxCredit,
      minCredit,
      status,
    }) => ({
      key: _id,
      name: `${academicSemester.name} - ${academicSemester.year}`,
      status,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate: moment(new Date(endDate)).format("MMMM"),
      maxCredit,
      minCredit,
    })
  );

  const handleStatusUpdate = async (data) => {
    const toastId = toast.loading("Creating...");
    console.log({ semesterId });
    console.log("New status update", data.key);

    const semesterData = {
      semesterId,
      data: {
        status: data.key,
      },
    };

    try {
      console.log(semesterData);
      const res = (await updateSemesterRegistration(
        semesterData
      )) as TResponse<any>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Semester Update", { id: toastId });
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "UPCOMING") {
          color = "blue";
        }
        if (item === "ONGOING") {
          color = "green";
        }
        if (item === "ENDED") {
          color = "red";
        }

        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      render: (item) => {
        console.log(item);
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item.key)}>update</Button>
          </Dropdown>
        );
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

export default RegisteredSemesters;
