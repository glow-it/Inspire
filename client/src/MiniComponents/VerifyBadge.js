import React, { useEffect } from "react";

function VerifyBadge({ followers_count }) {
  useEffect(() => {
    let verifyBadge = document.querySelectorAll("#verifyBadge");
    verifyBadge.forEach((elem) => {
      elem.parentElement.classList.add("flex", "items-center");
    });
  }, []);

  return (
    <span id="verifyBadge" className="flex items-center text-blue-500">
      {
        parseInt(followers_count) >= 100000 ? (
          <img
            className="h-7"
            src="https://i.postimg.cc/2jcQd4hm/blue-verify-badge.png"
          />
        ) : (
          ""
        )
        //         : parseInt(followers_count) >= 1000000 ?

        // <img className='h-4 ml-1 mr-1' src='https://i.postimg.cc/8cGZFYXT/yellow-verify-badge.png' />

        //         : ''
      }
    </span>
  );
}

export default VerifyBadge;
