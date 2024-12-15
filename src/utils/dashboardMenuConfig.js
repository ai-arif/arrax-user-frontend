import { BsGridFill, BsTable } from "react-icons/bs";
import { FaRegUser, FaUsers } from "react-icons/fa";

export const dashboardMenuConfig = [
  {
    icon: <BsGridFill />,
    label: "Dashboard",
    path: "/dashboard",
    enabled: true,
  },
  {
    icon: <FaRegUser />,
    label: "Profile",
    path: "/dashboard/profile",
    enabled: true,
  },
  {
    icon: <FaUsers />,
    label: "Generation",
    path: "/dashboard/generation",
    enabled: true,
  },
  {
    icon: <FaUsers />,
    label: "Review ID",
    path: "/dashboard/review-id",
    enabled: true,
  },
  {
    icon: <FaUsers />,
    label: "Salary",
    path: "#",
    enabled: false,
  },
  {
    icon: <FaUsers />,
    label: "Support",
    path: "#",
    enabled: false,
  },
  {
    icon: <BsTable />,
    label: "AX Ultra Matrix",
    path: "/dashboard/matrix",
    enabled: true,
  },
  // {
  //   icon: <FaUsers />,
  //   label: "Team",
  //   path: "#",
  //   enabled: true,
  //   children: [
  //     {
  //       icon: <LuUsers />,
  //       label: "Partners",
  //       path: "/dashboard/team/partners",
  //       enabled: true,
  //     },
  //   ],
  // },
];
