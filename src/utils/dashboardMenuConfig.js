import { BsGridFill, BsTable } from "react-icons/bs";
import { FaHeadset, FaRegUser } from "react-icons/fa";
import { LiaUsersCogSolid } from "react-icons/lia";
import { TbReportMoney, TbUsersGroup } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

export const dashboardMenuConfig = [
  {
    icon: <BsGridFill />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaRegUser />,
    label: "Profile",
    path: "/dashboard/profile",
  },
  {
    icon: <LiaUsersCogSolid />,
    label: "Manage Users",
    path: "/dashboard/manage-users",
  },
  {
    icon: <TbUsersGroup className="text-lg md:text-xl" />,
    label: "Generation",
    path: "/dashboard/generation",
  },
  {
    icon: <VscPreview />,
    label: "Review ID",
    path: "/dashboard/review-id",
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
  //   enabled: true,
  // },
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
