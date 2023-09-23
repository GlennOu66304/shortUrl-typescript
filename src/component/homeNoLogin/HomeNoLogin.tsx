import React from "react";
import styles from "./homeNoLogin.module.css";
import { Center } from "@chakra-ui/react";
import { Form } from "..";

export const HomeNoLogin: React.FC = () => {


  
  return (
    <div className={styles["home"]}>

      <div className={styles["form"]}>
        <Center h="30vh" justifyContent="center">
          <Form />
        </Center>
      </div>
    </div>
  );
};
