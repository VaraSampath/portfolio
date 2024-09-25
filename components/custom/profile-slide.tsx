import { IconBrandGithub, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import StrokeText from "./stroke-text";
import { motion } from "framer-motion";

const ProfileSlide = () => {
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
      className="flex flex-col justify-center items-start h-full"
    >
      <div className="flex flex-col gap-4">
        <p className=" text-orange-text text-sm">Full Stack Developer NextJs</p>
        <h1 className=" font-bold text-[#f9f9f9] text-4xl">
          Varasampath Borra
        </h1>
        <p className="gray-text">
          NextJs Developer with a passion for developing innovative web
          applications. Seeking a challenging position to utilize my technical
          skills and contribute to the success of a dynamic organization.
        </p>
      </div>
      <div className="flex flex-wrap justify-between lg:flex-row gap-2 lg:gap-8 ">
        <StrokeText
          text="Projects"
          value={40}
        />
        <StrokeText
          text="Projects Completed"
          value={37}
        />
        <StrokeText
          text="Experience"
          value={"02"}
        />
      </div>
      <button className=" gradient-linear py-2 px-5 rounded-md font-bold text-black">
        <Link
          href={"https://github.com/VaraSampath"}
          className="flex items-center gap-2"
        >
          <IconBrandGithub />
          <span>Github</span>
          <IconArrowRight />
        </Link>
      </button>
    </motion.div>
  );
};

export default ProfileSlide;
