import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QrCards } from "../../component";
import { fetchAsyncData } from "../../reduex/reducers/action.js";

export const EditPage: React.FC = () => {
  const { loading,error } = useSelector(
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
    <div className="QrCard">
      <QrCards />
    </div>
  );
};
