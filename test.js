const adminPaths = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "Admin dashboard",
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "CReate Student",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "Create Faculty",
      },
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "Create Admin",
      },
    ],
  },

  {
    name: "Course Management",
    children: [
      {
        name: "Offered Courses",
        path: "/admin/offered-courses",
        element: "Create Course",
      },
    ],
  },
];

const newArray = adminPaths.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NavLink",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => {
        return {
          key: child.name,
          label: "Navlink " + child.name + child.path,
        };
      }),
    });
  }

  return acc;
}, []);

console.log(JSON.stringify(newArray));
