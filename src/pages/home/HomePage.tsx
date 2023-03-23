import React from "react";
import styles from "./homePage.module.css";
import { Center } from "@chakra-ui/react";
import { Form } from "../../component";
import { useNavigate } from "react-router-dom";
import { fetchAsyncData } from "../../reduex/reducers/action.js";
import { useDispatch } from "react-redux";
// console.log(styles);
export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickEdit = () => {
    dispatch(fetchAsyncData());
    navigate("/edit");
  };
  return (
    <div className={styles["home"]}>
      <div className={styles["header"]}>
        <div id={styles["generate"]} className={styles["block"]}>
          <strong>Generate a short URL</strong>
        </div>

        <div
          id={styles["edit"]}
          onClick={handleClickEdit}
          className={styles["block"]}
        >
          Go to Long URL Edit Page
        </div>
      </div>

      <div className={styles["form"]}>
        <Center h="30vh" justifyContent="center">
          <Form />
        </Center>
      </div>
    </div>
  );
};
