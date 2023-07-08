import React, { useEffect } from "react";
// import styles from "./HomePage.module.css";
// import axios from "axios";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QrCard } from "../../component";
import { fetchUserShortUrl } from "../../reduex/reducers";
import { Button } from "@chakra-ui/react";
import {
  setAuthentication
} from "../../reduex/slices";
import { useNavigate } from "react-router-dom";


export const UserUrlList: React.FC = () => {
  const { userId } = useParams()
  const userUrlList  = useSelector((state: any) => state.user.userUrlList)
  console.log(userUrlList)
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    dispatch(setAuthentication(false))
    navigator('/login')
  }

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserShortUrl(userId))
    }
    return
  }, [dispatch]); // Dependency array

  return (
    <div>
      <h1>This is the {userId} userUrlList Page</h1>
      <Button
        colorScheme="blue"
        onClick={() => handleLogOut()}
      >
        logOut
      </Button>

      {userUrlList ? (

        userUrlList.map((item, index) => {
          return (
            <QrCard name2={item.shortId} longUrl2={item.longUrl} key={index} />

          );
        })

      )
        : (
          <div>loading</div>
        )}
    </div>
  );
};
