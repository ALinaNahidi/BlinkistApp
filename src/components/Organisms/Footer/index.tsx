import { Box, Container, Grid, Link } from "@mui/material";

import logo from "../../../Images/logo.png";


const Footer = () => {

  return (
    <footer>
      <Box
        py={{ xs: 5, sm: 10 }}
        bgcolor="#F1F6F4"
        color="#03314B"
      >
        <Container maxWidth="xl" sx={{marginLeft:"15%"}}>
          <Grid container spacing={5}>
            <Grid xs={12} sm={6}>
              <Box
                sx={{ height: "24px", marginTop: "10px" }}
                component="img"
                src={logo}
                alt="logo"
              ></Box>
              <Box>
                <h4>
                  Big ideas in small packages
                  <br /> Start learnign now
                </h4>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ height: "24px" }}>Editorial</Box>
              <Box>
                <Link href="/" color="inherit">
                  Book Lists
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Waht is Nonfiction?
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  What to read next?
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Benefits of reading
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ height: "24px" }}>Useful Links</Box>
              <Box>
                <Link href="/" color="inherit">
                  Pricing
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Blinkist business
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Gift cards
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Blinkist magaine
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact & help
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box sx={{ height: "24px" }}>Company</Box>
              <Box>
                <Link href="/" color="inherit">
                  About
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Careers
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Partners
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Code of Conduct
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            &reg; Blinklist 2021 sitemap | imprint | Terms of Service | Privicy
            Policies
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
