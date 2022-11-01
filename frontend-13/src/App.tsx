import './App.css';
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SessionForm from "./Components/sessions/session_container"

function App() {

  return (
   
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/login' element={<SessionForm formType='login'/>} />
                <Route path='/signup' element={<SessionForm formType='sign_up'/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
