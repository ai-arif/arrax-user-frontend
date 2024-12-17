import { BsGridFill, BsTable } from "react-icons/bs";
import { FaHeadset, FaRegUser } from "react-icons/fa";
import { TbReportMoney, TbUsersGroup } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

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
    icon: <TbUsersGroup className="text-lg md:text-xl" />,
    label: "Generation",
    path: "/dashboard/generation",
    enabled: true,
  },
  {
    icon: <VscPreview />,
    label: "Review ID",
    path: "/dashboard/review-id",
    enabled: true,
  },
  {
    icon: <TbReportMoney className="text-lg md:text-xl" />,
    label: "Salary",
    path: "#",
    enabled: false,
  },
  {
    icon: <FaHeadset />,
    label: "Support",
    path: "#",
    enabled: false,
  },
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
