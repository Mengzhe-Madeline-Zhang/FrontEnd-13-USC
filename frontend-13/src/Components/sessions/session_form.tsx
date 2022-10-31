import {
    Container,
    Typography,
    TextField,
    Button,
    Link
  } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
  export type sessionEnum = 'login' | 'sign_up'

  interface sessionForm{
      formType: sessionEnum
  }
  
  function SessionForm(props: any) {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [currentUser, setCurrentUser] = useState<any | null>(null);

    useEffect(() => {
    },[])

    useEffect(() => {
      if (currentUser){
        navigate("/");
      }
    },[currentUser])
    
    const submitHandler = (e:any) => {
      e.preventDefault();
      if (props.formType === 'login') {
        debugger;
        setCurrentUser(1);
      } else {
        //logic for signup
      }
    }
    return (
      <Container maxWidth="xs">

        <Typography variant="h3">
        {props.formType === 'login' ? 'Login' : 'Sign Up'}
        </Typography>
        <form onSubmit={submitHandler}>
          {props.formType === 'login' ? (
          <div>
            <TextField onChange={(e) => setUsername(e.target.value)} variant="outlined" margin="normal" label="Username" fullWidth required/>
            <TextField onChange={(e) => setPassword(e.target.value)}variant="outlined" margin="normal" label="Password" type="password" fullWidth required/>
          </div>
          ):(
            <div>
              <TextField onChange={(e) => setUsername(e.target.value)} variant="outlined" margin="normal" label="Username" fullWidth required/>
              <TextField onChange={(e) => setName(e.target.value)} variant="outlined" margin="normal" label="First Name" fullWidth required/> 
              <TextField onChange={(e) => setPassword(e.target.value)} variant="outlined" margin="normal" label="Password" type="password" fullWidth required/>
            </div>
          )}
          {props.formType === 'login' ? (
          <Container>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
            <Typography variant="h5">New here?</Typography>
            <Link variant="h5" href="/SignUp">
              Please Sign up!
            </Link>
          </Container>
          ):(
          <Container>
            <Button fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
            <Typography variant="h5">
              Aleady have account? 
            </Typography>
            <Link variant="h5" href="/SignUp">
            Please Sign in here!
            </Link>
          </Container>
          )}
        </form>
      </Container>
    );
  }
  
  export default SessionForm;