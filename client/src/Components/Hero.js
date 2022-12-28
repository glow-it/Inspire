import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AuthModal from "../MiniComponents/AuthModal";

function Hero() {
  useEffect(() => {
    // Change The Hero Highlighted Text Change To Read And Write In Every Inerval
    let hero_highlight_text = document.getElementById("hero-highlight-text");
    let count = 0;

    setInterval(function () {
      count++;
      hero_highlight_text.innerHTML = count % 2 === 0 ? "Write" : "Read";
      hero_highlight_text.classList.replace(
        `${count % 2 === 0 ? "text-blue-500" : "text-indigo-500"}`,
        `${count % 2 === 0 ? "text-indigo-500" : "text-blue-500"}`
      );
    }, 5000);
  }, []);

  // Disclosure For Open Modal (This Send To The Component)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="w-full h-[550px] z-10 flex border-b border-b-slate-800">
      {/* Modal For Authentication */}
      <AuthModal onClose={onClose} isOpen={isOpen} isLogin={false} />
      <div className="w-1/2  relative h-full  flex pl-28 flex-col pt-20">
        <h1 className="font-extrabold text-[80px] leading-[1.2]">
          Stay Inspire. <br />{" "}
          <span id="hero-highlight-text" className="font-extrabold text-indigo-500">
            Write
          </span>{" "}
          With AI
        </h1>
        <p className="font-medium text-lg mt-6">
          Inspire is an AI powered blog website. It helps you create <br /> and
          publish creative and unique blogs automatically using AI.
        </p>

        <div className="flex">
          <button onClick={()=>{onOpen()}} className="py-3 w-44 px-6 mt-8 bg-slate-900 hover:bg-slate-800 transition-colors text-white font-medium rounded-full">
            Start reading
          </button>

          <button className="py-3 w-44 px-6 mt-8 transition-colors flex items-center justify-center text-slate-900  font-medium rounded-full">
            {" "}
            <span className="flex text-xl text-indigo-500 items-center justify-center mr-1">
              <ion-icon name="play-circle"></ion-icon>
            </span>{" "}
            How it works
          </button>
        </div>
      </div>

      <div className="w-1/2 h-full  flex flex-col justify-center items-center overflow-hidden">
        <img
          src="https://cdn.dribbble.com/users/1100175/screenshots/14306346/media/af42c074dc95a1c2b3015f2113ee38c9.png?compress=1&resize=800x600&vertical=top"
          className="h-full rotate-4"
        />
      </div>
    </div>
  );
}

export default Hero;
