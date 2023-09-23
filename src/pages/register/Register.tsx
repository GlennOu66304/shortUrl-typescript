import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import styles from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setName,
  setPassword,
  // resetState,
} from "../../reduex/slices/authSlice.js";
import { registerAccount } from "../../reduex";
import { useNavigate } from 'react-router-dom';

export const Register: React.FC = () => {
  const {
    username,
    email,
    password,
    isLoading,
    // isSuccess,
    isError,
    errorMessage,
  } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  // const { name, email, password, isLoading, isSuccess, isError, errorMessage } = useSelector((state) => state.registration);
  const navgitate = useNavigate()
  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(setPassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAccount({ username, email, password }));
    navgitate('/login')
  };



  return (
    <div className={styles["home"]}>
      <h2 className="font-bald text-2xl">Register an Account </h2>
      <Box maxW="md" mx="auto" mt={8}>
        {isError && <div>{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={username} onChange={handleNameChange} />
            </FormControl>

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


            <div className="flex space-x-4">
              <Button type="submit" colorScheme="blue" isLoading={isLoading}>
                Register
              </Button>

              <Button colorScheme="blue" isLoading={isLoading} onClick={() => {
                navgitate('/login')
              }}>
                Login
              </Button>

            </div>


          </VStack>
        </form>
      </Box>
    </div>
  );
};
