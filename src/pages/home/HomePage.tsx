import React from "react";
// import styles from "./homePage.module.css";
import { HomeLogin, HomeNoLogin } from "../../component";


export const HomePage: React.FC = () => {
  // const dispatch = useDispatch()

  const token = localStorage.getItem('token');

  return token ? <HomeLogin /> : <HomeNoLogin />

};
