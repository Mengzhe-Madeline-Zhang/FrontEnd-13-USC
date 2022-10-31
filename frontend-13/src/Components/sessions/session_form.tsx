import { Container, Typography, TextField, Button, Link } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export type sessionEnum = "login" | "sign_up";

interface sessionForm {
  formType: sessionEnum;
}

function SessionForm(props: sessionForm) {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [valid, setValid] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (props.formType === "login") {
      debugger;
      setCurrentUser(1);
    } else {
      //logic for signup
    }
  };

  //Sign up password validation
  const handleValidation = (e:any) => {
    var reg = /^(?=.*\d)(?=.*[.!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    setValid(reg.test(e.target.value));
    setPassword(e.target.value);
    console.log(password);
    console.log(valid);
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h3">
        {props.formType === "login" ? "Login" : "Sing Up"}
      </Typography>
      <form onSubmit={submitHandler}>
        {props.formType === "login" ? (
          <div>
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
          <div>
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
            <TextField
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              margin="normal"
              label="First Name"
              fullWidth
              required
            />
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
            <Typography variant="h5">New here?</Typography>
            <Link variant="h5" href="/signup">
              Please Sign up!
            </Link>
          </Container>
        ) : (
          <Container>
            <Button fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
            <Typography variant="h5">Aleady have account?</Typography>
            <Link variant="h5" href="/login">
              Please Sign in here!
            </Link>
          </Container>
        )}
      </form>
    </Container>
  );
}

export default SessionForm;
