import './App.css';
import Home from "./Components/Home/Home";
import Sign_in_up from './Components/Sign_in_up/Sign_in_up';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
   
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/* <Route path="Sign_in">
                    <Route index element={<Sign_in_up props={fromType: "Sign_in"}/>} />
                </Route> */}
            </Routes>
        </BrowserRouter>
  );
}

export default App;
