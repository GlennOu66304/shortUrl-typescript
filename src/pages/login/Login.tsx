import React from "react";
import styles from "./login.module.css";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
} from "../../reduex/slices/authSlice.js";
import { loginAccount } from "../../reduex";
import { useNavigate } from 'react-router-dom';
export const Login: React.FC = () => {
  const {

    email,
    password,
    isLoading,
    // isSuccess,
    isError,
    errorMessage,
  } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAccount({ email, password }));


  };

  if (localStorage.getItem('token')) {
    navigate("/")
  }

  return (
    <div className={styles["home"]}>
      <h2>This is the login page</h2>

      <Box maxW="md" mx="auto" mt={8}>
        {isError && <div>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={handleEmailChange} />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" isLoading={isLoading}>
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
};
