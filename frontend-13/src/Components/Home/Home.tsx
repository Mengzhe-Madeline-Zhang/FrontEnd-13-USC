import { Typography, Link, Container,Box } from "@mui/material";
import Banner from "./Banner";
import Promotions from "./Promotions";
import Products from "../Products/Products";
import Footer from "./Footer";

function Home() {
  return (
    <div>
       <Promotions/>
      <Banner/>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Trending Products</Typography>
            </Box>
      <Products/>
      <Footer/>
          {/* <Typography color="primary.dark" variant="h1">
            Welcome! This is home page.
          </Typography>
          <Link href="/login">
          Please sign in & sign up here!
          </Link> */}
    </div>
  );
}

export default Home;