import React, { useState, useRef } from "react";
import styles from "./HomePage.module.css";
import axios from "axios";
import { Center } from "@chakra-ui/react";
import Form from "../../component/Form/Form";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Center h="100vh">
        <Form />
      </Center>
    </div>
  );
};
