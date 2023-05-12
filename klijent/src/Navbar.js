import AppBar from "@mui/material/AppBar";
import { Box, Typography, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="cardCenter">
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Maternal Health Risk
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
