import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div id="app">
      <div id="wrapper" className="lg:scale-[3] scale-[1.5]">
        <h1
          class="glitch text-black font-black"
          data-text="
404"
        >
          404
        </h1>
      </div>
      <span class="sub text-black lg:tracking-[1rem] tracking-[0.5rem] font-medium  text-center lg:text-2xl text-xl lg:mt-16 ">
        PAGE NOT FOUND
      </span>

      <Link
        to="/"
        className="flex items-center justify-center font-medium py-2 mt-16 px-6 rounded-full text-white bg-black  transition-colors"
      >
        Take me home{" "}
        <span className="flex items-center justify-center ml-1">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </span>
      </Link>
    </div>
  );
}

export default PageNotFound;
