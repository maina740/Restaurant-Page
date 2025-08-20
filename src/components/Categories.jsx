import React from "react";
import { Box, Grid, Typography, Paper, Avatar } from "@mui/material";

const categories = [
  {
    title: "Main Dish",
    subtitle: "86 dishes",
    img: "src/assets/Main-Dish.png",
  },
  {
    title: "Break Fast",
    subtitle: "12 break fast",
    img: "src/assets/breakfast.png",
  },
  {
    title: "Dessert",
    subtitle: "48 dessert",
    img: "src/assets/Dessert.png",
  },
  {
    title: "Browse All",
    subtitle: "255 items",
    img: "src/assets/Browse All.png",
  },
];

const Categories = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 8, textAlign: "center", bgcolor: "#FAFAFA"}}>
      <Typography
        variant="overline"
        color="error"
        fontWeight="bold"
        gutterBottom
      >
        Customer Favorites
      </Typography>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Popular Categories
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((cat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 4,
                textAlign: "center",
                transition: "0.3s",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Avatar
                src={cat.img}
                alt={cat.title}
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: "#e0f2f1",
                  mx: "auto",
                  mb: 2,
                }}
              />
              <Typography variant="subtitle1" fontWeight={600}>
                {cat.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cat.subtitle}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;