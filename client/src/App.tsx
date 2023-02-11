import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./pages/Home/Home"
import Navbar from './pages/Navbar/Navbar';
import Items from './pages/Items/Items';
import Create_item from './pages/Items/Create_item/Create_item';
import Item_preview from './pages/Items/Item_preview/Item_preview';
import Edit_item from './pages/Items/Edit_item/Edit_item';
import Delete_item from './pages/Items/Delete_item/Delete_item';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/create" element={<Create_item />} />
          <Route path="/items/:id" element={<Item_preview />} />
          <Route path="/items/update/:id" element={<Edit_item />} />
          <Route path="/items/delete/:id" element={<Delete_item />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      
    </Router>
  );
}

export default App;
