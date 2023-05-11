import AppBar from "@mui/material/AppBar";
import { Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar>
      <Container maxWidth="xl" sx={{padding:'1%'}}>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textAlign:'center'
            }}
          >
            Maternal Health Risk
          </Typography>
      </Container>
    </AppBar>
  );
};

export default Navbar;
