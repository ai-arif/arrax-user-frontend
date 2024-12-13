import { BsGridFill, BsTable } from "react-icons/bs";
import { FaRegUser, FaUsers } from "react-icons/fa";

export const dashboardMenuConfig = [
  {
    icon: <BsGridFill />,
    label: "Dashboard",
    path: "/dashboard",
  },
  // {
  //   icon: <FaRegUser />,
  //   label: "Profile",
  //   path: "/dashboard/profile",
  // },
  {
    icon: <FaUsers />,
    label: "Team",
    path: "/dashboard/team",
  },
  {
    icon: <BsTable />,
    label: "AX Ultra Matrix",
    path: "/dashboard/matrix",
  },
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
  //     {
  //       icon: <LiaUserEditSolid />,
  //       label: "Links",
  //       path: "/dashboard/team/links",
  //     },
  //     {
  //       icon: <BsGridFill />,
  //       label: "Stats",
  //       path: "/dashboard/team/stats",
  //     },
  //   ],
  // },
  // {
  //   icon: <BsGridFill />,
  //   label: "Marathon",
  //   path: "/dashboard/marathon",
  // },
  // {
  //   icon: <BsGridFill />,
  //   label: "Social",
  //   path: "/dashboard/social",
  // },
  // {
  //   icon: <BsGridFill />,
  //   label: "NFTs",
  //   path: "/dashboard/nfts",
  // },
  // {
  //   icon: <BsGridFill />,
  //   label: "Information",
  //   path: "#",
  //   children: [
  //     {
  //       icon: <BsGridFill />,
  //       label: "Booking",
  //       path: "/dashboard/information/booking",
  //     },
  //     {
  //       icon: <BsGridFill />,
  //       label: "Blockchain",
  //       path: "/dashboard/information/blockchain",
  //     },
  //   ],
  // },
  // {
  //   icon: <BsGridFill />,
  //   label: "Promo & PDFs",
  //   path: "/dashboard/promo-pdf",
  // },
];
