import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QrCards } from "../../component";
import { fetchAsyncData } from "../../reduex/reducers/action.js";
import { Button } from "@chakra-ui/react";
import {
  setAuthentication
} from "../../reduex/slices";
import { useNavigate } from "react-router-dom";

export const EditPage: React.FC = () => {

  const { loading, error } = useSelector((state: any) => state.shortUrl);
  const dispatch = useDispatch();
  const navigator = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('token')
    dispatch(setAuthentication(false))
    navigator('/login')
  }


  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    // Set initial authentication state

    if (token) {

      dispatch(fetchAsyncData());
    }

  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>

      <Button
        colorScheme="blue"
        onClick={() => handleLogOut()}
      >
        logOut
      </Button>
      <QrCards />;
    </div>
  )
};
