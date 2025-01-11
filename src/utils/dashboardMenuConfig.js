import { BsGridFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { LiaUsersCogSolid } from "react-icons/lia";
import { TbUsersGroup } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

export const dashboardMenuConfig = [
  {
    icon: <BsGridFill />,
    label: "Dashboard",
    path: "/dashboard",
    roles: ["user", "admin"],
  },
  {
    icon: <FaRegUser />,
    label: "Profile",
    path: "/dashboard/profile",
    roles: ["user", "admin"],
  },
  {
    icon: <LiaUsersCogSolid className="text-base md:text-lg" />,
    label: "Manage Users",
    path: "/dashboard/admin/manage-users",
    roles: ["admin"],
  },
  {
    icon: <TbUsersGroup className="text-lg md:text-xl" />,
    label: "Generation",
    path: "/dashboard/generation",
    roles: ["user", "admin"],
  },
  {
    icon: <VscPreview />,
    label: "Review ID",
    path: "/dashboard/review-id",
    roles: ["user", "admin"],
  },
  // {
  //   icon: <TbReportMoney className="text-lg md:text-xl" />,
  //   label: "Salary",
  //   path: "#",
  // },
  // {
  //   icon: <FaHeadset />,
  //   label: "Support",
  //   path: "#",
  // },
  // {
  //   icon: <BsTable />,
  //   label: "AX Ultra Matrix",
  //   path: "/dashboard/matrix",
  // },
  // {
  //   icon: <FaUsers />,
  //   label: "Team",
  //   path: "#",
  //   children: [
  //     {
  //       icon: <LuUsers />,
  //       label: "Partners",
  //       path: "/dashboard/team/partners",
  //     },
  //   ],
  // },
];
