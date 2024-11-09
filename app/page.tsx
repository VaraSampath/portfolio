"use client";
import LeftSection from "@/components/custom/left-section";
import Navbar from "@/components/custom/navbar";
import RightSection from "@/components/custom/right-section";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [slide, setSlide] = useState(0);
  return (
    <div className={"bg-body-bg bg-cover min-h-screen"}>
      <div className="container relative p-5 mx-auto py-11 h-full flex flex-col gap-5 overflow-hidden">
        <p className=" font-bold">Vara.</p>
        <div className="flex flex-1 max-lg:gap-0 gap-10 ">
          <LeftSection />
          <RightSection slide={slide} />
          <div className=" relative self-start max-lg:w-0 w-14 h-[50vh] hidden lg:block ">
            <div className="absolute max-lg:z-20 top-1/2 max-lg:-left-16">
              <Navbar
                activeNav={slide}
                setActiveNav={setSlide}
              />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
