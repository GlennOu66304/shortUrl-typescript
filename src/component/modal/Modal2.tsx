import React from "react";
// import styles from "./Modal.module.css";
import {useDispatch,useSelector} from "react-redux";
import { closeModal } from "../../reduex";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
// interface ModalProps {
//   id: string;
// }
export const Modal2: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: any) => state.shortUrl);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.value);
  // };
const handleCancel = ()=>{
  
  dispatch(closeModal())
}
const handleSave = ()=>{
  dispatch(closeModal())
}
  return (
    <>
      {/* Pop up windows */}
      <Modal isOpen={isOpen} onClose={handleCancel} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Long Url</ModalHeader>
          <ModalBody>
            <h2>This is a Modal component test </h2>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSave}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
