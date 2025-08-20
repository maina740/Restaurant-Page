import React from "react";
import { Box, Typography, Button, Stack, Avatar, Paper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import foodGirl from "../assets/Food-girl.png";
import menuItems from "../Data/menuItems";

const Home = () => {
  const navigate = useNavigate();

  const dishes = menuItems.filter(item =>
    item.id === "spicy-noodles" || item.id === "vegetarian-salad"
  );


  return (
    <Box
      sx={{
        id: "home",
        px: { xs: 2, md: 8 },
        py: 8,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 6
      }}
    >
      {/* Left Side */}
      <Box flex={1}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Dive into Delights Of Delectable{" "}
          <Box component="span" sx={{ color: "#39DB4A" }}>Food</Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
        </Typography>

        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#39DB4A", ":hover": { bgcolor: "darkgreen" } }}
            onClick={() => {
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ORDER NOW
          </Button>
          <Button
            variant="outlined"
            startIcon={<PlayArrowIcon />}
            onClick={() => navigate("/video")}
          >
            WATCH VIDEO
          </Button>
        </Stack>
      </Box>

      {/* Right Side */}
      <Box
        flex={1}
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* Green Circle */}
        <Box
          sx={{
            width: 280,
            height: 280,
            bgcolor: "#39DB4A",
            borderRadius: "50%",
            position: "absolute",
            top: "56%",
            left: "52%",
            transform: "translate(-50%, -50%)",
            zIndex: 1
          }}
        />

        {/* Girl Image */}
        <img
          src={foodGirl}
          alt="Food girl"
          style={{
            width: "100%",            // responsive width
            maxWidth: "330px",        // max size
            position: "relative",
            zIndex: 2,
            top: "-20px"
          }}
        />

        {/* Hot Spicy Food Label */}
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: { xs: "5%", sm: "15%", md: "20%" },   // responsive top
            left: { xs: "50%", sm: "20%", md: "12%" }, // xs pe center
            transform: { xs: "translateX(-50%)", sm: "none" }, // xs me horizontally center
            px: 1.5,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            bgcolor: "white",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            zIndex: 3
          }}
        >
          <Typography variant="body2" color="error" fontWeight={600}>
            Hot spicy Food
          </Typography>
          <span role="img" aria-label="chili">🌶️</span>
        </Paper>

        {/* Dish Cards */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: "absolute",
            bottom: "-40px",
            zIndex: 3
          }}
        >
          {dishes.map((item) => (
            <Paper
              key={item.id}
              elevation={3}
              onClick={() => navigate(`/menu/${item.id}`, { state: item })}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 1.5,
                borderRadius: 3,
                minWidth: 160,
                cursor: "pointer",
                ":hover": { boxShadow: 6 }
              }}
            >
              <Avatar
                src={item.image}
                alt={item.name}
                sx={{ width: 50, height: 50, mr: 1 }}
              />
              <Box>
                <Typography variant="body2" fontWeight={600}>
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {[...Array(Math.round(item.rating))].map((_, idx) => (
                    <StarIcon
                      key={idx}
                      sx={{ color: "#FFD700", fontSize: 16 }}
                    />
                  ))}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;