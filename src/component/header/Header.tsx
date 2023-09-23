
import React from "react";
import { useNavigate } from "react-router-dom";
import { setAuthentication } from "../../reduex/slices";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export const Header: React.FC = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleReturn = () => {
    navigator("/");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(setAuthentication(false));
    navigator("/login" as const);
  };

  const handleLogin = () => {
    navigator("/login" as const);
  }
  const token = localStorage.getItem("token");
  return (
    <div className="flex justify-between items-center py-4 px-8">
      {/* show this button when the router is in the userurlist page only */}
      <Button colorScheme="blue" onClick={() => handleReturn()}>
        ShortUrl
      </Button>
      {/* <h1 className="text-xl font-bold">My App</h1> */}


      {
        token ? (
          <Button colorScheme="blue" onClick={() => handleLogOut()}>
            logout
          </Button>
        ) : (
          <Button colorScheme="blue" onClick={() => handleLogin()}>
            login
          </Button>
        )
      }

    </div>
  );
};
