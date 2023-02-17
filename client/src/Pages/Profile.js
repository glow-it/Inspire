import { Popover, PopoverArrow, PopoverContent, PopoverTrigger, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MemberOnlyStory from "../MiniComponents/MemberOnlyStory.js";
import { Toast } from "../MiniComponents/Toast.js";
import ToolTip from "../MiniComponents/ToolTip.js";
import VerifyBadge from "../MiniComponents/VerifyBadge.js";
import { abbreviateNumber } from "../Tools/abbreviateNumber.js";

function Profile() {
  let params = useParams();
  let profile_name = params.profilename.replace("@", "");

  let toast = useToast()

  let [followers_count,setFollowersCount] = useState(99999)

  let navigate = useNavigate()

//   change the size the size of profile banner when scroll

window.onscroll = (e)=> {
    let profile_banner_wrapper = document.getElementById('profile_banner_wrapper');
    let profile_banner_name = profile_banner_wrapper.querySelector('h1')
    let profile_image_wrapper = profile_banner_wrapper.querySelector('.profile_image_wrapper')

    if(window.scrollY > 480){
setTimeout(()=> {
    profile_banner_wrapper.classList.replace("h-56","h-24")
    profile_banner_name.style.opacity = 0
profile_image_wrapper.classList.replace("h-32","h-24")
profile_image_wrapper.classList.replace("w-32","w-24")
},10)

    }else{

        setTimeout(()=> {
            profile_banner_wrapper.classList.replace("h-24","h-56")
            profile_banner_name.style.opacity = 1
        profile_image_wrapper.classList.replace("h-24","h-32")
        profile_image_wrapper.classList.replace("w-24","w-32")
        },10)

        
    }
}


  return (
    <div className="w-full h-full">
      <div id="profile_banner_wrapper" className="w-full transition-profile_banner h-56 bg-indigo-500 sticky top-0 flex items-center justify-center z-50">
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-[12rem] transition-profile_banner text-white font-bold">{profile_name}</h1>
        <div data-aos="fade-up" data-aos-delay="200" className="profile_image_wrapper transition-profile_banner absolute h-32 w-32 -bottom-[25%] rounded-full bg-white ring-8 ring-offset-8 ring-indigo-500">
          <img
            src="https://pbs.twimg.com/profile_images/1573085370543214593/D8-BRySa_400x400.jpg"
            alt=""
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center relative pt-24 px-96 text-center">
        <h1 data-aos="fade-up" data-aos-delay="300" className="text-xl text-black font-bold mb-1">Your Designer <VerifyBadge followers_count={followers_count} /> </h1>
        <h1 data-aos="fade-up" data-aos-delay="400" className="text-md text-slate-400 font-medium">Dreams do come true. ✨</h1>
      </div>
      <div className="w-full flex  items-center justify-center relative pt-6 px-96 text-center">
        <h1 data-aos="fade-up" data-aos-delay="500" className="text-lg text-slate-400 font-medium mr-6 flex items-center justify-center"><span className=" flex mr-1"> {abbreviateNumber(followers_count)}</span> Followers</h1>
        <h1 data-aos="fade-up" data-aos-delay="600" className="text-lg text-slate-400 font-medium  flex items-center justify-center"><span className=" flex mr-1"><span className="flex mr-1 items-center justify-center text-2xl"><ion-icon name="cellular-outline"></ion-icon></span> 1.5M</span> Readers</h1>
      </div>
      <div className="w-full flex  items-center justify-center relative pt-8 ">


            <p
            data-aos="fade-up" data-aos-delay="700"
              onClick={(e) => {
                if (e.target.innerText == "Follow") {
                  e.target.innerText = "Following";
                  e.target.classList.replace("bg-indigo-500", "bg-white");
                  e.target.classList.replace("text-white", "text-indigo-500");
                  e.target.classList.add("border-indigo-500");
                  setFollowersCount(followers_count + 1)
                } else if (e.target.innerText == "Following") {
                  e.target.innerText = "Follow";
                  e.target.classList.replace("text-indigo-500", "text-white");
                  e.target.classList.remove("border-indigo-500");
                  e.target.classList.replace("bg-white", "bg-indigo-500");
                  setFollowersCount(followers_count - 1)
                }
              }}
              id="profile_follow_button"
              className="px-6 mr-3 mb-3 py-2 font-medium cursor-pointer  rounded-full text-white border darkborder-none bg-indigo-500 text-md capitalize "
            >
              follow
            </p>

            <ToolTip
              label="Subscribe to get an email whenever from Font Mans"
              target={
                <p
                data-aos="fade-up" data-aos-delay="800"
                  onClick={() => {
                    document.getElementById(
                      "blog_subscribe_button"
                    ).style.display = "none";
                    if (
                      document.getElementById("profile_follow_button")
                        .innerText !== "Following"
                    ) {
                      document.getElementById("profile_follow_button").click();
                    }
                    Toast({
                      message: "Subscribed Font Mans",
                      toast,
                    });
                  }}
                  id="blog_subscribe_button"
                  className=" mr-3 mb-3 w-10 flex items-center justify-center h-10 font-medium cursor-pointer  rounded-full text-white border darkborder-none bg-indigo-500 text-md capitalize "
                >
                  <ion-icon name="mail"></ion-icon>
                </p>
              }
            />
          </div>

          <div className="w-full flex px-44 flex-col  items-center relative pt-8 ">

            {
                [1,1,1,1,1,1,1,1,1,1].map((data,index)=> {
                    return(
                        <div data-aos="fade-up" data-aos-delay={`${index ==  0 ? '9' : '0'}00`}  className="blogspage_blog w-full cursor-pointer h-[300px] border-b flex border-b-slate-200 darkborder-b-slate-700 my-8">
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
                                4 min read
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
                    )
                })
            }

         

          </div>
        

    </div>
  );
}

export default Profile;
