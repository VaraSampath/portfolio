import {
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandTypescript,
  IconFileTypeCss,
  IconHtml,
  IconJson,
  IconPerspective,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { FloatingDock } from "../ui/floating-dock";
import SlideHeader from "./slide-header";

const ServicesSlide = () => {
  const FrontendItems = [
    { icon: <IconBrandReact />, href: "", title: "ReactJs" },
    { icon: <IconBrandNextjs />, href: "", title: "NextJs" },
    { icon: <IconBrandTypescript />, href: "", title: "Typescript" },
    { icon: <IconBrandTailwind />, href: "", title: "Tailwind" },
    { icon: <IconHtml />, href: "", title: "HTML" },
    { icon: <IconFileTypeCss />, href: "", title: "CSS" },
    { icon: <IconPerspective />, href: "", title: "Responsive" },
  ];
  const backendItems = [
    { icon: <IconBrandNodejs />, href: "", title: "NodeJs" },
    { icon: <IconBrandStripe />, href: "", title: "Strapi" },
  ];
  const authItems = [
    { icon: <IconBrandNextjs />, href: "", title: "Next-Auth" },
    { icon: <IconJson />, href: "", title: "JWT-jsonwebtoken" },
  ];
  const others = [
    "Zod",
    "react-hook-form",
    "React-Query",
    "Type Safety",
    "State Management",
    "UI Libraries",
    "Rest API",
    "Modern Js Tech Stack 😁",
  ];

  const ormItems = [{ icon: <IconBrandPrisma />, href: "", title: "Prisma" }];
  return (
    <motion.div
      initial={{
        y: 15,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "linear",
        staggerChildren: 5,
      }}
      className="flex flex-col justify-center h-full"
    >
      <SlideHeader
        title="what i do"
        heading="Services"
      />
      <h1 className="text-primary-orange">Frontend</h1>
      <FloatingDock
        items={FrontendItems}
        desktopClassName="mx-0 w-max my-5"
        mobileClassName="my-5 w-full"
      />
      <h1 className="text-primary-orange">Backend</h1>
      <FloatingDock
        items={backendItems}
        desktopClassName="mx-0 w-max my-5"
        mobileClassName="my-5 w-full"
      />
      <h1 className="text-primary-orange">Authentication</h1>
      <FloatingDock
        items={authItems}
        desktopClassName="mx-0 w-max my-5"
        mobileClassName="my-5 w-full"
      />
      <h1 className="text-primary-orange">ORM</h1>
      <FloatingDock
        items={ormItems}
        desktopClassName="mx-0 w-max my-5"
        mobileClassName="my-5 w-full"
      />
      <h1 className="text-primary-orange">Other Techs</h1>
      <p className=" tracking-wider">{others.join(", ")}</p>
    </motion.div>
  );
};

export default ServicesSlide;
