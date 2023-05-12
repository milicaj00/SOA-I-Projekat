import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import Forma from "./Forma";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Main from "./Main";
import { DataTable } from "./DataTable";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F15A59",
      contrastText: "white",
      light: "white",
    },
    secondary: {
      main: "#070A52",
      contrastText: "white",
    },
    error: {
      main: "#a71313",
    },
    text: {
      primary: "#7F8487",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Navbar />
        <Forma />
        <DataTable />
      </Box>
    </ThemeProvider>
  );
}

export default App;
