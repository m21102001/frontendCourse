import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Header from '../layout/Header';
import DetailsItem from '../pages/DetailsItem'
import CreateNewItem from '../pages/CreateNewItem';

const Routers = () => {
  return (
    <div className="main-div">
      <Router>
        <Header />
        <Routes>
          <Route path="/dash/dashboard/" element={<Home />} />
          <Route path="/dash/dashboard/detalis/:id" element={<DetailsItem />} />
          <Route path="/dash/dashboard/create-new-item" element={<CreateNewItem />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>

  );
};

export default Routers;
