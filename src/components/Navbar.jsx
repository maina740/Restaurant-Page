import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpenDrawer(false); // close drawer after click
  };

  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "#FAFAFA", color: "black", boxShadow: "none", py: 0 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "green", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          FOODI
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button color="inherit" onClick={() => handleScroll("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => handleScroll("menu")}>
            Menu
          </Button>
          <Button color="inherit" onClick={() => handleScroll("services")}>
            Services
          </Button>
          <Button color="inherit">Offers</Button>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Total Price */}
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            ${cart.totalPrice.toFixed(2)}
          </Typography>

          {/* Cart Icon */}
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <Badge badgeContent={cart.cartItems.length} color="success">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Contact Button */}
          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            sx={{
              bgcolor: "#39DB4A",
              ":hover": { bgcolor: "darkgreen" },
              textTransform: "none",
              borderRadius: 40,
              display: { xs: "none", md: "inline-flex" }, // hide on mobile
            }}
            onClick={() => handleScroll("contact")}
          >
            Contact
          </Button>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { md: "none" }, ml: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List sx={{ width: 200 }}>
          <ListItem button onClick={() => handleScroll("home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("menu")}>
            <ListItemText primary="Menu" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("services")}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Offers" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("contact")}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;