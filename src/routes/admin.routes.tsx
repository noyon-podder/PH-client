import AcademicDepartment from "../pages/admin/academicMangement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicMangement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicMangement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicMangement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicMangement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicMangement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import RegisteredSemesters from "../pages/admin/CourseManagement/RegisteredSemesters";
import CreateCourse from "../pages/admin/CourseManagement/CreateCourse";
import Courses from "../pages/admin/CourseManagement/Courses";
import OfferCourse from "../pages/admin/CourseManagement/OfferCourse";
import OfferedCourse from "../pages/faculty/OfferedCourse";
import SemesterRegistration from "../pages/admin/CourseManagement/SemesterRegistration";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "students-data/:studentId",
        element: <StudentDetails />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
    ],
  },

  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semesters",
        element: <RegisteredSemesters />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        element: <OfferedCourse />,
      },
    ],
  },
];
