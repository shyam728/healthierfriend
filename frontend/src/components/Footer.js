import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import logo from "../assests/logo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material"
const Footer = () => {
    return (
        <Box
          id="footer"
            component="footer"
            sx={{

                p: 6,
                backgroundColor: "antiquewhite"
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                        <img src={logo} width="200px" height="150px" />
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        A  Healthier Friend,  emphasizes the organization's dedication to holistic care, innovation, and community involvement to create a positive and healthy aging experience for older individuals                  </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Gwalior, Madhya Pradesh
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: XXXXXX@healthierfriend.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: +91 8430X XXXXX
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" >
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"

                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" >
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                    © Copyright 2023 Healthier Friend | All Rights Reserved | Disclaimer
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;