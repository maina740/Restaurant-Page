import React from "react";
import { Box, Typography } from "@mui/material";

const VideoPage = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Watch Our Special Dish in Action 🍜
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/R_AQWk2obVE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default VideoPage;