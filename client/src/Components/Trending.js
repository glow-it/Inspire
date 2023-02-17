import React from "react";
import MemberOnlyStory from "../MiniComponents/MemberOnlyStory";


function Trending() {
  return (
    <div className="trending darkbg-slate-900 darktext-white py-14 border-b border-b-slate-200">
      <div className="flex items-center pl-28">
        <h1 className="text-lg font-semibold  mb-2 flex items-center justify-center ">
          {" "}
          <span className="flex items-center justify-center mr-2">
            <ion-icon name="cellular-outline"></ion-icon>
          </span>{" "}
          Trending on inspire
        </h1>
      </div>

      <div className="flex items-center justify-center">

        <div className="trending_blog_wrapper darkbg-slate-900 darktext-white darkborder-slate-400 darkhover:border-white w-96 bg-slate-50 mr-6 my-3 rounded-lg flex flex-col justify-center cursor-pointer hover:border-slate-800 relative transition-colors border py-4 px-6">
          <p className="font-extrabold absolute right-4 top-2 text-slate-500">01</p>

          <div className="flex items-center">
            <img
              src="https://miro.medium.com/fit/c/40/40/1*AwBz4NW9_M45J-sBlmH-lA.png"
              alt="obama"
              className="h-8 rounded-full"
            />
            <p className="ml-3 font-semibold">Barack Obama</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-extrabold text-lg mt-2  h-6 overflow-hidden">
              My 2022 End of Year Lists
            </p>
            <p className="font-medium text-sm mt-2 text-slate-500">
              Dec 24 · 3 min read
            </p>
          </div>
        </div>

        <div className="trending_blog_wrapper darkbg-slate-900 darktext-white darkborder-slate-400 darkhover:border-white w-96 bg-slate-50 mr-6 my-3 rounded-lg flex flex-col justify-center cursor-pointer hover:border-slate-800 relative transition-colors border py-4 px-6">
          <p className="font-extrabold absolute right-4 top-2 text-slate-500">02</p>

          <div className="flex items-center">
            <img
              src="https://miro.medium.com/fit/c/40/40/2*Vjiwqoib1HcKLdkM1xwp_g.jpeg"
              alt="obama"
              className="h-8 rounded-full"
            />
            <p className="ml-3 font-semibold">Andre Cronje</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-extrabold text-lg mt-2  h-6 overflow-hidden">
              Letter to Fantom Foundation team
            </p>
            <p className="font-medium text-sm mt-2 text-slate-500">
              Dec 24 · 4 min read · <MemberOnlyStory />
            </p>
          </div>
        </div>

        <div className="trending_blog_wrapper darkbg-slate-900 darktext-white darkborder-slate-400 darkhover:border-white w-96 bg-slate-50 mr-6 my-3 rounded-lg flex flex-col justify-center cursor-pointer hover:border-slate-800 relative transition-colors border py-4 px-6">
          <p className="font-extrabold absolute right-4 top-2 text-slate-500">03</p>

          <div className="flex items-center">
            <img
              src="https://miro.medium.com/fit/c/40/40/1*-OWrgxgC1UTo3cp2_94kIw.jpeg"
              alt="obama"
              className="h-8 rounded-full"
            />
            <p className="ml-3 font-semibold">Ted Bauer</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-extrabold text-lg mt-2  h-6 overflow-hidden">
              University of Idaho Murders: Now It Looks Like John “Jack”
              Showalter, Right?
            </p>
            <p className="font-medium text-sm mt-2 text-slate-500">
              Dec 6 · 1 min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
