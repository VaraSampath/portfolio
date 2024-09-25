"use client";

import { useRef, useState } from "react";
import SlideHeader from "./slide-header";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ContactSlide = () => {
  type Inputs = {
    email: string;
    message: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    sendEmail(data.email, data.message);

  const sendEmail = (email: string, message: string) => {
    if (
      email === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      toast("Oops! Invalid Email :)");
      return null;
    }
    setLoading(true);

    emailjs
      .send(
        "service_90f96r8",
        "template_j551u6d",
        {
          user_email: email,
          message: message,
        },
        "Z7S8TAwmf4mMa7HVj"
      )
      .then(
        () => {
          toast("Thanks let's talk", {
            transition: Bounce,
          });
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );
  };

  const form = useRef<HTMLFormElement>(null);

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
      className="flex flex-col h-full justify-center"
    >
      <SlideHeader
        title="let's talk"
        heading="Contact"
      />

      <div className="">
        <form
          className="flex flex-col gap-5 "
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Email</label>
          <input
            className="text-black px-2 py-3 rounded-lg"
            type="email"
            required
            {...register("email")}
          />
          {errors?.email && <p>{errors.email?.message}</p>}
          <label>Message</label>
          <textarea
            required
            {...register("message")}
            className="text-black px-2 py-3 rounded-lg"
          />
          {errors?.message && <p>{errors.message?.message}</p>}
          <br />
          <button
            disabled={loading}
            type="submit"
            className="gradient-linear py-4 px-12 self-start text-black rounded-lg"
            value="Send"
          >
            Let&apos;s Connect
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactSlide;
