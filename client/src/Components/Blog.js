import {
  Avatar,
  AvatarBadge,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import MemberOnlyStory from "../MiniComponents/MemberOnlyStory.js";
import { Toast } from "../MiniComponents/Toast.js";
import ToolTip from "../MiniComponents/ToolTip.js";
import "../style/blog.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import VerifyBadge from "../MiniComponents/VerifyBadge.js";


function Blog() {
  // console.log(SyntaxHighlighter.supportedLanguages);
  let toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const code = `let navigate = useNavigate()

// Disclosure For Open Modal (This Send To The Component)
const { isOpen, onOpen, onClose } = useDisclosure();
// It Pass to The Component. Is Login Clicked Or Signup Clicked
let [isLogin, setIsLogin] = useState(true);
// Check Is Header In Home Page
let [isHome, setIsHome] = useState();
let location = useLocation();

useEffect(() => {
  // Check Is Header In Home Page
  if (location.pathname === "/") {
    setIsHome(true);
  } else {
    setIsHome(false);
  }
}, [location]);`;

  let like_count = (2964).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Check Is The Use Is Member
  let isMember = true;

  if (!isMember) {
    document.querySelector("body").style.overflow = "hidden";
  }

  useEffect(() => {
    // Scrolling Blog to Top
    window.scrollTo({ top: 0 });
  }, []);

  // Showing And Hiding Overlay Like
  window.onscroll = () => {
    if (
      window.scrollY >=
      document.getElementById("like_button").offsetTop - 1000
    ) {
      document
        .getElementById("overlay_like_wrapper")
        .classList.add("translate-y-20");
    } else {
      document
        .getElementById("overlay_like_wrapper")
        .classList.remove("translate-y-20");
    }
  };

  return (
    <div className="overflow-y-scroll  w-full h-full pt-6 pb-28 relative ">
      {/* Comments Side Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent minWidth="md">
          <DrawerCloseButton rounded="full" _focus={{ boxShadow: "none" }} />
          <DrawerHeader>Responses (24)</DrawerHeader>

          <DrawerBody
            w="full"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <div className="w-full flex h-fit mb-4 pb-12 justify-center border-b border-b-slate-200">
              <form action="" className="w-full">
                <textarea
                data-aos="fade-up" data-aos-delay='100'
                  name="response"
                  id="response_textarea"
                  cols="30"
                  rows="5"
                  className="border rounded-lg focus:outline-none p-4 w-full  focus:border-slate-800 transition-colors"
                  placeholder="Write your response"
                ></textarea>

                <button data-aos="fade-up" data-aos-delay='200' className="py-3  w-full z-50 px-12 text-sm mt-4 bg-slate-900 hover:bg-slate-800 transition-colors text-white font-medium rounded-full">
                  Respond
                </button>
              </form>
            </div>

            {/* Comments */}
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => {
              return (
                <div data-aos={index >= 2 ? '' : "fade-up"} data-aos-delay={(index + 3) + '00'} className="w-full flex flex-col justify-start border-b border-b-slate-200 py-6">
                  <div className="h-16 w-full  flex items-center relative">
                    <Avatar
                      h="10"
                      w="10"
                      cursor="pointer"
                      src="https://miro.medium.com/fit/c/96/96/2*i7jvsmKAR6En9fpYMClcHw.jpeg"
                      name="Michelle Wiles"
                    >
                      <ToolTip
                        label="Inspire member"
                        position="right"
                        target={
                          <AvatarBadge boxSize="1.25em" bg="white">
                            <MemberOnlyStory />
                          </AvatarBadge>
                        }
                      />
                    </Avatar>
                    {/* <img className="h-10 rounded-full" src="https://miro.medium.com/fit/c/96/96/2*i7jvsmKAR6En9fpYMClcHw.jpeg" alt="" /> */}
                    <span className="ml-2 text-sm">
                      <span>
                        Michelle Wiles <VerifyBadge followers_count={99500} />{" "}
                      </span>
                      <span className="text-xs text-slate-400">
                        16 minutes ago
                      </span>
                    </span>

                    <Popover>
                      <PopoverTrigger>
                        <div className="flex items-center cursor-pointer justify-center absolute right-10">
                          <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                      </PopoverTrigger>
                      <PopoverContent
                        rounded="lg"
                        px="4"
                        fontSize="5px"
                        mr="4"
                        py="2"
                        w="max-content"
                        _focus={{ boxShadow: "none" }}
                      >
                        <PopoverArrow />
                        <div className="flex flex-col justify-center text-sm">
                          <p className="py-1 cursor-pointer text-slate-400 hover:text-slate-800 font-medium transition-colors">
                            Report this response
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="w-full flex pt-2">
                    <p className="font-medium text-slate-600 text-sm">
                      Really nice piece - impressive how you tied in two
                      seemingly separate areas of luxury fashion with White
                      Lotus 👏
                    </p>
                  </div>

                  <div className="w-full h-16  flex items-center relative">
                    <span
                      id={`comment-like-wrapper-${index}`}
                      className="hover:text-black text-lg transition-colors cursor-pointer flex items-center justify-center"
                    >
                      <ion-icon
                        onClick={(e) => {
                          document.getElementById(
                            `comment-like-count-${index}`
                          ).innerText = 3465;
                          let current_like_count = parseFloat(
                            document
                              .getElementById(`comment-like-count-${index}`)
                              .innerHTML.replace(",", "")
                          );

                          if (current_like_count != 3465 + 1) {
                            let updated_like_count = (current_like_count + 1)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            document.getElementById(
                              `comment-like-count-${index}`
                            ).innerText = updated_like_count;
                            e.target.setAttribute("name", "heart");
                            document
                              .getElementById(`comment-like-wrapper-${index}`)
                              .classList.add("text-pink-500");
                            e.target.parentElement.classList.remove(
                              "hover:text-black"
                            );
                            document
                              .getElementById(`comment-like-count-${index}`)
                              .classList.remove("hover:text-black");
                          }
                        }}
                        name="heart-outline"
                      ></ion-icon>
                      <div
                        id={`comment-like-count-${index}`}
                        className="ml-1 text-xs"
                      >
                        {(3465)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </div>
                    </span>

                    <div
                      onClick={(e) => {
                        if (
                          document.getElementById(`reply_count_${index}`)
                            .innerText == "Hide reply"
                        ) {
                          document
                            .getElementById(`replies_wrapper_${index}`)
                            .classList.add("hidden");
                          document.getElementById(
                            `reply_count_${index}`
                          ).innerText = "1 reply";
                        } else {
                          document
                            .getElementById(`replies_wrapper_${index}`)
                            .classList.remove("hidden");
                          document.getElementById(
                            `reply_count_${index}`
                          ).innerText = "Hide reply";
                        }
                      }}
                      className="flex items-center text-lg cursor-pointer justify-center ml-3"
                    >
                      <ion-icon name="chatbubble-outline"></ion-icon>
                      <span
                        id={`reply_count_${index}`}
                        className="text-xs ml-1"
                      >
                        1 reply
                      </span>
                    </div>

                    <div
                      onClick={(e) => {
                        if (
                          document.getElementById(`reply_count_${index}`)
                            .innerText == "Hide reply"
                        ) {
                          document
                            .getElementById(`replies_wrapper_${index}`)
                            .classList.add("hidden");
                          document.getElementById(
                            `reply_count_${index}`
                          ).innerText = "1 reply";
                          document
                            .getElementById(`reply_input_wrapper_${index}`)
                            .classList.add("hidden");
                        } else {
                          document
                            .getElementById(`replies_wrapper_${index}`)
                            .classList.remove("hidden");
                          document.getElementById(
                            `reply_count_${index}`
                          ).innerText = "Hide reply";
                          document
                            .getElementById(`reply_input_wrapper_${index}`)
                            .classList.remove("hidden");
                        }
                      }}
                      className="flex items-center transition-colors hover:text-indigo-500 text-xs cursor-pointer absolute right-10 justify-center"
                    >
                      Reply
                    </div>
                  </div>

                  {/* Replies */}

                  <div
                    id={`replies_wrapper_${index}`}
                    className="w-[98%] self-end hidden  border-l-2 border-l-slate-300 px-6 pb-6"
                  >
                    <div
                      id={`reply_input_wrapper_${index}`}
                      className="w-full hidden  h-fit mb-4 pb-12 justify-center border-b border-b-slate-200"
                    >
                      <form action="" className="w-full">
                        <textarea
                          name="response"
                          id="response_textarea"
                          cols="30"
                          rows="5"
                          className="border rounded-lg focus:outline-none p-4 w-full  focus:border-slate-800 transition-colors"
                          placeholder="Write your reply for Michelle Wiles"
                        ></textarea>

                        <button className="py-3  w-full z-50 px-12 text-sm mt-4 bg-slate-900 hover:bg-slate-800 transition-colors text-white font-medium rounded-full">
                          Reply
                        </button>
                      </form>
                    </div>

                    <div className="h-16 w-full  flex items-center relative">
                      <Avatar
                        h="10"
                        w="10"
                        cursor="pointer"
                        src="https://miro.medium.com/fit/c/96/96/2*i7jvsmKAR6En9fpYMClcHw.jpeg"
                        name="Michelle Wiles"
                      >
                        <ToolTip
                          label="Inspire member"
                          position="right"
                          target={
                            <AvatarBadge boxSize="1.25em" bg="white">
                              <span className="z-50 text-indigo-500">✦</span>
                            </AvatarBadge>
                          }
                        />
                      </Avatar>

                      <span className="ml-2 text-sm">
                        <span>
                          Michelle Wiles{" "}
                          <span className="bg-indigo-500 px-2 py-0.5 text-white text-xs rounded-sm ml-2 font-medium">
                            Author
                          </span>{" "}
                          <VerifyBadge followers_count={99500} />{" "}
                        </span>
                        <span className="text-xs text-slate-400">
                          16 minutes ago
                        </span>
                      </span>

                      <Popover>
                        <PopoverTrigger>
                          <div className="flex items-center cursor-pointer justify-center absolute right-5">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                          </div>
                        </PopoverTrigger>
                        <PopoverContent
                          rounded="lg"
                          px="4"
                          fontSize="5px"
                          mr="4"
                          py="2"
                          w="max-content"
                          _focus={{ boxShadow: "none" }}
                        >
                          <PopoverArrow />
                          <div className="flex flex-col justify-center text-sm">
                            <p className="py-1 cursor-pointer text-slate-400 hover:text-slate-800 font-medium transition-colors">
                              Report this response
                            </p>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="w-full flex pt-2">
                      <p className="font-medium text-slate-600 text-sm">
                        Really nice piece - impressive how you tied in two
                        seemingly separate areas of luxury fashion with White
                        Lotus 👏
                      </p>
                    </div>

                    <div className="w-full h-16  flex items-center">
                      <span
                        id={`comment-reply-like-wrapper-${index}`}
                        className="hover:text-black text-lg transition-colors cursor-pointer flex items-center justify-center"
                      >
                        <ion-icon
                          onClick={(e) => {
                            document.getElementById(
                              `comment-reply-like-count-${index}`
                            ).innerText = 20;
                            let current_like_count = parseFloat(
                              document
                                .getElementById(
                                  `comment-reply-like-count-${index}`
                                )
                                .innerHTML.replace(",", "")
                            );

                            if (current_like_count != 20 + 1) {
                              let updated_like_count = (current_like_count + 1)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                              document.getElementById(
                                `comment-reply-like-count-${index}`
                              ).innerText = updated_like_count;
                              e.target.setAttribute("name", "heart");
                              document
                                .getElementById(
                                  `comment-reply-like-wrapper-${index}`
                                )
                                .classList.add("text-pink-500");
                              e.target.parentElement.classList.remove(
                                "hover:text-black"
                              );
                              document
                                .getElementById(
                                  `comment-reply-like-count-${index}`
                                )
                                .classList.remove("hover:text-black");
                            }
                          }}
                          name="heart-outline"
                        ></ion-icon>
                        <div
                          id={`comment-reply-like-count-${index}`}
                          className="ml-1 text-xs"
                        >
                          {(20)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Hide Blog for Non Member */}
      <div
        className={`blog-lock-wrapper z-50 w-[840px] flex flex-col text-slate-500 darktext-slate-400 items-center  h-[24rem]  fixed -bottom-32  -ml-16 ${
          isMember === true ? "hidden" : ""
        }`}
      >
        <div className=" w-full h-full blur-xl bg-white darkbg-slate-900 absolute z-10"></div>

        <span className="z-50 mt-28">
          <span>
            <ion-icon name="lock-closed"></ion-icon>
          </span>{" "}
          Member only story
        </span>
        <button className="py-3 z-50 px-12 text-sm mt-4 bg-slate-900 darkbg-black hover:bg-slate-800 darkhover:bg-black darkborder darkborder-white transition-colors text-white font-medium rounded-full">
          Become a member
        </button>
      </div>

      {/* Overlay like wrapper */}

      <div
        id="overlay_like_wrapper"
        className={`z-50  w-[840px] -ml-16  fixed ${!isMember ? 'hidden' : ''}  bottom-6  transition-transform flex items-center justify-center`}
      >
        <div className="w-56 bg-white darkbg-slate-900 h-12 flex items-center justify-center rounded-full shadow-md">
          <span
            id="like_button_2"
            className="text-2xl cursor-pointer justify-start text-slate-400  flex items-center"
          >
            <ToolTip
              label="Like"
              target={
                <span className="hover:text-black transition-colors darkhover:text-white flex items-center justify-center">
                  <ion-icon
                    onClick={(e) => {
                      document.getElementById("like-count-2").innerText =
                        like_count;
                      let current_like_count = parseFloat(
                        document
                          .getElementById("like-count-2")
                          .innerHTML.replace(",", "")
                      );

                      console.log(current_like_count);

                      if (current_like_count != like_count + 1) {
                        let updated_like_count = (current_like_count + 1)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        document.getElementById("like-count-2").innerText =
                          updated_like_count;
                        e.target.setAttribute("name", "heart");
                        document
                          .getElementById("like_button_2")
                          .classList.replace("text-slate-400", "text-pink-500");

                        e.target.parentElement.classList.remove(
                          "hover:text-black"
                        );
                        document
                          .getElementById("like_button_2")
                          .classList.remove("hover:text-black");
                      }
                    }}
                    name="heart-outline"
                  ></ion-icon>
                </span>
              }
            />
            <ToolTip
              label="View likes"
              target={
                <span
                  id="like-count-2"
                  className="text-sm ml-2 hover:text-black transition-colors darkhover:text-white"
                >
                  {like_count}
                </span>
              }
            />
          </span>

          <span className="mx-3 text-slate-400">|</span>

          <span
            ref={btnRef}
            onClick={onOpen}
            className="text-2xl hover:text-black transition-colors darkhover:text-white cursor-pointer text-slate-400 flex items-center"
          >
            <ToolTip
              label="Responses"
              target={<ion-icon name="chatbubble-outline"></ion-icon>}
            />
            <span className="text-sm ml-2 ">60</span>
          </span>
        </div>
      </div>

      {/* <div className="elemwrapper">
        <h1>
          How To Turn <highlight>Yourself Into Pixar Character</highlight> Using Stable Diffusion AI
        </h1>
      </div>

      <div className="elemwrapper">
        <img
          src="https://miro.medium.com/max/1400/0*XC7wO7_wMoZzny_c"
          alt="image"
        />
      </div>

      <div className="elemwrapper">
        <h2>I'm Coding Side Projects to Financially Free</h2>
      </div>
      <div className="elemwrapper">
        <h3>I'm Coding Side Projects to Become More Financially Free</h3>
      </div>
      <div className="elemwrapper">
        <p>
          In your quest to find websites that{" "}
          <strong>pay you for your writing,</strong> you usually come across
          <highlight>professional-looking websites</highlight> or at least one
          looking like a premium WordPress theme.
        </p>
      </div>
      <div className="elemwrapper">
        <slatetext>An honest assessment</slatetext>
      </div>

      <div className="elemwrapper">
        <a href="#" >
          https://medium.com/@merzmensch/why-i-wont-make-it-into-the-ai-art-history-and-why-it-s-ok-8085ba6222b8
        </a>
      </div>
      <div className="elemwrapper">
        <ul>
          <li>
            How to <bghighlight>/create</bghighlight> movies with AI
          </li>
        </ul>
      </div>
      <div className="elemwrapper">
        <ol>
          <li>How to create movies with AI</li>
        </ol>
      </div>

      <div className="elemwrapper">
        <a href="https://www.youtube.com">https://www.youtube.com</a>
      </div>
      <div className="elemwrapper">
        <SyntaxHighlighter
          customStyle={{ padding: "30px" }}
          style={dracula}
          language="javascript"
        >
          {code}
        </SyntaxHighlighter>
      </div>

      <div className="elemwrapper">
        <center>
          <divider>. . .</divider>
        </center>
      </div>

      <div className="elemwrapper">
        <blockquote>
          <h4>
            “I have learned over the years that when one's mind is made up, this
            diminishes fear”
          </h4>
          <p>albert suchwiches</p>
        </blockquote>
      </div>

      <div className="elemwrapper">
        <italic>italic text example</italic>
      </div>

      <div className="elemwrapper">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hQtEFHkUyyI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="elemwrapper">
        <div
          style={{
            paddingTop: "56.25%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <iframe
            allowFullScreen=""
            scrolling="no"
            allow="autoplay;fullscreen"
            src="https://onelineplayer.com/player.html?autoplay=false&autopause=false&muted=false&loop=false&url=https%3A%2F%2Fvimeo.com%2F777631140&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=1080p&playButton=true"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
            }}
            frameBorder={0}
          />
        </div>
      </div>

      <div className="elemwrapper">
        <center>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/brave/status/1609292060506427394?s=20&t=IqD559X_kDBom7FMjx9x6w">
            </a>
          </blockquote>
        </center>
      </div> */}

      <div id="blog">
        {/* -------------------------------------------------------------------------------------------------- */}

        <div className="pb-24">
          <div className="elemwrapper ">
            <h1>
              20 Entertaining Uses of ChatGPT You Never Knew Were Possible
            </h1>
          </div>

          <div className="elemwrapper">
            <slatetext>
              After a few months of working hard, I finally got my first check
              from Constant Content for $100 USD!
            </slatetext>
          </div>

          <div className="elemwrapper">
            <img src="https://pbs.twimg.com/media/FlSpPgWagAUa3ev?format=jpg&name=medium" />
          </div>

          <div className="elemwrapper">
            <p>
              I made my first income, the first $29 on Fiverr by doing a logo
              and a social media graphic design project in 2018.
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              <highlight>
                I clearly remember how happy I was that freaking day. I felt
                like I was having an orgasm. LOL.
              </highlight>
            </p>
          </div>
          

          <div className="elemwrapper">
            <p>
              However, I won't be discussing that money-making experience today.
              (Well, I did it already. LOL)
            </p>
          </div>

          <div className="elemwrapper">
            <img src="https://pbs.twimg.com/card_img/1626294319249494017/q0ge9eOy?format=png&name=medium" />
          </div>

          <div className="elemwrapper">
            <p>
              Today I'm gonna talk about how I made my first $100 in one hour or
              maybe it took me 1 year to earn <bghighlight>$100</bghighlight> .
            </p>
          </div>

          <div className="elemwrapper">
            <h3>Let's find out.</h3>
          </div>

          <div className="elemwrapper">
            <p>
              So, on a rainy night, I received a <strong>cold email</strong>{" "}
              from a US-based company offering me a $100{" "}
              <a href="#">sponsorship</a> proposal. The company wanted to
              promote some email marketing services on my <a href="#">blog</a>.
            </p>
          </div>

          <div className="elemwrapper">
            <img src="https://pbs.twimg.com/media/FpLast3WAAIa7SE?format=jpg&name=medium" />
          </div>

          <div className="elemwrapper">
            <p>
              Initially, I told them I would like to see the blog post, and then
              I would decide whether to publish it or not.
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              After reviewing the post, I published it and emailed the PayPal
              invoice to them to initiate payment.
            </p>
          </div>

          <div className="elemwrapper">
            <p>And,</p>
          </div>

          <div className="elemwrapper">
            <img src="https://pbs.twimg.com/media/FhnZ_ROWYAEuiC4?format=jpg&name=medium" />
          </div>

          <div className="elemwrapper">
            <p>About half an hour later, I got an email from PayPal:</p>
          </div>

          <div className="elemwrapper">
            <blockquote>
              <h1>
                You've received $100 USD from I don't wanna disclose” Ltd.
              </h1>
            </blockquote>
          </div>

          <div className="elemwrapper">
            <p>Man, look at that number!</p>
          </div>

          <div className="elemwrapper">
            <p>
              <highlight>One hundred dollars!</highlight>
            </p>
          </div>

          <div className="elemwrapper">
            <center>
              <img src="https://pbs.twimg.com/media/FlQ5AevXEAEdjM6?format=jpg&name=medium" />
            </center>
          </div>

          <div className="elemwrapper">
            <p>
              As a middle-class Indian young hustler, it was my first big
              earnings. It was a big deal and I was so happy.
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              Yeah, maybe it took me only an hour to get this deal and make this
              $100.
            </p>
          </div>

          <div className="elemwrapper">
            <p>But,</p>
          </div>

          <div className="elemwrapper">
            <p>
              Over the past year, I have been working on my blog every single
              day, writing <underline>blog posts</underline>, creating{" "}
              <underline>Pinterest</underline> pins, thinking about ways to{" "}
              <underline>generate traffic</underline> , and doing lots of other
              stuff that every blogger and aspiring entrepreneur does.
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              Actually, it took me almost <strong>1.5 years</strong> to get my
              first sponsorship opportunity to earn the first 100 dollars from
              my blog.
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              And while doing all this work to make my blog better, I was
              completely broke.
            </p>
          </div>

          <div className="elemwrapper">
            <p>Fortunately, I always have the support of my parents.</p>
          </div>

          <div className="elemwrapper">
            <p>
              In addition, I have free food and shelter. That's one of the huge{" "}
              <a href="">benefits you have as a teen entrepreneur.</a>{" "}
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              <strong>
                That's it, this is the story of how I made $100 in an hour from
                my blog.
              </strong>{" "}
            </p>
          </div>

          {/* <div className="elemwrapper">
        <center>
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/FonsMans/status/1609097057398296576?s=20&t=2HsnM8a71NPzGx86GTCZ9g">

            </a>
          </blockquote>
        </center>
        </div> */}

          <div className="elemwrapper">
            <p>Thanks for reading this article.</p>
          </div>

          <div className="elemwrapper">
            <p>
              If you loved what you read, would you be able to{" "}
              <a href="">buy me a cup of coffee?</a> It's okay if you can't
              right now.
            </p>
          </div>

          <div className="elemwrapper">
            <p>
              <underline>
                If you have any questions or if you wanna{" "}
                <a href="">work with me</a> ,
              </underline>{" "}
              feel free to <a href="">contact me</a>. I'm always available to
              help young hustlers like you <a href="">@InuEtc</a> on Instagram.
            </p>
          </div>

          <div className="elemwrapper">
            <h3>Keep hustling!</h3>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------- */}
      </div>

      <div className="flex items-center justify-center py-4 flex-wrap pb-12 pt-12">
        <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 darkbg-slate-800 darktext-white darkhover:bg-slate-800 darkborder darkborder-slate-900 darkhover:border-white text-xs">
          Programming
        </p>
        <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 darkbg-slate-800 darktext-white darkhover:bg-slate-800 darkborder darkborder-slate-900 darkhover:border-white text-xs">
          Data science
        </p>
        <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 darkbg-slate-800 darktext-white darkhover:bg-slate-800 darkborder darkborder-slate-900 darkhover:border-white text-xs">
          Technology
        </p>
        <p className="px-8 mr-3 mb-3 py-2 font-medium cursor-pointer hover:bg-slate-200 rounded-full text-slate-800 bg-slate-100 darkbg-slate-800 darktext-white darkhover:bg-slate-800 darkborder darkborder-slate-900 darkhover:border-white text-xs">
          Self improvement
        </p>
      </div>

      <div className="flex items-center py-4 flex-wrap border-t border-slate-slate-200 pt-12">
        <span
          id="like_button"
          className="text-2xl cursor-pointer justify-start text-slate-500 darktext-slate-400  flex items-center"
        >
          <ToolTip
            label="Like"
            target={
              <span className="hover:text-black transition-colors darkhover:text-white flex items-center justify-center">
                <ion-icon
                  onClick={(e) => {
                    document.getElementById("like-count").innerText =
                      like_count;
                    let current_like_count = parseFloat(
                      document
                        .getElementById("like-count")
                        .innerHTML.replace(",", "")
                    );

                    console.log(current_like_count);

                    if (current_like_count != like_count + 1) {
                      let updated_like_count = (current_like_count + 1)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      document.getElementById("like-count").innerText =
                        updated_like_count;
                      e.target.setAttribute("name", "heart");
                      document
                        .getElementById("like_button")
                        .classList.replace("text-slate-500", "text-pink-500");
                      e.target.parentElement.classList.remove(
                        "hover:text-black"
                      );
                      document
                        .getElementById("like-count")
                        .classList.remove("hover:text-black");
                    }
                  }}
                  name="heart-outline"
                ></ion-icon>
              </span>
            }
          />
          <ToolTip
            label="View likes"
            target={
              <span
                id="like-count"
                className="text-sm ml-2 hover:text-black transition-colors darkhover:text-white"
              >
                {like_count}
              </span>
            }
          />
        </span>

        <span
          ref={btnRef}
          onClick={onOpen}
          className="text-2xl hover:text-black transition-colors darkhover:text-white cursor-pointer ml-6 text-slate-500 darktext-slate-400  flex items-center"
        >
          <ToolTip
            label="Responses"
            target={<ion-icon name="chatbubble-outline"></ion-icon>}
          />
          <span className="text-sm ml-2 ">60</span>
        </span>

        <div className="flex items-center justify-center absolute right-0">
          <p className="font-medium mr-3">Enjoy the read? Reward the writer</p>
          <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 transition-colors text-white py-1.5 px-6 rounded-full">
            <span className="flex mr-2 items-center justify-center">
              <ion-icon name="cash"></ion-icon>
            </span>{" "}
            Give a tip
          </button>
        </div>
      </div>
      <div className="w-full  bg-slate-100 darkbg-slate-800 darktext-white darkhover:bg-slate-800 darkborder darkborder-slate-900  px-6 py-6 mt-20 pt-8">
        <div className="w-full h-32 flex">
          <div className="w-[85%] h-full flex flex-col pr-12">
            <h1 className="text-xl">More From Font Mans</h1>
            <p className="text-slate-400 text-md mt-4">
              We curate and disseminate outstanding articles from diverse
              domains and disciplines to create fusion and synergy.
            </p>
          </div>
          <div className="w-[15%] h-full flex flex-col items-center">
            <button
              onClick={(e) => {
                if (e.target.innerText == "Follow") {
                  document.getElementById("blog_follow_button").click();
                  e.target.innerText = "Following";
                  e.target.classList.replace("bg-indigo-500", "bg-white");
                  e.target.classList.replace("text-white", "text-indigo-500");
                  e.target.classList.add("border-indigo-500");
                  e.target.classList.add("hover:text-white");
                } else if (e.target.innerText == "Following") {
                  document.getElementById("blog_follow_button").click();
                  e.target.innerText = "Follow";
                  e.target.classList.replace("text-indigo-500", "text-white");
                  e.target.classList.remove("border-indigo-500");
                  e.target.classList.replace("bg-white", "bg-indigo-500");
                  e.target.classList.remove("hover:text-white");
                }
              }}
              id="blog_follow_button_2"
              className="flex border items-center justify-center bg-indigo-500 hover:bg-indigo-600 darkborder-none transition-colors text-white py-1.5 px-6 rounded-full"
            >
              Follow
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          {[1, 1, 1, 1, 1].map((data, index) => {
            return (
              <div>
                <div className="w-full cursor-pointer h-[300px] border-b flex border-b-slate-200 darkborder-b-slate-700 my-6">
                  <div className="w-[75%] h-full  flex flex-col  items-center pt-6 pb-6 pr-6">
                    <div className="w-full h-[50px]  flex items-center">
                      <img
                        className="h-8 rounded-full mr-3"
                        src="https://pbs.twimg.com/profile_images/1573085370543214593/D8-BRySa_400x400.jpg"
                      />
                      <p className="text-sm">
                        Font Mans <VerifyBadge followers_count={100500} />
                        <span className="text-slate-400">
                          · 4 days ago ·{" "}
                          <span className="ml-1 mr-2 cursor-pointer">
                            <MemberOnlyStory />
                          </span>{" "}
                          Member only story
                        </span>
                      </p>
                    </div>
                    <div className="w-full h-[70px]  flex items-center">
                      <h1 className="text-2xl mt-2 font-extrabold">
                        I'm Coding Side Projects to Become More Financially Free
                      </h1>
                    </div>
                    <div className="w-full h-[100px] relative mt-4  overflow-hidden overflow-ellipsis  flex  ">
                      <p className="text-slate-400 font-medium overflow-ellipsis">
                        Little tips I've discovered that improve conversion
                        rates — Many factors go into an optimal landing page.
                        What are those factors? It's more than a great offer and
                        a clear headline. It's more than stamping social proof
                        on the page. This is where copywriting helps improve
                        conversions. Copywriting tweaks help sharpen the clarity
                        of your message.
                      </p>
                    </div>
                    <div className="w-full h-[70px] mt-3  flex items-center">
                      <div className="w-[70%] h-full  flex items-center">
                        <p className="px-3 mr-4 py-2 font-medium cursor-pointer hover:bg-slate-300 rounded-full text-slate-800 bg-slate-200 text-xs">
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
                            <span className="text-slate-800 cursor-pointer text-xl flex items-center justify-center hover:text-slate-900">
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

                        <Popover>
                          <PopoverTrigger>
                            <span className="text-slate-800 cursor-pointer text-xl flex items-center justify-center hover:text-slate-900">
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
                            <div className="flex flex-col justify-center">
                              <p className="py-1 text-slate-400 hover:text-slate-800 font-medium transition-colors">
                                Mute this author
                              </p>
                              <p className="py-1 text-slate-400 hover:text-slate-800 font-medium transition-colors">
                                Report
                              </p>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                  <div className="w-[25%] h-full flex items-center justify-center">
                    <img src="https://pbs.twimg.com/media/Fb6e6OLWIAAC6Sj?format=jpg&name=medium" />
                  </div>
                </div>

                <div
                  className={`w-full h-16 border-b border-b-slate-200 darkborder-b-slate-700 flex justify-center ${
                    index !== 0 ? "hidden" : ""
                  }`}
                >
                  <h1 className="mt-2">
                    Share your ideas with millions of readers.
                  </h1>
                  <button className=" text-sm  h-max py-2.5 ml-3 bg-black text-white  px-6 rounded-full">
                    Write on Inspire
                  </button>
                </div>
              </div>
            );
          })}

          <button className="flex border w-96 items-center justify-center bg-indigo-500 hover:bg-indigo-600 darkborder-none transition-colors text-white py-1.5 px-6 rounded-full my-8 text-md">
            Read more from Font Mans
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
