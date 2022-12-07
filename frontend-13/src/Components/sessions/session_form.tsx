import { Container, Typography, TextField, Button, Link, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export type sessionEnum = "login" | "sign_up";

interface sessionForm {
  formType: sessionEnum;
}

function SessionForm(props: any) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);
  const [loginErr, setLoginErr] = useState(false);
  const [signUpErr, setSignUpErr] = useState(false);

  useEffect(() => {
    console.log(props.formType)
    if(props.formType === "login") {
      console.log(username);
    }
  },[])
  
  
  useEffect(() => {
    if (props.currentUser) {
      navigate("/");
      return;
    }
    if (props.signUpStatus === 'SUCCESS') {
      navigate("/login")
    }
  },[props.currentUser, props.signUpStatus])


  const submitHandler = (e: React.SyntheticEvent ): void =>  {
    e.preventDefault();
    if (props.formType ===  'login') {
      props.login({
        username: username,
        password: password
      })
    } else {
      props.signUp({
        username: username,
        password: password
      })
    }
  }

  useEffect(() => {

  },[props.currentUser])


  //Sign up password validation
  const handleValidation = (e:any) => {
    var reg = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    setValid(reg.test(e.target.value));
    setPassword(e.target.value);
  };

  return (
    <Container className="login-container" maxWidth="xs">

      <Typography variant="h3" align="center">
        {props.formType === "login" ? "Login" : "Sign Up"}
      </Typography>
      <form onSubmit={submitHandler}>
        {props.formType === "login" ? (
          <div className='login-labels-container'>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Username"
              fullWidth
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              fullWidth
              required
            />
          </div>
        ) : (
          <div className='login-labels-container'>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              label="Username"
              value={username}
              error={username!=="" && username.length<3}
              helperText={username!=="" && username.length<3?'User name must be 3 characters long!':''}
              fullWidth
              required
            />
            {/* <TextField
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              margin="normal"
              label="First Name"
              fullWidth
              required
            /> */}
            <TextField
              onChange={(e) => handleValidation(e)}
              variant="outlined"
              margin="normal"
              label="Password"
              type="password"
              value={password}
              error={!valid}
              helperText={!valid?'Password must be minimum 4 characters, at least one uppercase letter, one lowercase letter, one number and one special character':''}
              fullWidth
              required
            />
          </div>
        )}
        {props.formType === "login" ? (
          <Container>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Login
            </Button>
            <Typography variant="h6">New here?</Typography>
            <Link variant="h6" href="/signup">
              Please Sign up!
            </Link>
          </Container>
        ) : (
          <Container>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
            <Typography variant="h6" >Aleady have account?</Typography>
            <Link variant="h6" href="/login">
              Please Sign in here!
            </Link>
          </Container>
        )}
        {
          props.formType === 'login' ? (
            props.loginError ? <p>Your credentials are incorrect</p> : <></>
          )
          :
          (
            props.signUpError ? <p>Your username is taken! Please try another one!</p> : <></>
          )
        }
      </form>

    </Container>
  );
}

export default SessionForm;
