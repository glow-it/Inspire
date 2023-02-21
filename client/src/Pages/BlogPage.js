import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Blog from "../Components/Blog.js";
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
import { abbreviateNumber } from "../Tools/abbreviateNumber.js";
import { useNavigate } from "react-router-dom";

function BlogPage() {
  let toast = useToast();
  let isMember = true;
  let navigate = useNavigate()
  
  let [followers_count,setFollowersCount] = useState(99999)

  return (
    <div className="w-full min-h-screen flex darkbg-slate-900 darktext-white">
      <div
        id="blog-left-wrapper"
        className="w-[67%] h-full flex flex-col pl-36 pr-28"
      >
        <div className="w-full  z-50 flex items-center sticky top-0 border-b border-b-slate-200 darkborder-b-slate-800 h-24 bg-white darkbg-slate-900 mt-3">
          <img
            className="h-10 rounded-full mr-3 hover:opacity-70 transition-opacity cursor-pointer"
            src="https://pbs.twimg.com/profile_images/1573085370543214593/D8-BRySa_400x400.jpg"
          />
          <p className="text-md">
            <span className="capitalize hover:text-slate-500 transition-colors cursor-pointer">
              Font Mans <VerifyBadge followers_count={followers_count} />
            </span>
            <span className="text-slate-400 text-sm flex">
              4 days ago
              <div id="blog_readtime"></div>
              <span className="ml-2 mr-2 cursor-pointer transition-colors flex">
                
                {isMember ? (
                 <div></div>
                ) : (
                  <span className="ml-1">
                    <span className="mr-2">·</span>
                    <MemberOnlyStory />{" "}
                    <span className="ml-1">Member only story</span>
                  </span>
                )}
              </span>
            </span>
          </p>

          <div className="h-full w-64 absolute text-slate-400 text-xl right-0 flex items-center justify-evenly">
            <ToolTip
              label="Share on twitter"
              target={
                <span className="hover:text-black cursor-pointer darkhover:text-white transition-colors">
                  <ion-icon name="logo-twitter"></ion-icon>
                </span>
              }
            />

            <ToolTip
              label="Share on facebook"
              target={
                <span className="hover:text-black cursor-pointer darkhover:text-white transition-colors">
                  <ion-icon name="logo-facebook"></ion-icon>
                </span>
              }
            />

            <ToolTip
              label="Share on linkedin"
              target={
                <span className="hover:text-black cursor-pointer darkhover:text-white transition-colors">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </span>
              }
            />

            <ToolTip
              label="Copy link"
              target={
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    Toast({
                      toast,
                      message: "Blog link copied!",
                    });
                  }}
                  className="hover:text-black cursor-pointer darkhover:text-white transition-colors"
                >
                  <ion-icon name="link"></ion-icon>
                </span>
              }
            />

            <ToolTip
              label="Save"
              target={
                <span className="mx-4">
                  <span className="hover:text-black cursor-pointer darkhover:text-white transition-colors">
                    <ion-icon
                      onClick={(e) => {
                        if (
                          e.target.getAttribute("name") === "bookmark-outline"
                        ) {
                          e.target.setAttribute("name", "bookmark");
                          Toast({
                            toast,
                            message: "Saved to reading list",
                          });
                          e.target.parentElement.classList.add("text-black darktext-white");
                        } else {
                          e.target.setAttribute("name", "bookmark-outline");
                          Toast({
                            toast,
                            message: "Removed from reading list",
                          });
                          e.target.parentElement.classList.remove("text-black darktext-white");
                        }
                      }}
                      name="bookmark-outline"
                    ></ion-icon>
                  </span>
                </span>
              }
            />

            <Popover>
              <PopoverTrigger>
                <span className="hover:text-black cursor-pointer darkhover:text-white transition-colors">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </span>
              </PopoverTrigger>
              <PopoverContent
                rounded="lg"
                px="4"
                py="4"
                w="max-content"
                _focus={{ boxShadow: "none" }}
              >
                <PopoverArrow />
                <div className="flex flex-col justify-center text-sm">
                  <p className="py-1 cursor-pointer text-slate-400 hover:text-slate-800 font-medium transition-colors">
                    Mute this author
                  </p>
                  <p className="py-1 cursor-pointer text-slate-400 hover:text-slate-800 font-medium transition-colors">
                    Report
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Blog Main Wrapper */}
        <Blog />
      </div>

      <div id="blog-right-wrapper" className="w-[33%] flex flex-col ">
        {!isMember ? (
          <div
            id="blog_becomeamember_button_wrapper"
            className="w-full  h-[100px] pl-12  border-l border-l-slate-200  darkborder-l-slate-800 flex items-center "
          >
            <button className="py-3 px-12 mt-8 bg-slate-900 darkbg-black hover:bg-slate-800 darkhover:bg-black darkborder darkborder-white transition-colors text-white font-medium rounded-full">
              Become a member
            </button>
          </div>
        ) : (
          ""
        )}

        <div className="w-full flex flex-col items-start py-6 pl-12 pr-8 border-l border-l-slate-200 darkborder-l-slate-800">
          <div onClick={()=> navigate('/@andreufontas')} className="h-20 w-full flex items-center py-1">
            <img
              src="https://pbs.twimg.com/profile_images/1573085370543214593/D8-BRySa_400x400.jpg"
              className="h-full rounded-full transition-opacity cursor-pointer hover:opacity-70"
            />
          </div>
          <div className="w-full  flex flex-col justify-center py-4 pr-24">
            <span className="font-semibold">
              <span className="capitalize transition-colors hover:text-slate-500 cursor-pointer">
                Font Mans <VerifyBadge followers_count={followers_count} />{" "}
              </span>
              <span className="text-slate-400 font-medium">
                <span id="blog_followers" className="tracking-wider">
                  {abbreviateNumber(followers_count)}
                </span>{" "}
                Followers
              </span>{" "}
            </span>
            <span className="font-medium text-sm mt-4 text-slate-400">
              4X Top Writer. Business leader and experienced negotiator. I write
              about several topics including business, finance, politics and
              obviously negotiations.
            </span>
          </div>
          <div className="w-full pt-3 flex items-center">
            <p
              onClick={(e) => {
                if (e.target.innerText == "Follow") {
                  document.getElementById("blog_follow_button_2").click();
                  e.target.innerText = "Following";
                  e.target.classList.replace("bg-indigo-500", "bg-white");
                  e.target.classList.replace("text-white", "text-indigo-500");
                  e.target.classList.add("border-indigo-500");
                  setFollowersCount(followers_count + 1)
                } else if (e.target.innerText == "Following") {
                  document.getElementById("blog_follow_button_2").click();
                  e.target.innerText = "Follow";
                  e.target.classList.replace("text-indigo-500", "text-white");
                  e.target.classList.remove("border-indigo-500");
                  e.target.classList.replace("bg-white", "bg-indigo-500");
                  setFollowersCount(followers_count - 1)
                }
              }}
              id="blog_follow_button"
              className="px-4 mr-3 mb-3 py-2 font-medium cursor-pointer  rounded-full text-white border darkborder-none bg-indigo-500 text-sm capitalize "
            >
              follow
            </p>

            <ToolTip
              label="Subscribe to get an email whenever from Font Mans"
              target={
                <p
                  onClick={() => {
                    document.getElementById(
                      "blog_subscribe_button"
                    ).style.display = "none";
                    if (
                      document.getElementById("blog_follow_button")
                        .innerText !== "Following"
                    ) {
                      document.getElementById("blog_follow_button").click();
                    }
                    Toast({
                      message: "Subscribed Font Mans",
                      toast,
                    });
                  }}
                  id="blog_subscribe_button"
                  className=" mr-3 mb-3 w-10 flex items-center justify-center h-10 font-medium cursor-pointer  rounded-full text-white border darkborder-none bg-indigo-500 text-sm capitalize "
                >
                  <ion-icon name="mail"></ion-icon>
                </p>
              }
            />
          </div>
        </div>

        <div id="blog_morefrominspire_wrapper" className="sticky top-0">
          <div className="w-full  flex flex-col items-start py-6 pl-12 pr-8 border-l border-l-slate-200 darkborder-l-slate-800">
            <h1 className="mb-6 font-semibold">More from Inspire</h1>

            {[1, 1, 1, 1].map(() => {
              return (
                <div className="w-full h-24  mb-8 flex">
                  <div className="w-[70%] h-full flex flex-col ">
                    <div className="w-full flex">
                      <img
                        className="h-6 rounded-full mr-3"
                        src="https://i.postimg.cc/j5cZLXqK/black-rounded.png"
                      />
                      <p className="text-sm">
                        <span className="flex">
                          {" "}
                          Inspire <VerifyBadge followers_count={16500} />
                        </span>
                        <h1 className="font-extrabold mt-4 -ml-8 text-[14px]  h-16 overflow-hidden">
                          American Men Are No Longer Interested in American
                          Women: The Dating Wars Are On
                        </h1>
                      </p>
                    </div>
                  </div>
                  <div className="w-[30%] h-full flex items-center justify-center">
                    <img
                      className="h-16"
                      src="https://pbs.twimg.com/media/Fb6e6OLWIAAC6Sj?format=jpg&name=medium"
                    />
                  </div>
                </div>
              );
            })}
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

export default BlogPage;
