import { useQuery, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MemberOnlyStory from "../MiniComponents/MemberOnlyStory.js";
import { Toast } from "../MiniComponents/Toast.js";
import ToolTip from "../MiniComponents/ToolTip.js";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import VerifyBadge from "../MiniComponents/VerifyBadge.js";

function Blogs() {
  let navigate = useNavigate();

  let toast = useToast();
  const [searchParams] = useSearchParams();

  // Check is Page in Feed Following
  let feed = searchParams.get("feed");

  useEffect(()=> {
    document.querySelector('body').style.overflow = "scroll"
  },[searchParams])

  return (
    <div className="w-full min-h-screen flex blogs darkbg-slate-900 darktext-white">



      <div className="w-[67%] h-full flex flex-col pl-36 pr-28">
        <div className="w-full bg-white darkbg-slate-900 sticky z-50 flex top-0 h-16 darkborder-b-slate-700  border-b border-b-slate-200">
          <div className=" w-12 h-full flex items-center px-4 justify-center ">
            <span className="text-xl cursor-pointer hover:text-black transition-colors text-slate-400 flex items-center justify-center">
              <ion-icon name="add-outline"></ion-icon>
            </span>
          </div>
          <div className=" w-16  cursor-pointer h-full flex items-center  justify-center ">
            <span
              onClick={() => navigate("/blogs")}
              className={`text-sm hover:text-black darkhover:text-white transition-colors ${
                feed !== "following" ? "text-black darktext-white" : "text-slate-400"
              } flex items-center justify-center`}
            >
              For you
            </span>
          </div>
          <div className=" w-20  cursor-pointer h-full flex items-center   justify-center ">
            <span
              onClick={() =>
                navigate({
                  pathname: "/blogs",
                  search: "feed=following",
                })
              }
              className={`text-sm hover:text-black darkhover:text-white transition-colors ${
                feed === "following" ? "text-black darktext-white" : "text-slate-400"
              }  flex items-center justify-center`}
            >
              Following
            </span>
          </div>
        </div>

        <div className="   overflow-y-scroll">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return (
              <div  className="blogspage_blog w-full cursor-pointer h-[300px] border-b flex border-b-slate-200 darkborder-b-slate-700 my-8">
                <div className="w-[75%] h-full  flex flex-col  items-center pt-6 pb-6 pr-6">
                  <div className="w-full h-[50px]  flex items-center">
                    <img
                      className="h-8 rounded-full mr-3"
                      src="https://miro.medium.com/fit/c/48/48/1*m5D5idOD3yjfbXGlbHGrDw.png"
                    />
                    <p className="text-sm">
                      Eve Arnold <VerifyBadge followers_count={99999} />
                      <span className="text-slate-400">
                        {" "}
                        · 4 days ago ·{" "}
                        <span className="ml-1 mr-2 cursor-pointer">
                          <MemberOnlyStory />
                        </span>{" "}
                        Member only story
                      </span>
                    </p>
                  </div>
                  <div className="w-full h-[70px]  flex items-center">
                    <h1 onClick={()=> navigate('/arshad/234323434')} className="text-2xl mt-2 font-extrabold blogspage_blog_title">
                      I'm Coding Side Projects to Become More Financially Free
                    </h1>
                  </div>
                  <div className="w-full h-[100px] relative mt-4  overflow-hidden overflow-ellipsis  flex  ">
                    <p className="text-slate-400 font-medium overflow-ellipsis">
                      Little tips I've discovered that improve conversion rates
                      — Many factors go into an optimal landing page. What are
                      those factors? It's more than a great offer and a clear
                      headline. It's more than stamping social proof on the
                      page. This is where copywriting helps improve conversions.
                      Copywriting tweaks help sharpen the clarity of your
                      message.
                    </p>
                  </div>
                  <div className="w-full h-[70px] mt-3  flex items-center">
                    <div className="w-[70%] h-full  flex items-center">
                      <p className="px-3 mr-4 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darkhover:bg-slate-900 darktext-white text-xs">
                        Programming
                      </p>
                      <span className="text-slate-400 font-medium text-xs">
                        4 min read <span className="mx-2">·</span> Selected for
                        you
                      </span>
                    </div>
                    <div className="w-[30%] h-full   flex items-center justify-evenly">
                      <ToolTip
                        label="Save"
                        target={
                          <span className="text-slate-800 cursor-pointer darktext-slate-400 darkhover:text-white text-xl flex items-center justify-center hover:text-slate-900">
                            <ion-icon
                              onClick={(e) => {
                                if (
                                  e.target.getAttribute("name") ===
                                  "bookmark-outline"
                                ) {
                                  e.target.setAttribute("name", "bookmark");
                                  Toast({
                                    toast,
                                    message: "Saved to reading list",
                                  });
                                } else {
                                  e.target.setAttribute(
                                    "name",
                                    "bookmark-outline"
                                  );
                                  Toast({
                                    toast,
                                    message: "Removed from reading list",
                                  });
                                }
                              }}
                              name="bookmark-outline"
                            ></ion-icon>
                          </span>
                        }
                      />

                      <ToolTip
                        label="Show less like this"
                        target={
                          <span className="text-slate-800 cursor-pointer darktext-slate-400 darkhover:text-white text-xl flex items-center justify-center hover:text-slate-900">
                            <ion-icon name="remove-circle-outline"></ion-icon>
                          </span>
                        }
                      />

                      <Popover>
                        <PopoverTrigger>
                          <span className="text-slate-800 cursor-pointer darktext-slate-400 darkhover:text-white text-xl flex items-center justify-center hover:text-slate-900">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                          </span>
                        </PopoverTrigger>
                        <PopoverContent rounded='lg' px='4' py='4' w='max-content' _focus={{boxShadow:'none'}}>
                          <PopoverArrow />
                          <div className="flex flex-col justify-center" >
                            <p className="py-1 text-slate-400 hover:text-slate-800 font-medium transition-colors" >Mute this author</p>
                            <p className="py-1 text-slate-400 hover:text-slate-800 font-medium transition-colors" >Report</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                      
                    </div>
                  </div>
                </div>
                <div className="w-[25%] h-full flex items-center justify-center">
                  <img src="https://miro.medium.com/fit/c/224/224/1*8bB7aVobGkIoWAdeoT6_nA.png" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-[33%] flex flex-col ">
        <div className="w-full  h-[100px] pl-12   border-l border-l-slate-200 darkborder-l-slate-800  items-start ">
          <button className="py-3 px-12 mt-8 bg-slate-900 darkhover:border-white border-slate-400 border hover:bg-slate-800 transition-colors text-white font-medium rounded-full">
            Become a member
          </button>
        </div>

        <div className="w-full h-[380px]  flex flex-col items-start py-6 pl-12 pr-8 border-l darkborder-l-slate-800 border-l-slate-200">
          <h1 className="mb-6 font-bold">2022 in Review</h1>

          <div className="w-full blog cursor-pointer h-24 flex flex-col mb-3">
            <div className="w-full flex items-center">
              <img
                className="h-6 rounded-full"
                src="https://miro.medium.com/fit/c/40/40/1*IL0mnvzNcpG2ZD0JBqo7zQ.jpeg"
              />
              <span className="ml-2 text-sm font-semibold">
                Cassie Kozyrkov
              </span>
            </div>
            <h1 className="mt-3 text-lg font-extrabold">
              2022: A productivity revolution
            </h1>
          </div>

          <div className="w-full blog cursor-pointer h-24 flex flex-col mb-3">
            <div className="w-full flex items-center">
              <img
                className="h-6 rounded-full"
                src="https://miro.medium.com/fit/c/40/40/1*AwBz4NW9_M45J-sBlmH-lA.png"
              />
              <span className="ml-2 text-sm font-semibold">Barack Obama</span>
            </div>
            <h1 className="mt-3 text-lg font-extrabold">
              My 2022 End of Year Lists
            </h1>
          </div>

          <div className="w-full blog cursor-pointer h-24 flex flex-col mb-3">
            <div className="w-full flex items-center">
              <img
                className="h-6 rounded-full"
                src="https://miro.medium.com/fit/c/40/40/1*-0CLjsUALTZi9OOlMau8Vw.jpeg"
              />
              <span className="ml-2 text-sm font-semibold">Mindy Stern</span>
            </div>
            <h1 className="mt-3 text-lg font-extrabold">
              Microdosing, Mastodon, and Jonah Hill.
            </h1>
          </div>

          <div className="w-full h-12  mb-4 flex items-center">
            <h1 className="text-sm  cursor-pointer text-indigo-500 hover:underline">
              See the full list
            </h1>
          </div>
        </div>

        <div className="sticky top-0">
          <div className="w-full  flex flex-col items-start py-6 pl-12 pr-8 border-l border-l-slate-200 darkborder-l-slate-800">
            <h1 className="mb-2 font-semibold">Recommended topics</h1>
            <div className="flex items-center py-4 flex-wrap ">
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Programming
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Data science
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Technology
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Self improvement
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Writing
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Relationships
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Machine Learning
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Productivity
              </p>
              <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 text-xs darkbg-slate-900 darkborder darkborder-slate-400 darkhover:border-white darktext-white darkhover:bg-slate-900">
                Politics
              </p>
            </div>
          </div>

          <div className="w-full h-[300px]   flex flex-col items-start py-6 pl-12 pr-8 border-l border-l-slate-200 darkborder-l-slate-800">
            <h1 className="mb-6 font-semibold">Who to follow</h1>

            <div className="w-full h-24  mb-3 flex">
              <div className="w-[15%] h-full flex  ">
                <img
                  src="https://miro.medium.com/fit/c/40/40/1*AwBz4NW9_M45J-sBlmH-lA.png"
                  className="rounded-full h-8"
                />
              </div>
              <div className="w-[50%] h-full flex flex-col ">
                <h1 className="font-semibold text-sm">David Dennis, Jr.</h1>
                <div className="h-12 w-full items-center   overflow-hidden justify-center text-sm pt-2 font-medium text-slate-400">
                  Level Sr. Writer covering Race, Culture, Politics, TV,
                </div>
              </div>
              <div className="w-[35%] h-full flex items-center">
                <p
                  onClick={(e) => {
                    if (e.target.innerText == "Follow") {
                      e.target.innerText = "Following";
                      e.target.classList.add("bg-slate-800");
                      e.target.classList.replace(
                        "text-slate-800",
                        "text-white"
                      );
                    } else if (e.target.innerText == "Following") {
                      e.target.innerText = "Follow";
                      e.target.classList.remove("bg-slate-800");
                      e.target.classList.replace(
                        "text-white",
                        "text-slate-800"
                      );
                    }
                  }}
                  className="px-4 mr-3 mb-3 py-2 font-medium cursor-pointer  rounded-full text-slate-800 border border-slate-800 text-sm darktext-white darkborder-white ml-3 capitalize "
                >
                  follow
                </p>
              </div>
            </div>
            <div className="w-full h-24  mb-3 flex">
              <div className="w-[15%] h-full flex  ">
                <img
                  src="https://miro.medium.com/fit/c/64/64/1*7a_ObnzOineDwNCz_FzmAQ.png"
                  className="rounded-full h-8"
                />
              </div>
              <div className="w-[50%] h-full flex flex-col ">
                <h1 className="font-semibold text-sm">Izzie Ramirez</h1>
                <div className="h-12 w-full items-center   overflow-hidden justify-center text-sm pt-2 font-medium text-slate-400">
                  Writing about climate, culture & comida wherever I go. Work
                  .Writing about climate, culture & comida wherever I go. Work
                </div>
              </div>
              <div className="w-[35%] h-full flex items-center">
                <p
                  onClick={(e) => {
                    if (e.target.innerText == "Follow") {
                      e.target.innerText = "Following";
                      e.target.classList.add("bg-slate-800");
                      e.target.classList.replace(
                        "text-slate-800",
                        "text-white"
                      );
                    } else if (e.target.innerText == "Following") {
                      e.target.innerText = "Follow";
                      e.target.classList.remove("bg-slate-800");
                      e.target.classList.replace(
                        "text-white",
                        "text-slate-800"
                      );
                    }
                  }}
                  className="px-4 mr-3 mb-3 py-2 font-medium cursor-pointer  rounded-full text-slate-800 border border-slate-800 text-sm darktext-white darkborder-white ml-3 capitalize "
                >
                  follow
                </p>
              </div>
            </div>
            <h1 className="mt-2 font-medium text-sm  cursor-pointer text-indigo-500 hover:underline">
              See more suggessions
            </h1>
          </div>

          <div className="w-full h-full  flex flex-col items-start py-6 pl-12 pr-8 border-l border-l-slate-200 darkborder-l-slate-800">
            <h1 className="mb-6 font-semibold">Reading list</h1>
            <span className="font-medium text-slate-400">
              Click the <ion-icon name="bookmark-outline"></ion-icon> on any
              story to easily add it to your reading list or a custom list that
              you can share.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
