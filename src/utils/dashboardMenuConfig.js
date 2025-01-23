import { BsGridFill } from "react-icons/bs";
import { FaHeadset, FaRegUser } from "react-icons/fa";
import { LiaUsersCogSolid } from "react-icons/lia";
import { TbReportMoney, TbSettings, TbUsersGroup } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";

export const dashboardMenuConfig = [
  {
    icon: <BsGridFill />,
    label: "Dashboard",
    path: "/dashboard",
    roles: ["user", "admin"],
    enabled: true,
  },
  {
    icon: <FaRegUser />,
    label: "Profile",
    path: "/dashboard/profile",
    roles: ["user", "admin"],
    enabled: true,
  },
  {
    icon: <LiaUsersCogSolid className="text-base md:text-lg" />,
    label: "Manage Users",
    path: "/dashboard/admin/manage-users",
    roles: ["admin"],
    enabled: true,
  },
  {
    icon: <TbUsersGroup className="text-lg md:text-xl" />,
    label: "Generation",
    path: "/dashboard/generation",
    roles: ["user", "admin"],
    enabled: true,
  },
  {
    icon: <VscPreview />,
    label: "Review ID",
    path: "/dashboard/review-id",
    roles: ["user", "admin"],
    enabled: true,
  },
  {
    icon: <TbReportMoney className="text-lg md:text-xl" />,
    label: "Bonus",
    path: "#",
    roles: ["user", "admin"],
    enabled: true,
  },
  {
    icon: <FaHeadset />,
    label: "Support",
    path: "#",
    roles: ["user", "admin"],
    enabled: true,
  },
  {
    icon: <TbSettings className="text-lg md:text-xl" />,
    label: "Settings",
    path: "/dashboard/admin/settings",
    roles: ["admin"],
    enabled: true,
  },
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
