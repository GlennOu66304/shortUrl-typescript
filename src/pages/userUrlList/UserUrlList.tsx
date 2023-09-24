import React, { useEffect, } from "react";


import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QrCard, Header } from "../../component";
import { fetchUserShortUrl } from "../../reduex/reducers";

import { useNavigate } from "react-router-dom";


export const UserUrlList: React.FC = () => {
  const { userId } = useParams()
  const userUrlList = useSelector((state: any) => state.user.userUrlList)
  console.log("userList:", userUrlList)

  const dispatch = useDispatch();
  const navigator = useNavigate();


  useEffect(() => {

    if (userId) {
      // and made a initil check if the userList is empty, if not, then don't fetch again
      if (userUrlList.length === 0) {
        dispatch(fetchUserShortUrl(userId))
      }

    }

  }, [userId, userUrlList, dispatch]); // Dependency array

  return (
    <div>

      <Header />
      {/* here is the area of the short url list */}

      <div>
        {userUrlList ? (

          userUrlList.map((item, index) => {
            return (
              <QrCard name2={item.shortId} longUrl2={item.longUrl} key={index} />

            );
          })

        )
          : (
            <div>loading</div>
          )}
      </div>

    </div>
  );
};
