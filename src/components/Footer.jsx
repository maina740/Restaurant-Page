import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#FAFAFA", px: { xs: 2, md: 10 }, py: 6 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Brand & Description */}
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h6"
            sx={{ color: "green", fontWeight: "bold", mb: 1 }}
          >
            FOODI
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Savor the artistry where every dish is a culinary masterpiece
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} mb={2}>
            <IconButton
              href="https://www.facebook.com/login"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#e0f2f1",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "green",
                  transform: "scale(1.1)",
                  "& svg": {
                    color: "white"
                  }
                }
              }}
            >
              <FacebookIcon sx={{ color: "green" }} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#e0f2f1",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "green",
                  transform: "scale(1.1)",
                  "& svg": {
                    color: "white"
                  }
                }
              }}
            >
              <InstagramIcon sx={{ color: "green" }} />
            </IconButton>
            <IconButton
              href="https://twitter.com/i/flow/login"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#e0f2f1",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "green",
                  transform: "scale(1.1)",
                  "& svg": {
                    color: "white"
                  }
                }
              }}
            >
              <TwitterIcon sx={{ color: "green" }} />
            </IconButton>
            <IconButton
              href="https://accounts.google.com/ServiceLogin?service=youtube"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: "#e0f2f1",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "green",
                  transform: "scale(1.1)",
                  "& svg": {
                    color: "white"
                  }
                }
              }}
            >
              <YouTubeIcon sx={{ color: "green" }} />
            </IconButton>
          </Stack>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Useful links
          </Typography>
          {["About us", "Events", "Blogs", "FAQ"].map((text) => (
            <Link
              key={text}
              href="#"
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              {text}
            </Link>
          ))}
        </Grid>

        {/* Main Menu */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Main Menu
          </Typography>
          {["Home", "Offers", "Menus", "Reservation"].map((text) => (
            <Link
              key={text}
              href="#"
              underline="none"
              color="text.secondary"
              display="block"
              mb={1}
            >
              {text}
            </Link>
          ))}
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} md={3} id="contact">
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            example@gmail.com
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={1}>
            +64 958 248 966
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Social media
          </Typography>
        </Grid>
      </Grid>

      {/* Bottom Copyright */}
      <Box textAlign="center" mt={5}>
        <Typography variant="caption" color="text.secondary">
          Copyright © 2023 Dscode | All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;