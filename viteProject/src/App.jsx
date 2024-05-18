import About from './About.jsx';
import './App.css'
import ContactUs from './ContactUs.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from './Home.jsx';
import Nav from 'react-bootstrap/Nav';
function App() {

  return (
    <>


    <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link to="/home">home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link to="/about">about</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
