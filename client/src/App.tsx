import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home/Home"
import Navbar from './pages/Navbar/Navbar';
import Items from './pages/Items/Items';
import Create_item from './pages/Items/Create_item/Create_item';

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/create" element={<Create_item />} />
        </Routes>
      
    </Router>
  );
}

export default App;
