import {
  Avatar,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthModal from "../MiniComponents/AuthModal.js";
import ProfileDropdown from "../MiniComponents/ProfileDropdown.js";

function Header() {

  let navigate = useNavigate()

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
  }, [location]);


  return (
    <header className={`w-full darkbg-gray-900 darktext-white h-20 z-50 bg-white flex ${isHome ? 'sticky top-0 border-b-slate-800' : 'border-b-slate-200 darkborder-b-slate-800'} items-center border-b `}>
      {/* Modal For Authentication */}
      <AuthModal onClose={onClose} isOpen={isOpen} isLogin={isLogin} />
      <div className="w-1/2 h-full flex items-center">
        <h1 onClick={()=> navigate('/')} className="text-3xl font-bold ml-28 cursor-pointer">Inspire.</h1>
      </div>

      {isHome && isHome ? (
        <div className="w-1/2 h-full  flex items-center justify-end">
          <ul className="flex">
          
            <li className="font-semibold mx-3 cursor-pointer hover:text-indigo-500 transition-colors">
              Membership
            </li>
            <li className="font-semibold mx-3 cursor-pointer hover:text-indigo-500 transition-colors">
              Write
            </li>
            <li
              onClick={() => {
                setIsLogin(true);
                onOpen();
              }}
              className="font-semibold mx-3 mr-6 cursor-pointer hover:text-indigo-500 transition-colors"
            >
              Sign in
            </li>
          </ul>

          <button
            onClick={() => {
              setIsLogin(false);
              onOpen();
            }}
            className="py-2  px-6  bg-slate-900 text-white hover:bg-slate-800 mr-28 font-medium rounded-full transition-colors"
          >
            Get started
          </button>
        </div>
      ) : (
        <div className="w-1/2  h-full flex items-center justify-end">
          <InputGroup size="md" mr="8">
            <Input
              pr="4.5rem"
              pl="14"
              type="text"
              placeholder="Search Inspire."
              rounded="full"
              focusBorderColor="black.500"
              variant='filled'
              border='1px'
              _focus={{border:'1px solid'}}
            />
            <InputLeftElement width="4.5rem">
              <span className="px-2 text-slate-400 py-2 rounded-full text-xl flex items-center justify-center">
                <ion-icon name="search"></ion-icon>
              </span>
            </InputLeftElement>
          </InputGroup>

          <ul className="flex">
            <li className="font-semibold flex mx-3 cursor-pointer hover:text-indigo-500 transition-colors">
              <span className="flex items-center text-xl mr-1 justify-center">
                <ion-icon name="create-outline"></ion-icon>
              </span>{" "}
              Write
            </li>
            <li className="font-semibold mx-3 cursor-pointer hover:text-indigo-500 transition-colors">
              <span className="flex text-2xl items-center justify-center">
                <ion-icon name="notifications"></ion-icon>
              </span>
            </li>
          </ul>

          <ProfileDropdown
            target={
              <div className=" mr-28 mx-3 flex h-full items-center cursor-pointer">
                <Avatar
                  size={"sm"}
                  bg="teal.500"
                  color="white"
                  name="Arshad Yaseen"
                  src="https://bit.ly/dan-abramov"
                />
                <span className="flex px-2 h-full items-center  justify-center">
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </span>
              </div>
            }
          />
        </div>
      )}
    </header>
  );
}

export default Header;
