import { Typography, Link, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import NavBar from "../public/NavBar/NavBar";
import Banner from "./Banner";
import Promotions from "./Promotions";

function Home() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}>
   <Container
    sx={{
      background: "#fff",
    }}> */}
      
      {/* <NavBar/> */}
      <Promotions/>
      <Banner/>
          <Typography color="primary.dark" variant="h1">
            Welcome! This is home page.
          </Typography>
          <Link href="/login">
          Please sign in & sign up here!
          </Link>
    
    {/* </Container>
    </ThemeProvider> */}
    </div>
  );
}

export default Home;