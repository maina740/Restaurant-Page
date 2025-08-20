import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Stack,
  Chip,
  AvatarGroup,
} from "@mui/material";

const Testimonials = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center", // centers the whole section
        px: { xs: 2, md: 10 },
        py: 8,
        gap: 40, // spacing between image and text
        bgcolor: "#FAFAFA"
      }}
    >
      {/* Chef Image */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: 300 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 250,
            height: "auto",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <img
            src="/src/assets/Chef-Girl.png"
            alt="Chef"
            style={{ width: "100%", borderRadius: 12 }}
          />
        </Box>
        <Chip
          label="Our Best Chef 👨‍🍳"
          color="default"
          size="small"
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "white",
            boxShadow: 1,
          }}
        />
      </Box>

      {/* Testimonial Text */}
      <Box maxWidth="500px" mt={{ xs: 5, md: 0 }}>
        <Typography
          variant="overline"
          color="error"
          fontWeight="bold"
          mb={1}
          display="block"
        >
          Testimonials
        </Typography>
        <Typography variant="h5" fontWeight={700} mb={2}>
          What Our Customers Say About Us
        </Typography>
        <Typography color="text.secondary" mb={3}>
          “I had the pleasure of dining at Foodi last night, and I’m still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </Typography>

        {/* Feedback Section */}
        <Stack direction="row" spacing={2} alignItems="center">
          <AvatarGroup max={3}>
            <Avatar
              alt="User1"
              src="https://randomuser.me/api/portraits/women/1.jpg"
            />
            <Avatar
              alt="User2"
              src="https://randomuser.me/api/portraits/women/2.jpg"
            />
            <Avatar
              alt="User3"
              src="https://randomuser.me/api/portraits/men/3.jpg"
            />
          </AvatarGroup>
          <Box>
            <Typography fontWeight={600}>Customer Feedback</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Rating value={4.9} precision={0.1} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                (18.6k Reviews)
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Testimonials;