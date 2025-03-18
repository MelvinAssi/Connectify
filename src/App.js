import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.js";
import SignUpPage from './pages/SignUpPage/SignUpPage.js';
import LoginPage from './pages/LogInPage/LogInPage.js';
import ContactPage from './pages/ContactPage/ContactPage.js';
import ProfilePage from './pages/ProfilePage/ProfilePage.js';

function App() {
  return (
    
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />*
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
