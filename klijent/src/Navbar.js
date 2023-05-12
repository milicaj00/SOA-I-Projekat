import AppBar from "@mui/material/AppBar";
import { Box, Typography, Toolbar, Button } from "@mui/material";

const pages = [
  { val: "REST", link: "/" },
  { val: "gRPC", link: "/grpc" },
  { val: "graphql", link: "/graphql" },
];

const Navbar = () => {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className="cardCenter">
          <Typography
            variant="h6"
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
      <AppBar position="static" color="secondary">
        <Toolbar
          className="cardCenterRow"
          sx={{ minHeight: "48px !important" }}
        >
          {pages.map((page) => (
            <Button key={page.val} href={page.link} sx={{ color: "white" }}>
              {page.val}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
