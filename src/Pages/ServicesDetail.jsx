import React from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const services = [
    {
        icon: <RoomServiceIcon sx={{ fontSize: 40, color: "green" }} />,
        title: "CATERING",
        desc: "We provide full catering services for weddings, parties, and corporate events.",
    },
    {
        icon: <LocalShippingIcon sx={{ fontSize: 40, color: "green" }} />,
        title: "FAST DELIVERY",
        desc: "Our delivery system ensures your food arrives hot and fresh, within 30–45 minutes.",
    },
    {
        icon: <ShoppingCartIcon sx={{ fontSize: 40, color: "green" }} />,
        title: "ONLINE ORDERING",
        desc: "Order from our website or app with just a few clicks — quick and secure!",
    },
    {
        icon: <CardGiftcardIcon sx={{ fontSize: 40, color: "green" }} />,
        title: "GIFT CARDS",
        desc: "Perfect for birthdays, anniversaries, or special occasions.",
    },
];

const ServicesDetail = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ px: { xs: 2, md: 10 }, py: 10, bgcolor: "#FAFAFA" }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                Our Services
            </Typography>

            <Grid container spacing={3} mb={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} key={index}> {/* ✅ Row-wise */}
                        <Paper
                            elevation={3}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                textAlign: "center",
                                mb: 2,
                                boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                            }}
                        >
                            {service.icon}
                            <Typography variant="h6" fontWeight={700} color="green" mt={1}>
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" mt={0.5}>
                                {service.desc}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* ✅ Back Button */}
            <Button
                variant="contained"
                startIcon={<ArrowBackIcon />}   // ✅ arrow at the start
                onClick={() => navigate("/")}
                sx={{
                    bgcolor: "#39DB4A",
                    px: 3,
                    py: 1,
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: 500,
                    ":hover": { bgcolor: "darkgreen" },
                }}
            >
                Back to Home
            </Button>
        </Box>
    );
};

export default ServicesDetail;