import Image from "next/image";
import { PinContainer } from "../ui/three-d-pin";
import SlideHeader from "./slide-header";
import Link from "next/link";
import { motion } from "framer-motion";

const PortfolioSlide = () => {
  const portfolioItems = [
    {
      title: "Stack Overflow Clone",
      imgUrl: "/assets/stack-overflow.png",
      link: "https://dev-overflow-master.vercel.app/",
    },
    {
      title: "Youtube Clone",
      imgUrl: "/assets/youtube clone.png",
      link: "https://6488cc3d3b80f41d27a59859--celebrated-crostata-0d1c2c.netlify.app/",
    },
    {
      title: "Car Rentals",
      imgUrl: "/assets/car rental.png",
      link: "https://car-hub-ogrq.vercel.app/",
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
      className="flex flex-col  h-full justify-center"
    >
      <SlideHeader
        title="what i did"
        heading="Portfolio"
      />
      <div className="max-lg:flex max-lg:flex-wrap lg:grid grid-cols-2 gap-4">
        {portfolioItems.map((each) => (
          <PinContainer
            key={each.title}
            title={each.title}
            href={each.link}
          >
            <div className="flex basis-full flex-col w-[250px] h-[14rem] lg:w-[20rem] lg:h-[10rem]">
              <Image
                src={each.imgUrl}
                alt={each.title}
                fill
              />
            </div>
          </PinContainer>
        ))}
        <div className="flex justify-center items-center max-lg:mt-10">
          <p>
            More Projects @
            <Link
              href={"https://github.com/VaraSampath"}
              target="_blank"
              className="text-primary-orange"
            >
              {" "}
              Github{" "}
            </Link>{" "}
            like (full auth system using Next-auth, Prisma), Open source
            contributions.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSlide;
