import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import { StyledContainer } from "./Components/Styles";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;

