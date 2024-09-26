import { Timeline } from "../ui/timeline";
import SlideHeader from "./slide-header";
import { motion } from "framer-motion";

const ExperienceSlide = () => {
  const ContentBox = ({
    role,
    name,
    desc,
  }: {
    role: string;
    name: string;
    desc: string;
  }) => {
    return (
      <div className="flex gap-1 lg:gap-9">
        <div className="flex flex-col gap-5">
          <p>Role:</p>
          <p>Org Name:</p>
          <p>Description:</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-primary-orange whitespace-nowrap">{role}</p>
          <p className="text-primary-yellow">{name}</p>
          <p>{desc}</p>
        </div>
      </div>
    );
  };

  const experienceData = [
    {
      title: "Now - 2023",
      content: (
        <ContentBox
          role="SDE-1"
          desc="Working as Frontend Dev using NextJs for now. Interested to work as BE Dev too 😊"
          name="CAW Studios"
        />
      ),
    },
    {
      title: "2023 - 2022",
      content: (
        <ContentBox
          role="Frontend Dev"
          desc="Worked as Web Dev, mostly i used to talk with client and given them the delivery."
          name="Pringlesoft INC."
        />
      ),
    },
    {
      title: "2022-2021",
      content: (
        <ContentBox
          role="Data Analyst Intern"
          desc="Worked On Azure cloud Synapse tool and MS SSIS. Learned SQL and Advance SQL practices"
          name="Technovert"
        />
      ),
    },
    {
      title: "2022-2018",
      content: (
        <p>
          Pursued By <span className="text-primary-orange">BTech</span>{" "}
          (Electronics) <br /> from LBRCE, Vijayawada, India{" "}
        </p>
      ),
    },
  ];
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
      className="flex flex-col pt-14"
    >
      <SlideHeader
        title="where am i"
        heading="Experience"
      />

      <Timeline data={experienceData} />
    </motion.div>
  );
};

export default ExperienceSlide;
