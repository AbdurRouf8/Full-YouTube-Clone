import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    const { data } = fetchFromAPI(`\search?part=snippet&q=${searchTerm}`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [searchTerm]);
  return ( 
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search results for:
        <span style={{ color: "#F31503" }}> {searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
