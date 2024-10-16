import React, {
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeContext } from "../../store/ThemeContext";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useWindowWidth } from "../../store/WindowContext";


const SendEmail: React.FC = () => {
  const isDark = useContext(ThemeContext)?.isDark;
  const { width } = useWindowWidth();

  const variants = {
    initial: { scale: 0.8, opacity: 0.9 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null); // Track success or failure

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_gl432um", "template_vnufw4u", form.current, {
          publicKey: "NoTMfk5euf9wp0b91",
        })
        .then(
          () => {
            setSuccess(true);
            form.current?.reset(); // Clear form fields on success
          },
          (error) => {
            setSuccess(false);
            console.error("FAILED...", error.text);
          }
        );
    }
  };

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => {
        setSuccess(null); // Hide message after 2 seconds
      }, 2000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [success]);

  return (
    <motion.div
      className={`relative border-[2px] sm:border-2 md:border-4 rounded ${
        isDark ? "" : "bg-slate-500 border-red-500"
      } hover:border-tertiary transition-colors duration-100 p-4 sm:p-6 md:p-10 box-border flex flex-col gap-6 w-full`}
      variants={variants}
      initial={width >= 1024 ? "initial" : "animate"}
      whileInView="animate"
    >
      {/* Success or error message */}
      {success !== null && (
        <span
          className={`absolute top-0 left-2 text-lg font-semibold ${
            success ? "text-green-500" : "text-red-600"
          }`}
        >
          {success ? "✅ Success!" : "😩 Failed!"}
        </span>
      )}

      <h2
        className={`font-montserrat font-bold text-2xl text-center ${
          isDark ? "text-blue-200" : "text-black"
        }`}
      >
        Send Me An Email
      </h2>

      <div className="">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
            className={`w-full p-2 rounded placeholder-gray font-semibold focus:outline-blue-600`}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className={`w-full p-2 rounded placeholder-gray font-semibold focus:outline-blue-600`}
          />
          <textarea
            className={`w-full p-2 rounded placeholder-gray font-semibold focus:outline-blue-600`}
            name="message"
            rows={6}
            placeholder="Write Your Message"
            required
          ></textarea>
          <button
            className={`w-full rounded font-semibold text-xl text-blue-100 bg-cyan-600 p-2`}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SendEmail;
