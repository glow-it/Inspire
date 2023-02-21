import React, { useEffect, useState } from "react";

function Write() {
  let [inputCount, setInputCount] = useState([]);

  useEffect(() => {
    document.querySelector("header").style.display = "none";
  }, []);

  function onPublish(){
    let story_form = document.getElementById("story_form");
    var formData = new FormData(story_form);
    var formObject = Object.fromEntries(formData.entries());
  
    console.log(formObject);
  }

  return (
    <div className="w-full  flex flex-col items-center">
      <div className="w-full h-20 flex items-center justify-end">
        <h1 className="text-3xl font-semibold absolute left-16">Write</h1>
        <button onClick={()=> {onPublish()}} className="mr-6 px-6 py-1.5 text-md bg-indigo-600 rounded-full text-white font-medium">
          Publish
        </button>
        <img
          src="https://pbs.twimg.com/profile_images/1573085370543214593/D8-BRySa_400x400.jpg"
          alt="logo"
          className="h-10 mr-16 rounded-full"
        />
      </div>
      <form id="story_form" className="w-[50%] mt-10 h-full flex flex-col  relative">
        <textarea
          onChange={(e) => {
            e.target.style.height = e.target.scrollHeight + "px";

            e.target.addEventListener("keydown", function (event) {
              // If the Enter key is pressed
              if (event.keyCode === 13) {
                event.preventDefault();
                e.target.blur();
                setInputCount([...inputCount, ""]);
              }
            });
          }}
          type="text"
          name="title"
          className=" w-full resize-none font-extrabold focus:border-none outline-none text-5xl"
          placeholder="Title"
        />

        <div className="relative flex">
          <span
            id="plus"
            onClick={(e) => {e.target.classList.toggle("rotate-45")}}
            className="text-4xl transition-transform absolute -left-[7%] text-slate-500 cursor-pointer"
          >
            <ion-icon name="add-circle-outline"></ion-icon>
          </span>
          <textarea
            onChange={(e) => {
              e.target.style.height = e.target.scrollHeight + "px";

              e.target.addEventListener("keydown", function (event) {
                // If the Enter key is pressed
                if (event.keyCode === 13) {
                  event.preventDefault();
                  e.target.blur();
                  setInputCount([...inputCount, ""]);
                }
              });
            }}
            onFocus={(e) => {
                document.getElementById("plus").style.display = "block";
            }}
            autoFocus
            onBlur={() => {
              document.getElementById("plus").style.display = "none";
            }}
            type="text"
            name="1"
            id="1"
            className=" w-full mb-1 resize-none font-medium focus:border-none outline-none text-2xl"
            placeholder="Tell your story..."
          />
        </div>

        {inputCount.map((data, index) => {
          return (
            <div className="relative flex">
              <span
                id={"plus-" + index + 1}
                onClick={(e) => e.target.classList.toggle("rotate-45")}
                className="text-4xl transition-transform absolute -left-[7%] text-slate-500 cursor-pointer"
              >
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
              <textarea
              onKeyDown={(event,e)=> {

                console.log(event,e);

                 // If the Enter key is pressed
                 if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementById(index + 2).blur();
                    setInputCount([...inputCount, ""]);
                  }

                  if (event.keyCode === 8) {
                    if ((document.getElementById(index + 2).value == "")) {
                      event.preventDefault();
                      document
                        .getElementById(parseInt(document.getElementById(index + 1).id))
                        .focus();
                       
                        const newArray = inputCount.slice(0, -1); // Creates a new array without the last item
                        setInputCount(newArray); 
                    }
                  }

              }}
                onChange={(e) => {
                  e.target.style.height = e.target.scrollHeight + "px";

                }}
                autoFocus
                onBlur={() => {
                  document.getElementById("plus-" + index + 1).style.display =
                    "none";
                }}
                onFocus={(e) => {
                    document.getElementById("plus-" + index + 1).style.display =
                      "block";
                }}
                type="text"
                name={index + 2}
                id={index + 2}
                className=" w-full mb-1 resize-none font-medium focus:border-none outline-none text-2xl"
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default Write;
