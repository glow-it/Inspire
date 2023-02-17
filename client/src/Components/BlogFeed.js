import React, { useEffect } from "react";
import MemberOnlyStory from "../MiniComponents/MemberOnlyStory";
import $ from "jquery";

function BlogFeed() {
  useEffect(() => {
    let home_blog_section = document.getElementById("home_blog_section");

    // Allow Home Blog Section For Scrolling When Bottom Of Window
    window.onscroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        home_blog_section.classList.add("overflow-y-scroll");
      } else {
        home_blog_section.classList.remove("overflow-y-scroll");
      }
    };
  }, []);

  return (
    <div
      id="home_blog_section"
      className="home-blog-section darkbg-slate-900 darktext-white h-screen w-full flex "
    >
      <div className=" w-[60%]    flex flex-col  pr-12 pl-28 pt-32">
        {[
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1,
        ].map(() => {
          return (
            <div className="blog flex w-full  mb-16">
              <div className=" w-[65%] pr-3    rounded-lg flex flex-col justify-center cursor-pointer relative transition-colors   ">
                <div className="flex items-center">
                  <img
                    src="https://miro.medium.com/fit/c/40/40/2*Vjiwqoib1HcKLdkM1xwp_g.jpeg"
                    alt="obama"
                    className="h-8 rounded-full"
                  />
                  <p className="ml-3 font-semibold">Andre Cronje</p>
                </div>

                <div className="flex flex-col justify-center">
                  <h1 className="transition-colors font-extrabold text-xl mt-2  h-6 overflow-hidden">
                    Letter to Fantom Foundation team
                  </h1>
                  <p className="font-medium text-md mt-2 text-slate-500">
                    I always look forward to sharing my lists of favorite books,
                    movies, and music with all of you.
                  </p>
                  <p className="font-medium text-sm mt-2 text-slate-500">
                    Dec 24 · 4 min read · <MemberOnlyStory />
                  </p>
                </div>
              </div>

              <div className="w-[30%] h-full flex items-center">
                <img
                  className=""
                  src="https://miro.medium.com/fit/c/400/268/1*Q7VnYoqb2lVzx7sxOf93Bg.png"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div
        id="home_blog_categories_section"
        className="w-[35%] h-full px-6 pt-32  sticky top-0"
      >
        <div id="home_blog_categories_section_wrapper">
          <div className="flex">
            <h1 className="text-lg font-medium">
              Discover more of matter to you
            </h1>
          </div>
          <div className="flex items-center py-4 flex-wrap w-[390px] ">
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Programming
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Data science
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Technology
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Self improvement
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Writing
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Relationships
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Machine Learning
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Productivity
            </p>
            <p className="px-8 mr-3 darktext-white darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-100 rounded-full text-slate-800 border border-slate-800">
              Politics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFeed;
