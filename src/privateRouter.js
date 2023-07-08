import { Navigate, Outlet } from "react-router-dom";
import {
    setAuthentication
  } from "./reduex/index";
import { useSelector, useDispatch } from "react-redux";



export const PrivateRoute = () => {
    const dispatch = useDispatch()
    var isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = localStorage.getItem('token');
    // Set initial authentication state
  
    if (token) {
      dispatch(setAuthentication(true));
    }
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  };