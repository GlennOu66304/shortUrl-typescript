
import React, { useEffect } from "react";

import { QrCard } from "../qrCard/QrCard";
import { fetchAsyncData } from "../../reduex/reducers/action.js";
import { useDispatch, useSelector } from "react-redux";
export const QrCards: React.FC = () => {

  const { loading, shortUrlList, error } = useSelector(
    (state: any) => state.shortUrl
  );
  const dispatch = useDispatch();
 
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
      {/* <h2 onClick={test}>This is a test </h2> */}
      <div>
        {shortUrlList.map((item, index) => {
          return <QrCard name2={item.shortId} key={index} />;
        })}
      </div>
    </div>
  );
};
