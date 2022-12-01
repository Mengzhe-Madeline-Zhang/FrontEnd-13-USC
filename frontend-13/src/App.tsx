import './App.css';
import {useState} from 'react';
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SessionForm from "./Components/sessions/session_container"
import NavBar from './Components/public/NavBar/NavBar';
import { Typography, Link, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import {Provider} from 'react-redux';
import store from './Redux/store'


function App() {



  return (
    <>
    <Provider store={store}>
       <div>
      <ThemeProvider theme={theme}>
   <Container
    sx={{
      background: "#fff",
    }}>
    <NavBar/>


    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/login' element={<SessionForm formType='login'/>} />
                <Route path='/signup' element={<SessionForm formType='sign_up'/>} />
            </Routes>
        </BrowserRouter>

    </Container>
    </ThemeProvider>
    </div>
    </Provider>
        </>
  );
}

export default App;
