import {
  PiAlarm,
  PiGlobeHemisphereWest,
  PiLaptop,
  PiUsersThree,
} from "react-icons/pi";
import { SlCloudUpload } from "react-icons/sl";

export const homeAboutContents = [
  {
    id: 0,
    icon: <PiGlobeHemisphereWest />,
    title: "International community",
    description:
      "Decentralized networking platform based on smart contacts that contacts people from all over the world and opens the limitless possibilities of the new economic financial system",
  },
  {
    id: 1,
    icon: <PiUsersThree />,
    title: "Transparency and Anonymity",
    description:
      "The smart contract is public. Anyone can see the code and the entire transaction history. This guarantees the integrity of the system and real project statistics.",
  },
  {
    id: 2,
    icon: <PiAlarm />,

    title: "Zero Risk",
    description:
      "The human factor is excluded. The smart contract does not depend on anyone, there is no way to stop the platform",
  },
  {
    id: 3,
    icon: <SlCloudUpload />,
    title: "Instant transactions",
    description:
      "The profit routes from other members directly into your personal wallet. There is no hoarding in the system, the income belongs only to you",
  },
  {
    id: 4,
    icon: <PiLaptop />,
    title: "Decentralization",
    description:
      "There are no managers or administrators, there are only the creators who are equal participants in the project, like everyone else",
  },
];
