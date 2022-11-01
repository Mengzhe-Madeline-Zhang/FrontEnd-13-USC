import { Typography, Link } from "@mui/material";

function Home() {
  return (
    <div>
   
          <Typography color="primary.dark" variant="h1">
            Welcome! This is home page.
          </Typography>
          <Link href="/login">
          Please sign in & sign up here!
          </Link>
  
    </div>
  );
}

export default Home;