import React, { useEffect } from "react";
import { Box, Stack, Button } from "@chakra-ui/react";
import { QrCard } from "../qrCard/QrCard";
import { fetchAsyncData } from "../../reduex/reducers/action.js";
import { removeShortUrl, openModal, closeModal } from "../../reduex";
import { useDispatch, useSelector } from "react-redux";
export const QrCards: React.FC = () => {
  const { loading, shortUrlList, error, isOpen } = useSelector(
    (state: any) => state.shortUrl
  );
  const dispatch = useDispatch();
  const handleEdit = (name2) => {
    console.log(name2, isOpen, openModal());
    dispatch(openModal(name2));
  };
  const handleDelete = (name2) => {
    dispatch(removeShortUrl(name2));
  };
  useEffect(() => {
    dispatch(fetchAsyncData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="QrCards">
      <div>
        {shortUrlList ? (
          shortUrlList.map((item, index) => {
            return (
              <div key={index}>
                <QrCard name2={item.shortId} />;{/* edit and delete button */}
                <Box flex="1" className="edit">
                  <Stack direction="row" spacing={2}>
                    <Button
                      colorScheme="blue"
                      onClick={() => handleEdit(item.shortId)}
                    >
                      edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.shortId)}
                      colorScheme="blue"
                    >
                      delete
                    </Button>
                  </Stack>
                </Box>

                {/* Modal Area */}
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
};
