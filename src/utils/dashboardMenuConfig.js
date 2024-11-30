import { BsGridFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

export const dashboardMenuConfig = [
  {
    icon: <BsGridFill />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <FaUsers />,
    label: "Team",
    path: "#",
    children: [
      {
        icon: <LuUsers />,
        label: "Partners",
        path: "/dashboard/team/partners",
      },
      {
        icon: <LiaUserEditSolid />,
        label: "Links",
        path: "/dashboard/team/links",
      },
      {
        icon: <BsGridFill />,
        label: "Stats",
        path: "/dashboard/team/stats",
      },
    ],
  },
  {
    icon: <BsGridFill />,
    label: "Marathon",
    path: "/dashboard/marathon",
  },
  {
    icon: <BsGridFill />,
    label: "Social",
    path: "/dashboard/social",
  },
  {
    icon: <BsGridFill />,
    label: "NFTs",
    path: "/dashboard/nfts",
  },
  {
    icon: <BsGridFill />,
    label: "Information",
    path: "#",
    children: [
      {
        icon: <BsGridFill />,
        label: "Booking",
        path: "/dashboard/information/booking",
      },
      {
        icon: <BsGridFill />,
        label: "Blockchain",
        path: "/dashboard/information/blockchain",
      },
    ],
  },
  {
    icon: <BsGridFill />,
    label: "Promo & PDFs",
    path: "/dashboard/promo-pdf",
  },
];
