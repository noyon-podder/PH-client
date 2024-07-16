import OfferedCourse from "../pages/student/OfferedCourse";
import Result from "../pages/student/Result";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
  {
    name: "Result",
    path: "result",
    element: <Result />,
  },
];
