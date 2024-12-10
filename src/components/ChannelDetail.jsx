import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(
        `channels?part=snippet%2Cstatistics&id=${id}`
      );
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?part=snippet%2Cid&channelId=${id}`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div>
      <Box sx={{ minHeight: "95vh" }}>
        <Box>
          <div
            style={{
              background: "linear-gradient(to right, #ff4b1f, #1fddff)",
              zIndex: 10,
              height: "300px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
