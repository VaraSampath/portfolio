import Image from "next/image";
import images from "@/public/assets";
import {
  languages,
  profileLabels,
  profileValues,
  resumeLink,
  socialLinks,
} from "@/lib/constants";
import PercentageCircle from "./percentage-circle";
import React from "react";
import Link from "next/link";
import { IconDownload } from "@tabler/icons-react";

const LeftSection = () => {
  const linkStyles = {
    facebook: "bg-facebook",
    linkedin: "bg-linkedin",
    whatsapp: "bg-whatsapp",
    twitter: "bg-twitter",
    mail: "bg-mail",
  };
  return (
    <div className=" bg-primary-bg min-w-96 rounded-2xl overflow-hidden h-max ">
      <div className="relative  w-full aspect-square">
        <div className="gradient-linear w-full h-full ">
          <Image
            src={images.profile}
            alt="vector-border"
            fill
          />
          <div className=" absolute top-2 right-4 flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-md">
            <div className="bg-lime-500  h-3 w-3 rounded-full z-40 ">
              <div className="bg-lime-500 animate-ping h-3 w-3 rounded-full z-40 " />
            </div>
            <p className=" text-xs"> Available for new projects </p>
          </div>
        </div>

        <Image
          className="absolute bottom-0 left-0 z-10 h-12 w-full translate-y-1/2"
          src={images.boxes}
          alt="vector-border"
          height={50}
        />
      </div>

      <div className="flex gap-5">
        <div className="flex gap-4 flex-col pt-5">
          {profileLabels.map((each) => (
            <div
              className="flex gap-5 items-center font-normal text-sm"
              key={each}
            >
              <Image
                className="h-2"
                src={images.gradientBox}
                alt="box"
                height={9}
                width={21}
              />
              <p className="gradient-text font-medium">{each.toUpperCase()}:</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 flex-col pt-5">
          {profileValues.map((each) => (
            <div
              className="flex gap-5 items-center font-normal text-sm"
              key={each}
            >
              <p className="">{each}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-9">
        <hr className="my-7 border-gray-700" />
        <div className="flex gap-5 justify-center mb-7">
          {languages.map((each) => (
            <div
              key={each.name}
              className="flex flex-col gap-3 items-center justify-center"
            >
              <PercentageCircle value={each.value} />
              <p className=" text-xs">{each.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* links */}
      <div className="flex">
        {socialLinks.map((each) => (
          <Link
            href={each.link}
            target="_blank"
            key={each.name}
            className={`flex-1 ${
              linkStyles[each.name as keyof typeof linkStyles]
            } h-12 w-full flex items-center justify-center`}
          >
            <each.icon />
          </Link>
        ))}
      </div>
      {/* download cv */}
      <div className="gradient-linear text-black">
        <Link
          href={
            resumeLink
          }
          className="flex py-3 justify-center items-center gap-2"
        >
          <IconDownload
            size={20}
            fontWeight={"bold"}
          />
          <p className="text-sm font-bold">Download CV</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftSection;
