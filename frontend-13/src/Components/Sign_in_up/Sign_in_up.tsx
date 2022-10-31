import {
    Container,
    Typography,
    TextField,
    Button,
    Link
  } from "@mui/material";

  export type sessionEnum = 'Sign_in' | 'Sign_up'

  interface sessionForm{
      fromType: sessionEnum
  }
  
  function Sign_in_up(props: sessionForm) {
     
    return (
      <Container maxWidth="xs">

        <Typography variant="h3">
          User Form
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            label="Email"
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="First Name"
            fullWidth
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Password"
            type="password"
            fullWidth
            required
          />

          props.fromType? 'Sign_in'(
            <Container>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        <Typography variant="h5">
          New here? 
        </Typography>
        <Link variant="h5" href="/SignUp">
        Please Sign up!
        </Link>
        
            </Container>
          ):(
            <Container>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        <Typography variant="h5">
          Aleady have account? 
        </Typography>
        <Link variant="h5" href="/SignUp">
        Please Sign in here!
        </Link>
              </Container>
          )
          
        </form>
      </Container>
    );
  }
  
  export default Sign_in_up;