import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useNavigate } from "react-router-dom";


const services = [
  {
    icon: <RoomServiceIcon sx={{ fontSize: 40, color: "green" }} />,
    title: "CATERING",
    desc: "Delight your guests with our flavors and presentation",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40, color: "green" }} />,
    title: "FAST DELIVERY",
    desc: "We deliver your order promptly to your door",
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 40, color: "green" }} />,
    title: "ONLINE ORDERING",
    desc: "Explore menu & order with ease using our Online Ordering",
  },
  {
    icon: <CardGiftcardIcon sx={{ fontSize: 40, color: "green" }} />,
    title: "GIFT CARDS",
    desc: "Give the gift of exceptional dining with Foodi Gift Cards",
  },
];

const CulinaryServices = () => {
  const navigate = useNavigate();
  
  return (
    <Box
      id="services"
      sx={{ px: { xs: 2, md: 10 }, py: 10, bgcolor: "#FAFAFA" }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Column - Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="error" fontWeight="bold">
            Our Story & Services
          </Typography>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Our Culinary Journey <br /> And Services
          </Typography>
          <Typography color="text.secondary" mb={4}>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#39DB4A",
              px: 4,
              py: 1,
              borderRadius: 20,
              textTransform: "none",
              fontWeight: 500,
              ":hover": { bgcolor: "darkgreen" },
            }}
            onClick={() => navigate("/services-detail")}
          >
            Explore
          </Button>
        </Grid>

        {/* Right Column - 2x2 Cards */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    textAlign: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    ":hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  {service.icon}
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    color="green"
                    mt={1}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={0.5}
                  >
                    {service.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box >
  );
};

export default CulinaryServices;