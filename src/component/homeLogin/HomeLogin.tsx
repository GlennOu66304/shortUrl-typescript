import React from "react";
import styles from "./homeLogin.module.css";
import { Center } from "@chakra-ui/react";
import { Form } from "../form/Form";
import { useNavigate } from "react-router-dom";




export const HomeLogin: React.FC = () => {
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleClickEdit = () => {

    // dispatch(fetchAsyncData());
    navigate(`/${userId}/shorturllist`);
  };
  return (
    <div className={styles["home"]}>
      <div className={styles["header"]}>
       
       
        
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
