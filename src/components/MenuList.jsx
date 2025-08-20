import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

import { addToCart } from "../redux/cartSlice";
import { setSelectedItem } from "../redux/selectedItemSlice";
import menuItems from "../Data/menuItems";

const MenuList = ({ items = menuItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetails = (item) => {
    dispatch(setSelectedItem(item));
    navigate(`/menu/${item.id}`);
  };

  return (
    <Box
      id="menu"
      sx={{
        bgcolor: "#FAFAFA",
        py: 4,
        textAlign: "center",
      }}
    >
      {/* Section Heading */}
      <Typography variant="h6" sx={{ color: "red", fontWeight: 500 }}>
        SPECIAL DISHES
      </Typography>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Standout Dishes From Our Menu
      </Typography>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                src={item.image}
                alt={item.name}
                onClick={() => handleDetails(item)}
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mx: "auto",
                  cursor: "pointer",
                }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {item.description}
                </Typography>
                <Typography variant="subtitle1" fontWeight={700}>
                  ${item.price.toFixed(2)}
                </Typography>
                <Button
                  onClick={() => dispatch(addToCart(item))}
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#39DB4A",
                    textTransform: "none",
                    borderRadius: 1,
                    px: 3,
                    ":hover": { bgcolor: "darkgreen" },
                  }}
                >
                  ADD TO CART
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MenuList;