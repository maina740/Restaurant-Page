import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import menuItems from "../Data/menuItems";
import { Box, Typography, Avatar, Rating, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const MenuDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Find dish from menuItems array (convert id to string just in case)
  const dish = menuItems.find((item) => String(item.id) === id);

  if (!dish) {
    return (
      <Box p={4}>
        <Typography variant="h5" color="error">
          Dish not found 😢
        </Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{ mt: 2 }}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box p={4}>
      {/* Back button */}
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Avatar
        src={dish.image}
        alt={dish.name}
        sx={{ width: 150, height: 150, mb: 2 }}
      />
      <Typography variant="h4" fontWeight={700}>
        {dish.name}
      </Typography>
      <Rating value={dish.rating} precision={0.5} readOnly />
      <Typography variant="body1" mt={2}>
        {dish.description}
      </Typography>
      <Typography variant="h6" color="primary" mt={2}>
        ${dish.price}
      </Typography>

      {/* Add to Cart Button */}
      <Button
        variant="contained"
        startIcon={<ShoppingCartIcon />}
        sx={{ mt: 3,  bgcolor: "#39DB4A", ":hover": { bgcolor: "darkgreen"}  }}
        onClick={() => dispatch(addToCart(dish))}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default MenuDetail;