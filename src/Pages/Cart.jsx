import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import { Add, Remove, Delete, ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("✅ Checkout successful! Thank you for your order.");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Your Cart <ShoppingCart sx={{ fontSize: 35, verticalAlign: "middle" }} />
      </Typography>

      {cartItems.length === 0 ? (
        <Typography variant="h6" color="text.secondary">
          Cart is empty 🛒
        </Typography>
      ) : (
        <>
          <Stack spacing={2}>
            {cartItems.map((dish) => (
              <Card
                key={dish.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                }}
              >
                {/* Dish Image */}
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80, borderRadius: 2 }}
                  image={dish.image}
                  alt={dish.name}
                />

                {/* Dish Info */}
                <CardContent sx={{ flex: 1, textAlign: "left" }}>
                  <Typography variant="h6">{dish.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${dish.price} each
                  </Typography>
                </CardContent>

                {/* Quantity Controls */}
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton
                    color="error"
                    onClick={() => dispatch(decreaseQuantity(dish.id))}
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{dish.quantity}</Typography>
                  <IconButton
                    color="success"
                    onClick={() => dispatch(increaseQuantity(dish.id))}
                  >
                    <Add />
                  </IconButton>
                </Stack>

                {/* Price */}
                <Typography variant="h6" sx={{ mx: 2 }}>
                  ${dish.price * dish.quantity}
                </Typography>

                {/* Remove Button */}
                <IconButton
                  color="error"
                  onClick={() => dispatch(removeFromCart(dish.id))}
                >
                  <Delete />
                </IconButton>
              </Card>
            ))}
          </Stack>

          {/* Total */}
          <Typography variant="h5" sx={{ mt: 3 }}>
            Total: ${totalPrice}
          </Typography>

          {/* Buttons */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3, flexWrap: "wrap" }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>

            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/")}
              startIcon={<Add />}
            >
              Add More Dishes
            </Button>

            <Button
              variant="contained"
              color="success"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Cart;