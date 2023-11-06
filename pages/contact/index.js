import { BsArrowRight } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import emailjs from "emailjs-com";
require("dotenv").config();

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(5, { message: "Please enter a valid name" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  subject: z.string().min(10, { message: "Please enter a valid subject" }),
  message: z.string().min(15, { message: "Enter at least 15 characters" }),
});

const Contact = () => {
  const userID = process.env.REACT_APP_USER_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8dsf3jw",
        "template_29fx9qi",
        e.target,
        "r-X3dZtpt5yiflsma"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="h-full bg-primary/60">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            <span className="text-violet-500">Conecte-se</span> comigo.
          </h2>
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="nome"
                className={`input focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.name && "focus:ring-red-500 focus:border-red-500 border-red-500"}`}
                name="name"
                {...register("name")}
              />
              <input
                type="text"
                placeholder="email"
                className={`input focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.email && "focus:ring-red-500 focus:border-red-500 border-red-500"}`}
                name="email"
                {...register("email")}
              />
            </div>
            <div className="flex justify-between">
              {errors.name && (
              <span className="text-sm text-red-500 -mt-2">
                {errors.name?.message}
              </span>
            )}
            {errors.email && (
              <span className="text-sm text-right text-red-500 -mt-2">
                {errors.email?.message}
              </span>
            )}
            </div>
            
            <input
              type="text"
              placeholder="assunto"
              className={`input focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.subject && "focus:ring-red-500 focus:border-red-500 border-red-500"}`}
              name="subject"
              {...register("subject")}
            />
            {errors.subject && (
              <span className="text-sm text-red-500 -mt-2">
                {errors.subject?.message}
              </span>
            )}
            <textarea
              placeholder="mensagem"
              className={`textarea focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 ${errors.message && "focus:ring-red-500 focus:border-red-500 border-red-500"}`}
              name="message"
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-500 -mt-2">
                {errors.message?.message}
              </span>
            )}
            <button
              type="submit"
              className="btn rounded-md border border-violet-500/50 max-w-[220px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-violet-500 hover:bg-violet-500 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Enviar mensagem
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
